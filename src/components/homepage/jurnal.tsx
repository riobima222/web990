import Book from "@/components/homepage/book";
import { useContext, useEffect } from "react";
import Loading from "../every/loading";

// ICONS
import { FaFileExcel } from "react-icons/fa";
import { JurnalInter } from "@/lib/firebase/interface";
import { FetchTriggerContext } from "@/context/fetchTrigger";
import { DataJurnalContext } from "@/context/dataJurnal";

const Jurnal = () => {
  const {dataJurnal, setDataJurnal}: any = useContext(DataJurnalContext)
  console.log("Ini semua Jurnal : ", dataJurnal);
  const { fetchTrigger }: any = useContext(FetchTriggerContext);

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
      setDataJurnal(data.data);
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    fetchAllJurnal();
  }, [fetchTrigger]);
  return (
    <div
      className="max-w-[65em] w-full flex justify-center flex-wrap gap-2 sm:gap-5"
      data-aos="zoom-in-down"
      data-aos-easing="ease-in"
      data-aos-duration="1100"
    >
      {dataJurnal.length > 0 ? (
        dataJurnal.map((e: JurnalInter, i: number) => <Book key={i} data={e} />)
      ) : dataJurnal === false ? (
        <div className="flex flex-col items-center justify-center gap-3">
          <Loading color="text-[#990000]" />
          <span className="text-sm">Loading..</span>
        </div>
      ) : (
        <div className="flex gap-2 text-gray-400">
          <div>
            <FaFileExcel className="text-xl" />
          </div>
          <span>Layanan masih kosong</span>
        </div>
      )}
    </div>
  );
};
export default Jurnal;
