import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Modal } from "../every/modal";
import "react-quill/dist/quill.snow.css";
import { FetchTriggerContext } from "@/context/fetchTrigger";

// firebase
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import app from "@/lib/firebase/init";
import { ModalAppearContext } from "@/context/modalAppear";
import Image from "next/image";
import Loading from "../every/loading";
import { useSession } from "next-auth/react";
import { AlertSuccessContext } from "@/context/alertSuccess";
import { AlertFailedContext } from "@/context/alertFailed";
import { AlertMessageContext } from "@/context/alertMessage";
import { CustomeSession } from "@/interface/customeSession";
import DynamicReactQuill from "../layanan/DynamicReactQuill";

const TambahKegiatan = () => {
  // CONTEXT
  const { setFetchTrigger } = useContext(FetchTriggerContext) as {
    setFetchTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  };
  const { setShowModal } = useContext(ModalAppearContext) as {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  };
  const { setAlertS } = useContext(AlertSuccessContext) as {
    setAlertS: React.Dispatch<React.SetStateAction<boolean>>;
  };
  const { setAlertF } = useContext(AlertFailedContext) as {
    setAlertF: React.Dispatch<React.SetStateAction<boolean>>;
  };
  const { setAlertMessage } = useContext(AlertMessageContext) as {
    setAlertMessage: React.Dispatch<React.SetStateAction<string>>;
  };

  const [value, setValue] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  console.log(image);
  const [imageMessage, setImageMessage] = useState<string>("");
  const storage = getStorage(app);
  const { data: session } = useSession() as { data: CustomeSession | null };
  console.log(session);

  const handleAddLayanan = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (image === null) {
      setImageMessage("gambar harus diisi");
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => {
          setImageMessage("");
        }, 1000);
      }, 1000);
      return;
    }
    const form = e.target as HTMLFormElement;
    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const ketSingkat = (
      form.elements.namedItem("ketsingkat") as HTMLInputElement
    ).value;
    const linkvideo = (form.elements.namedItem("linkvideo") as HTMLInputElement)
      .value;
    const data = {
      title,
      ketSingkat,
      keterangan: value,
      linkvideo,
      image: "",
      created_At: Date(),
    };
    if (session) {
      const res = await fetch("/api/kegiatan/addkegiatan", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.token}` || "",
        },
        cache: "no-store",
      });

      if (res.ok) {
        const response = await res.json();
        const idKegiatan = response.data;
        const image = form.image.files[0];
        const newName = `kegiatan-image.${image.name.split(".")[1]}`;
        const storageRef = ref(
          storage,
          `images/kegiatan/${idKegiatan}/${newName}`
        );
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
          },
          (err) => {
            console.log(err);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((imageURL) => {
              const kegiatanImage = async () => {
                const res = await fetch("/api/kegiatan/updateimagekegiatan", {
                  method: "POST",
                  body: JSON.stringify({ idKegiatan, imageURL }),
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${session?.token}` || "",
                  },
                  cache: "no-store",
                });
                const response = await res.json();
                if (res.ok) {
                  setLoading(true);
                  setAlertS(true);
                  setAlertMessage(response.message);
                  setShowModal(false);
                  setTimeout(() => {
                    setAlertS(false);
                    setFetchTrigger((prev: boolean) => !prev);
                    setAlertMessage("");
                  }, 2500);
                } else {
                  console.log(response);
                  setAlertMessage(response.message);
                  setShowModal(false);
                  setAlertF(true);
                  setTimeout(() => {
                    setAlertF(false);
                    setFetchTrigger((prev: boolean) => !prev);
                    setAlertMessage("");
                  }, 2500);
                }
              };
              kegiatanImage();
            });
          }
        );
      } else {
        setLoading(false);
        console.log(res);
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const name = e.target.files[0].name.split(".")[1];
      if (name !== "jpg") {
        setImage(null);
        setImageMessage("harus format: .jpg");
        setTimeout(() => {
          setLoading(false);
          setTimeout(() => {
            setImageMessage("");
          }, 1000);
        }, 1000);
      } else if (e.target.files[0].size > 819200) {
        setImage(null);
        setImageMessage("size lebih dari 800kb");
        setTimeout(() => {
          setLoading(false);
          setTimeout(() => {
            setImageMessage("");
          }, 1000);
        }, 1000);
      } else {
        setImage(e.target.files[0]);
      }
    }
  };

  return (
    <Modal>
      <div className="max-w-[35em] w-full h-[27.7em] overflow-auto bg-white p-5">
        <form
          onSubmit={(e) => handleAddLayanan(e)}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Title"
            className="text-sm focus:outline-none border-[2px] border-[#990000] px-3 py-2 rounded-md"
            name="title"
            required
          />
          <input
            type="text"
            placeholder="keterangan singkat kegiatan"
            className="text-sm focus:outline-none border-[2px] border-[#990000] px-3 py-2 rounded-md"
            name="ketsingkat"
            required
          />
          <input
            type="text"
            placeholder="Masukan link video"
            className="text-sm focus:outline-none border-[2px] border-[#990000] px-3 py-2 rounded-md"
            name="linkvideo"
            required
          />
          <DynamicReactQuill
            value={value}
            onChange={(content: string) => setValue(content)}
          />
          <div className="flex justify-center items-center gap-3">
            <label
              htmlFor="image"
              className="text-sm text-gray-700 border-2 text-center p-2 rounded-md w-[9em] hover:cursor-pointer"
            >
              masukan gambar disini, maximal <strong>800kb</strong> & format{" "}
              <strong>.jpg</strong>
            </label>
            {image && (
              <Image
                src={image ? URL.createObjectURL(image) : ""}
                alt=""
                width={100}
                height={100}
                className="w-[10em]"
              />
            )}
            {imageMessage !== "" && (
              <span className="text-red-400 text-sm">{imageMessage}</span>
            )}
          </div>
          <input
            onChange={handleChange}
            id="image"
            name="image"
            type="file"
            className="hidden"
            required
          />
          <button
            type="submit"
            className="text-sm border-2 border-[#990000] text-[#990000] hover:bg-[#990000] hover:text-white py-1 rounded-md"
          >
            {loading ? (
              <div className="flex flex-col items-center justify-center gap-3">
                <Loading color="text-white" />
              </div>
            ) : (
              "Tambahkan Kegiatan"
            )}
          </button>
        </form>
      </div>
    </Modal>
  );
};
export default TambahKegiatan;
