// import Loading from "@/components/every/loading";
import Footer from "@/components/footer/footer";
import ClientNavbar from "@/components/navbar/clientNavbar";
import { ModalAppearContext } from "@/context/modalAppear";
import { useContext, useEffect, useRef, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { FetchTriggerContext } from "@/context/fetchTrigger";
import { useSession } from "next-auth/react";
import { AlertSuccessContext } from "@/context/alertSuccess";
import TambahKerjasama from "@/components/layout/tambahKerjasama";
import Image from "next/image";

// ICONS
import { MdConnectWithoutContact } from "react-icons/md";
import { BsCalendar2DateFill } from "react-icons/bs";
import Loading from "@/components/every/loading";
import { FaFileExcel } from "react-icons/fa";
import HTMLContent from "@/components/every/htmlContent";
import { FaTrash } from "react-icons/fa";
import { ConfirmDeleteContext } from "@/context/confirmDeleteContext";
import ConfirmDelete from "@/components/layout/ConfirmDelete";

const KerjasamaPage = () => {
  const { data: session } = useSession();
  const kontakRef = useRef<HTMLDivElement>(null);
  const [kerjasama, setKerjasama] = useState<any>(false);
  const [idKerjasama, setIdKerjasama] = useState<string>("");

  // CONTEXT
  const { fetchTrigger }: any = useContext(FetchTriggerContext);
  const { showModal, setShowModal }: any = useContext(ModalAppearContext);
  const { confirmDelete, setConfirmDelete }: any =
    useContext(ConfirmDeleteContext);
  const { alertS }: any = useContext(AlertSuccessContext);

  useEffect(() => {
    const fetchLayanan = async () => {
      const res = await fetch("/api/kerjasama/getall", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        setKerjasama(data.data);
      } else {
        console.log(res);
      }
    };
    fetchLayanan();
  }, [fetchTrigger, alertS, showModal]);

  const scrollToKontak = () => {
    if (kontakRef.current) {
      kontakRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDelete = (idKerjasama: string) => {
    setConfirmDelete(true);
    setIdKerjasama(idKerjasama);
  };
  return (
    <div className="-PROFILE- overflow-x-hidden">
      <ClientNavbar scroll={{ scrollToKontak }} />
      <div className="-HERO- px-0 sm:px-5 mt-5 pt-20">
        <div className="-IMAGE- flex pe-7 pb-7 justify-end items-end h-[13em] md:h-[17em] bg-[url('/images/banner.jpg')]">
          <h1 className="text-3xl text-white font-bold">Kerjasama</h1>
        </div>
      </div>

      <div className="-LAYANAN- px-0 md:px-5">
        <div className="bg-[#f2f2f2] min-h-[20em] mt-8 p-4">
          <h1 className="font-bold text-2xl text-center mb-5 text-yellow-500">
            Semua Kerjasama
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
              <span>Tambahkan Kerjasama</span>
            </div>
          </div>
          <div className="-CONTENT WRAPPER- mt-4 max-w-[65em] min-h-48 mb-16 mx-auto py-3 flex flex-wrap gap-5 justify-center items-center">
            {kerjasama.length > 0 ? (
              kerjasama.map((e: any, i: number) => (
                <div
                  key={i}
                  className="CONTENT bg-white p-3 flex flex-col md:flex-row gap-3 max-w-[65em] w-full rounded-md relative" // Tambahkan relative untuk positioning tombol hapus
                >
                  <div className="-LEFT CONTENT- w-full md:w-[30em] flex items-center justify-center">
                    <div className="-LOGO CAMPUS text-sm flex flex-col justify-center items-center gap-3">
                      <Image
                        src={"/images/logo_kampus.png"}
                        alt="Logo_kampus"
                        width={200}
                        height={200}
                        className="drop-shadow-xl"
                      />
                      <div className="flex gap-3 font-bold">
                        <div className="">
                          <div>Nama Kampus</div>
                          <div>Rektor</div>
                        </div>
                        <div>
                          <div> : {e.kampus}</div>
                          <div> : {e.rektor}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="-RIGHT CONTENT- w-full flex flex-col gap-4 bg-[#f1f1f1] p-3 rounded-md">
                    <div className="-TOP CONTENT- flex gap-3">
                      <div>
                        <MdConnectWithoutContact className="text-2xl" />
                      </div>
                      <p className="text-base font-bold">{e.hubungan}</p>
                    </div>
                    <div className="-BUTTON CONTENT- flex items-center gap-3">
                      <div>
                        <BsCalendar2DateFill className="text-2xl" />
                      </div>
                      <div className="-TANGGAL- text-sm">{e.date}</div>
                    </div>
                    <div className="-KETERANGAN- mt-3 p-3 border-[1px] border-[#212121] rounded-md">
                      <HTMLContent content={e.value} />
                    </div>
                  </div>

                  {/* Tombol Hapus */}
                  <button
                    onClick={() => handleDelete(e.id)} // Tambahkan fungsi untuk menghapus jurnal
                    className="absolute top-2 right-2 text-red-600 bg-white p-2 rounded-full shadow hover:bg-red-100 transition-colors duration-300 focus:outline-none"
                  >
                    <FaTrash className="text-xl" />
                  </button>
                </div>
              ))
            ) : kerjasama === false ? (
              <div className="flex flex-col items-center justify-center gap-3">
                <Loading color="text-yellow-400" />
                <span className="text-sm">Loading..</span>
              </div>
            ) : (
              <div className="flex gap-2 text-gray-400">
                <div>
                  <FaFileExcel className="text-xl" />
                </div>
                <span>kerjasama masih kosong</span>
              </div>
            )}
          </div>
        </div>
      </div>
      {showModal && <TambahKerjasama />}
      <Footer kontakRef={kontakRef} />
      {confirmDelete && <ConfirmDelete from="kerjasama" id={idKerjasama} />}
    </div>
  );
};
export default KerjasamaPage;
