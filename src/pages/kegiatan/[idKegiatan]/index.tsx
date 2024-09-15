import VideoComponent from "@/components/detailLayananOrKegiatan/videoComponent";
import HTMLContent from "@/components/every/htmlContent";
import Loading from "@/components/every/loading";
import Footer from "@/components/footer/footer";
import ConfirmDelete from "@/components/layout/ConfirmDelete";
import ClientNavbar from "@/components/navbar/clientNavbar";
import { ModalAppearContext } from "@/context/modalAppear";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";

const DetailLayanan = () => {
  const kontakRef = useRef<HTMLDivElement>(null);
  const [kegiatan, setKegiatan] = useState<any>(false);
  const { showModal, setShowModal }: any = useContext(ModalAppearContext);
  const { data: session } = useSession();
  const router: any = useRouter();

  const fetchDetailLayanan = async () => {
    const res = await fetch(
      `/api/kegiatan/detailkegiatan/${router.query.idKegiatan}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );
    if (res.ok) {
      const data = await res.json();
      console.log("detail kegiatan : ", data);
      setKegiatan(data.data);
    } else {
      const data = await res.json();
      console.log(data);
    }
  };

  useEffect(() => {
    fetchDetailLayanan();
  }, [router.query.idKegiatan]);

  const scrollToKontak = () => {
    if (kontakRef.current) {
      kontakRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <ClientNavbar scroll={{ scrollToKontak }} />
      <div className="-DETAIL LAYANAN CONTENT- mt-24 min-h-[20em] bg-[#f2f2f2] py-5">
        <div className="-CONTENT- max-w-[50em] mx-auto">
          {kegiatan ? (
            <div className="flex flex-col items-start gap-3 bg-white">
              <div className="w-full">
                <Image
                  src={kegiatan.image}
                  alt={kegiatan.title}
                  width={700}
                  height={700}
                  className="w-full"
                />
              </div>
              <div className="flex flex-col items-start gap-3 px-3">
                <div className="flex items-center justify-start px-3 gap-2 bg-[rgba(60,250,215,.2)] rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <h4 className="text-sm">Kegiatan</h4>
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{kegiatan.title}</h2>
                </div>
                <VideoComponent url={kegiatan.linkvideo} />
                <HTMLContent content={kegiatan.keterangan} />
              </div>
              <div
                className={`${
                  session ? "block" : "hidden"
                } px-2 flex justify-end w-full mb-2`}
              >
                <button
                  type="button"
                  className="px-5 py-2 bg-red-400 hover:bg-red-600 text-white rounded-md"
                  onClick={() => setShowModal(true)}
                >
                  Hapus kegiatan
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 pt-10">
              <Loading color="text-[#990000]" />
              <span className="text-sm">Loading..</span>
            </div>
          )}
        </div>
      </div>
      <Footer kontakRef={kontakRef} />
      {showModal && (
        <ConfirmDelete from="kegiatan" id={router.query.idKegiatan} />
      )}
    </div>
  );
};
export default DetailLayanan;
