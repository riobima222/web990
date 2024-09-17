import { DataJurnalContext } from "@/context/dataJurnal";
import { ChangeEvent, useContext } from "react";

const SearchSection = () => {
  const { setDataJurnal }: any = useContext(DataJurnalContext);
  const internasionalFilter = async (e: ChangeEvent<HTMLSelectElement>) => {
    setDataJurnal(false);
    const res = await fetch(
      "/api/jurnal/getinternasional?internasional=" + e.target.value
    );
    const response = await res.json();
    if (res.ok) {
      setDataJurnal(response.data);
    } else {
      console.log(response);
    }
  };
  const nasionalFilter = async (e: ChangeEvent<HTMLSelectElement>) => {
    setDataJurnal(false);
    const res = await fetch(
      "/api/jurnal/getnasional?nasional=" + e.target.value
    );
    const response = await res.json();
    if (res.ok) {
      setDataJurnal(response.data);
    } else {
      console.log(response);
    }
  };

  const search = async (e: ChangeEvent<HTMLInputElement>) => {
    setDataJurnal(false);
    const searchTerm = e.target.value.trim();
    if (searchTerm.length > 2) {
      try {
        const res = await fetch(
          `/api/jurnal/search?value=${encodeURIComponent(searchTerm)}`
        );
        if (!res.ok) throw new Error("jaringan response tidak oke");
        const response = await res.json();
        setDataJurnal(response.data);
      } catch (error) {
        console.error("pengambilan data error:", error);
      }
    }
  };

  const filterAll = async () => {
    setDataJurnal(false);
    const res = await fetch("/api/jurnal/getall", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    const data = await res.json();
    console.log(data.data);
    if (res.ok) {
      setDataJurnal(data.data);
    } else {
      console.log(data);
    }
  };

  return (
    <div
      className="--SEARCH SECTION-- flex justify-center mt-10 px-4"
      data-aos="zoom-in-down"
      data-aos-easing="ease-in"
      data-aos-duration="800"
    >
      <div className="--SEARCH CONTENT flex flex-col gap-3 sm:gap-0 sm:flex-row justify-between items-center max-w-[60em] w-full">
        <div
          className="--FILTER-- flex gap-3 justify-start items-center"
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-duration="1200"
          data-aos-delay="50"
        >
          <span
            tabIndex={0}
            className="inline-block hover:cursor-pointer transition-all duration-300 focus:scale-90 bg-[#990000] text-white p-2 rounded-md"
            onClick={filterAll}
          >
            All
          </span>
          <select
            defaultValue="International-indexed"
            className="select select-error w-full border-none max-w-xs focus:outline-none"
            onChange={internasionalFilter}
          >
            <option value={"Internasional-indexed"} disabled>
              International indexed
            </option>
            <option value={"google-scholar"}>Google Scholar</option>
            <option value={"road"}>ROAD</option>
            <option value={"doaj"}>DOAJ</option>
            <option value={"scopus"}>Scopus</option>
            <option value={"copernicus"}>Copernicus</option>
            <option value={"crossref"}>Crossref</option>
          </select>
          <select
            defaultValue="National-indexed"
            className="select select-error w-full border-none max-w-xs focus:outline-none"
            onChange={nasionalFilter}
          >
            <option value={"nasional-indexed"} disabled>
              National indexed
            </option>
            <option value={"garuda"}>Garuda</option>
            <option value={"handling-by-pubmedia"}>Handling by pubmedia</option>
          </select>
        </div>
        <div className="--SEARCH--">
          <div>
            <input
              type="text"
              placeholder="Search.."
              onChange={search}
              className="input border-2 border-[#990000] focus:outline-none focus:border-[#990000] w-full max-w-xs text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchSection;
