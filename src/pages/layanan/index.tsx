import Loading from "@/components/every/loading";
import Footer from "@/components/footer/footer";
import TambahLayanan from "@/components/layout/tambahLayanan";
import ClientNavbar from "@/components/navbar/clientNavbar";
import { ModalAppearContext } from "@/context/modalAppear";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { FaFileExcel } from "react-icons/fa";
import { FetchTriggerContext } from "@/context/fetchTrigger";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { AlertSuccessContext } from "@/context/alertSuccess";

const LayananPage = () => {
  const kontakRef = useRef<HTMLDivElement>(null);
  const [layanan, setLayanan] = useState<any>(false);
  const { data: session } = useSession();

  // CONTEXT
  const { fetchTrigger }: any = useContext(FetchTriggerContext);
  const { showModal, setShowModal }: any = useContext(ModalAppearContext);
  const { alertS }: any = useContext(AlertSuccessContext);

  useEffect(() => {
    const fetchLayanan = async () => {
      const res = await fetch("/api/layanan/getall", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        console.log("ini adalah data", data.data);
        setLayanan(data.data);
      } else {
        console.log(res);
      }
    };
    fetchLayanan();
  }, [fetchTrigger, alertS]);

  const scrollToKontak = () => {
    if (kontakRef.current) {
      kontakRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="-PROFILE- overflow-x-hidden">
      <ClientNavbar scroll={{ scrollToKontak }} />
      <div className="-HERO- px-0 sm:px-5 mt-5 pt-20">
        <div className="-IMAGE- flex pe-7 pb-7 justify-end items-end h-[13em] md:h-[17em] bg-[url('/images/banner.jpg')]">
          <h1 className="text-3xl text-white font-bold">Layanan</h1>
        </div>
      </div>

      <div className="-LAYANAN- md:px-5 px-0">
        <div className="bg-[#f2f2f2] min-h-[20em] mt-8 p-4">
          <h1 className="font-bold text-2xl text-center mb-5 text-yellow-500">
            Semua Layanan
          </h1>
          <div className="max-w-[65em] mx-auto flex">
            <div
              onClick={() => setShowModal(true)}
              className={`-BUTTON- flex items-center hover:cursor-pointer border-2 border-yellow-400 text-yellow-400 px-2 p-1 rounded-md hover:bg-yellow-400 hover:text-white ${
                session ? "block" : "hidden"
              }`}
            >
              <div>
                <IoIosAdd className="text-2xl" />
              </div>
              <span>Tambahkan layanan</span>
            </div>
          </div>
          <div className="-CONTENT- max-w-[65em] mb-16 mx-auto py-3 flex flex-wrap gap-5 justify-center items-center">
            {layanan.length > 0 ? (
              layanan.map((item: any, index: number) => (
                <div
                  key={index}
                  className="-CARD- w-[20em] min-h-[14em] bg-white p-2 rounded-md flex flex-col items-start gap-4"
                >
                  <Image
                    src={item.image}
                    alt="tes"
                    width={700}
                    height={700}
                    className="w-full h-[160px] object-cover"
                  />
                  <div className="flex items-center justify-start px-3 gap-2 bg-[rgba(60,250,215,.2)] rounded-xl">
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <h4 className="text-sm">Layanan</h4>
                  </div>
                  <div>
                    <h2 className="font-bold underline hover:no-underline hover:cursor-pointer hover:text-blue-400">
                      <Link href={`/layanan/${item.id}`}>{item.title}</Link>
                    </h2>
                    <p className="text-sm text-gray-400">{item.ketSingkat}</p>
                    <div className="flex items-center justify-start mt-3">
                      <button
                        type="button"
                        className="px-5 py-2 bg-green-400 text-white rounded-md"
                      >
                        <Link href={`/layanan/${item.id}`}>Detail</Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : layanan.length === 0 ? (
              <div className="flex gap-2 text-gray-400">
                <div>
                  <FaFileExcel className="text-xl" />
                </div>
                <span>Layanan masih kosong</span>
              </div>
            ) : (
              layanan == false && (
                <div className="flex flex-col items-center justify-center gap-3">
                  <Loading color="text-yellow-400" />
                  <span className="text-sm">Loading..</span>
                </div>
              )
            )}
          </div>
        </div>
        {/* ALERT */}
        {/* <AlertSuccess
          className={`${alertS ? "block" : "hidden"}`}
          message={alertMessage}
        />
        <AlertFailed
          className={`${alertF ? "block" : "hidden"}`}
          message={alertMessage}
        /> */}
      </div>
      {showModal && <TambahLayanan />}
      <Footer kontakRef={kontakRef} />
    </div>
  );
};
export default LayananPage;
