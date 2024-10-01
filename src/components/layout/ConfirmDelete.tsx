import { ModalAppearContext } from "@/context/modalAppear";
import { Modal } from "../every/modal";
import { useContext, useState } from "react";
import Loading from "../every/loading";
import { deleteObject, getStorage, ref } from "firebase/storage";
import app from "@/lib/firebase/init";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { ConfirmDeleteContext } from "@/context/confirmDeleteContext";
import { FetchTriggerContext } from "@/context/fetchTrigger";

const ConfirmDelete = ({ from, id }: { from: string; id: string }) => {
  const { setShowModal }: any = useContext(ModalAppearContext);
  const { setConfirmDelete }: any = useContext(ConfirmDeleteContext);
  const { setFetchTrigger }: any = useContext(FetchTriggerContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { data: session }: any = useSession();
  const storage = getStorage(app);
  const { push } = useRouter();

  const handleDelete = async () => {
    setIsLoading(true);
    if (from === "layanan") {
      const res = await fetch(`/api/layanan/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.token}` || "",
        },
        cache: "no-store",
      });
      if (res.ok) {
        console.log("berhasil menghapus layanan");
        const filePath = `images/layanan/${id}/layanan-image.jpg`;
        const storageRef = ref(storage, filePath);
        try {
          await deleteObject(storageRef);
          setIsLoading(false);
          setTimeout(() => {
            push("/layanan");
            setShowModal(false);
          }, 1000);
        } catch (err) {
          console.log("ada yang error kawaw: ", err);
        }
      }
    } else if (from === "kegiatan") {
      const res = await fetch(`/api/kegiatan/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.token}` || "",
        },
        cache: "no-store",
      });
      if (res.ok) {
        const filePath = `images/kegiatan/${id}/kegiatan-image.jpg`;
        const storageRef = ref(storage, filePath);
        try {
          await deleteObject(storageRef);
          setIsLoading(false);
          setTimeout(() => {
            push("/kegiatan");
            setShowModal(false);
          }, 1000);
        } catch (err) {
          console.log("ada yang error kawaw: ", err);
        }
      }
    } else if (from === "jurnal") {
      const res = await fetch(`/api/jurnal/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.token}` || "",
        },
        cache: "no-store",
      });
      if (res.ok) {
        const filePath = `images/jurnal/${id}/jurnal-image.jpg`;
        const storageRef = ref(storage, filePath);
        try {
          await deleteObject(storageRef);
          setIsLoading(false);
          setTimeout(() => {
            setShowModal(false);
            setConfirmDelete(false);
            setFetchTrigger((prev: any) => !prev);
          }, 1000);
        } catch (err) {
          console.log("ada yang error kawan: ", err);
        }
      }
    } else if (from === "kerjasama") {
      const res = await fetch(`/api/kerjasama/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.token}` || "",
        },
        cache: "no-store",
      });
      if (res.ok) {
        const filePath = `images/kerjasama/${id}/kerjasama-image.png`;
        const storageRef = ref(storage, filePath);
        try {
          await deleteObject(storageRef);
          setIsLoading(false);
          setTimeout(() => {
            setShowModal(false);
            setConfirmDelete(false);
            setFetchTrigger((prev: any) => !prev);
          }, 1000);
        } catch (err) {
          console.log("ada yang error kawan: ", err);
        }
      }
    }
  };
  return (
    <Modal>
      <div role="alert" className="alert max-w-[30em] w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info h-6 w-6 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>Yakin menghapus ?</span>
        <div className="">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center gap-3">
              <Loading color="text-[#990000]" />
            </div>
          ) : (
            <div>
              <button
                className="btn btn-sm"
                onClick={() => {
                  setShowModal(false);
                  setConfirmDelete(false);
                }}
              >
                Deny
              </button>
              <button onClick={handleDelete} className="btn btn-sm btn-primary">
                Accept
              </button>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmDelete;
