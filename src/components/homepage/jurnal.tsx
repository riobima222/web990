import Book from "@/components/homepage/book";
import { useEffect, useState } from "react";
import Loading from "../every/loading";

// ICONS
import { FaFileExcel } from "react-icons/fa";
import { JurnalInter } from "@/lib/firebase/interface";

const Jurnal = () => {
  const [allJurnal, setAllJurnal] = useState<boolean | any>(false);
  console.log("Ini semua Jurnal : ", allJurnal);

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
      setAllJurnal(data.data);
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    fetchAllJurnal();
  }, []);
  return (
    <div
      className="max-w-[65em] w-full flex justify-center flex-wrap gap-2 sm:gap-5"
      data-aos="zoom-in-down"
      data-aos-easing="ease-in"
      data-aos-duration="1100"
    >
      {allJurnal.length > 0 ? (
        allJurnal.map((e: JurnalInter, i: number) => (
          <Book key={i} data={e}/>
        ))
      ) : allJurnal === false ? (
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
