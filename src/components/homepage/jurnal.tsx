import Book from "@/components/homepage/book";
import { useContext, useEffect, useState } from "react";
import Loading from "../every/loading";

// ICONS
import { FaFileExcel } from "react-icons/fa";
import { FetchTriggerContext } from "@/context/fetchTrigger";
import { DataJurnalContext } from "@/context/dataJurnal";
import { FaTrash } from "react-icons/fa";
import { useSession } from "next-auth/react";
import ConfirmDelete from "../layout/ConfirmDelete";
import { ConfirmDeleteContext } from "@/context/confirmDeleteContext";

const Jurnal = () => {
  // CONTEXT
  const { dataJurnal, setDataJurnal }: any = useContext(DataJurnalContext);
  const { fetchTrigger }: any = useContext(FetchTriggerContext);
  const { confirmDelete, setConfirmDelete }: any =
    useContext(ConfirmDeleteContext);

  const [idJurnal, setIdJurnal] = useState<string>("");
  const { data: session } = useSession();

  const fetchAllJurnal = async () => {
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

  const handleDelete = async (id: string) => {
    setIdJurnal(id);
    setConfirmDelete(true);
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
        dataJurnal.map((e: any, i: number) => (
          <div key={i} className="relative">
            <Book data={e} />
            {session && (
              <button
                onClick={() => handleDelete(e.id)}
                className="absolute top-2 right-2 text-red-600 bg-white p-2 rounded-full shadow hover:bg-red-100 transition-colors duration-300 focus:outline-none"
              >
                <FaTrash className="text-xl" />
              </button>
            )}
          </div>
        ))
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
          <span>Kosong</span>
        </div>
      )}
      {confirmDelete && <ConfirmDelete from="jurnal" id={idJurnal} />}
    </div>
  );
};

export default Jurnal;
