import Footer from "@/components/footer/footer";
import Hero from "@/components/homepage/hero";
import Navbar from "@/components/navbar/navbar";
import { useSession } from "next-auth/react";
import { useContext, useEffect, useRef, useState } from "react";
import SearchSection from "./searchSection";

// ICONS
import { IoIosAdd } from "react-icons/io";
import { ModalAppearContext } from "@/context/modalAppear";
import TambahJurnal from "../layout/tambahJurnal";
import Jurnal from "./jurnal";
import StatisticView from "./statisticView";
import { FaCircleArrowDown } from "react-icons/fa6";
import { DataJurnalContext } from "@/context/dataJurnal";
import { FaCircleArrowUp } from "react-icons/fa6";
import { ConfirmDeleteContext } from "@/context/confirmDeleteContext";

const Main = () => {
  const daftarBuku = useRef<HTMLDivElement>(null);
  const kontakRef = useRef<HTMLDivElement>(null);
  const { data: session } = useSession();

  // CONTEXT
  const { showModal, setShowModal }: any = useContext(ModalAppearContext);
  const { dataJurnal, setDataJurnal }: any = useContext(DataJurnalContext);
  const { confirmDelete }: any = useContext(ConfirmDeleteContext);
  const [checkJurnal, setCheckJurnal] = useState([]);
  console.log("check jurnal: ", checkJurnal);

  useEffect(() => {
    const fetchAllJurnal = async () => {
      const res = await fetch("/api/jurnal/getall", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });
      const data = await res.json();
      if (res.ok) {
        setCheckJurnal(data.data);
      } else {
        console.log(data);
      }
    };
    fetchAllJurnal();
  }, [showModal, confirmDelete]);

  const scrollToDaftarBuku = () => {
    if (daftarBuku.current) {
      daftarBuku.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToKontak = () => {
    if (kontakRef.current) {
      kontakRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleArrowClick = async () => {
    const res = await fetch("/api/jurnal/getall", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    const data = await res.json();
    if (res.ok) {
      setDataJurnal(data.data);
    } else {
      console.log(data);
    }
  };

  const handleArrowUp = async () => {
    const res = await fetch("/api/jurnal/get8", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    const data = await res.json();
    if (res.ok) {
      setDataJurnal(data.data);
    } else {
      console.log(data);
    }
  };

  return (
    <div>
      <div className="--SECTION 1-- md:h-screen">
        <Navbar scroll={{ scrollToDaftarBuku, scrollToKontak }} />
        <Hero />
      </div>

      <StatisticView />

      <div ref={daftarBuku} className="--DAFTAR BUKU-- pb-7 mt-16">
        <h1 className="text-3xl font-bold text-center">Daftar Buku</h1>
        <div className="flex justify-center mt-2">
          <hr className="w-[70%] border-[1px] border-slate-800" />
        </div>

        <SearchSection />
        {session && (
          <div className="-ADD JOURNAL flex justify-center mt-10">
            <div className="-CONTENT- max-w-[60em] w-full flex">
              <div
                onClick={() => setShowModal(true)}
                className="-BUTTON- flex items-center hover:cursor-pointer border-2 border-[#990000] text-[#990000] px-2 p-1 rounded-md hover:bg-[#990000] hover:text-white"
              >
                <div>
                  <IoIosAdd className="text-2xl" />
                </div>
                <span>Tambahkan journal</span>
              </div>
            </div>
          </div>
        )}
        <div className="--BOOK CONTENT--  min-h-[20em] flex flex-col justify-center items-center gap-8 mt-4">
          <Jurnal />
          <div className="hover:cursor-pointer">
            {checkJurnal.length > 8 &&
              (dataJurnal.length === 8 ? (
                <FaCircleArrowDown
                  onClick={handleArrowClick}
                  className="text-[#990000] text-3xl"
                />
              ) : (
                <FaCircleArrowUp
                  onClick={handleArrowUp}
                  className="text-[#990000] text-3xl"
                />
              ))}
          </div>
        </div>
      </div>

      <Footer kontakRef={kontakRef} />
      {showModal && <TambahJurnal />}
    </div>
  );
};
export default Main;
