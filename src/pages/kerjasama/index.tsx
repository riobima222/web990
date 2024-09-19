// import Loading from "@/components/every/loading";
import Footer from "@/components/footer/footer";
import ClientNavbar from "@/components/navbar/clientNavbar";
import { ModalAppearContext } from "@/context/modalAppear";
import { useContext, useEffect, useRef } from "react";
import { IoIosAdd } from "react-icons/io";
import { FetchTriggerContext } from "@/context/fetchTrigger";
import { useSession } from "next-auth/react";
import { AlertSuccessContext } from "@/context/alertSuccess";
import TambahKerjasama from "@/components/layout/tambahKerjasama";
import Image from "next/image";

// ICONS
import { MdConnectWithoutContact } from "react-icons/md";
import { BsCalendar2DateFill } from "react-icons/bs";

const KerjasamaPage = () => {
  const kontakRef = useRef<HTMLDivElement>(null);
  // const [kerjasama, setKerjasama] = useState<any>(false);
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
        // setKerjasama(data.data);
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
          <h1 className="text-3xl text-white font-bold">Kerjasama</h1>
        </div>
      </div>

      <div className="-LAYANAN- px-5">
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
            <div className="CONTENT bg-white p-3 flex gap-3 max-w-[65em] w-full rounded-md">
              <div className="-LEFT CONTENT- w-[30em] flex items-center justify-center">
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
                      <div> : Universitas Indonesia</div>
                      <div> : Herman Soeharto</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-RIGHT CONTENT- w-full flex flex-col gap-4 bg-[#f1f1f1] p-3 rounded-md">
                <div className="-TOP CONTENT- flex gap-3">
                  <div>
                    <MdConnectWithoutContact className="text-2xl" />
                  </div>
                  <p className="text-sm font-bold">
                    TULIS HUBUNGAN KERJASAMA DISINI...
                  </p>
                </div>
                <div className="-BUTTON CONTENT- flex items-center gap-3">
                  <div>
                    <BsCalendar2DateFill className="text-2xl" />
                  </div>
                  <div className="-TANGGAL- text-sm">29 Noverber 2023</div>
                </div>
                <div className="-KETERANGAN- mt-3 p-3 border-[1px] border-[#212121] rounded-md">
                  Tulis keterangan disini : Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. At obcaecati assumenda nihil
                  sequi debitis architecto cum in aliquam sed est, repudiandae
                  veritatis ab dignissimos quia, corporis maxime corrupti
                  ducimus, aliquid distinctio. Non, praesentium recusandae
                  provident corporis dolore atque voluptatibus in?
                </div>
              </div>
            </div>

            <div className="CONTENT bg-white p-3 flex gap-3 max-w-[65em] w-full rounded-md">
              <div className="-LEFT CONTENT- w-[30em] flex items-center justify-center">
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
                      <div> : Universitas Indonesia</div>
                      <div> : Herman Soeharto</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-RIGHT CONTENT- w-full flex flex-col gap-4 bg-[#f1f1f1] p-3 rounded-md">
                <div className="-TOP CONTENT- flex gap-3">
                  <div>
                    <MdConnectWithoutContact className="text-2xl" />
                  </div>
                  <p className="text-sm font-bold">
                    TULIS HUBUNGAN KERJASAMA DISINI...
                  </p>
                </div>
                <div className="-BUTTON CONTENT- flex items-center gap-3">
                  <div>
                    <BsCalendar2DateFill className="text-2xl" />
                  </div>
                  <div className="-TANGGAL- text-sm">29 Noverber 2023</div>
                </div>
                <div className="-KETERANGAN- mt-3 p-3 border-[1px] border-[#212121] rounded-md">
                  Tulis keterangan disini : Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. At obcaecati assumenda nihil
                  sequi debitis architecto cum in aliquam sed est, repudiandae
                  veritatis ab dignissimos quia, corporis maxime corrupti
                  ducimus, aliquid distinctio. Non, praesentium recusandae
                  provident corporis dolore atque voluptatibus in?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && <TambahKerjasama />}
      <Footer kontakRef={kontakRef} />
    </div>
  );
};
export default KerjasamaPage;
