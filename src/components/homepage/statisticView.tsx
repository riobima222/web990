import { useEffect, useState } from "react";

const StatisticView = () => {
  const [allJurnal, setAllJurnal] = useState<any>(false);
  const [googleScholar, setGoogleScholar] = useState<any>(false);
  const [garuda, setGaruda] = useState<any>(false);
  const [road, setRoad] = useState<any>(false);
  const [copernicus, setCopernicus] = useState<any>(false);
  const [crossref, setCrossref] = useState<any>(false);
  const [handlingByPubMedia, setHandlingByPubMedia] = useState<any>(false);

  useEffect(() => {
    const fetchData = async () => {
      const res1 = await fetch("/api/jurnal/getall", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });
      const response1 = await res1.json();
      if (res1.ok) {
        setAllJurnal(response1.data);
      } else {
        console.log(response1);
      }

      // GOOLE SCHOLAR
      const res2 = await fetch(
        "/api/jurnal/getinternasional?internasional=" + "google-scholar"
      );
      const response2 = await res2.json();
      if (res2.ok) {
        setGoogleScholar(response2.data);
      } else {
        console.log(response2);
      }

      // GARUDA
      const res3 = await fetch("/api/jurnal/getnasional?nasional=" + "garuda");
      const response3 = await res3.json();
      if (res3.ok) {
        setGaruda(response3.data);
      } else {
        console.log(response3);
      }

      // ROAD
      const res4 = await fetch(
        "/api/jurnal/getinternasional?internasional=" + "road"
      );
      const response4 = await res4.json();
      if (res4.ok) {
        setRoad(response4.data);
      } else {
        console.log(response4);
      }

      //  COPERNICUS
      const res5 = await fetch(
        "/api/jurnal/getinternasional?internasional=" + "copernicus"
      );
      const response5 = await res5.json();
      if (res5.ok) {
        setCopernicus(response5.data);
      } else {
        console.log(response5);
      }

      // CROSSREF
      const res6 = await fetch(
        "/api/jurnal/getinternasional?internasional=" + "crossref"
      );
      const response6 = await res6.json();
      if (res6.ok) {
        setCrossref(response6.data);
      } else {
        console.log(response6);
      }

      // HANDLING BY PUBMEDIA
      const res7 = await fetch(
        "/api/jurnal/getnasional?nasional=" + "handling-by-pubmedia"
      );
      const response7 = await res7.json();
      if (res7.ok) {
        setHandlingByPubMedia(response7.data);
      } else {
        console.log(response7);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1200"
      className="--STATISTIC OVERVIEW-- flex justify-center"
    >
      <div className="--CONTENT-- border-2 border-yellow-500 rounded-md max-w-[40em] w-full p-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-[#990000] p-2 rounded-md flex flex-col justify-between">
          <h2 className="text-3xl text-white font-bold">
            {allJurnal.length || "0"}
          </h2>
          <span className="text-white">Journals</span>
        </div>

        <div className="bg-[#990000] p-2 rounded-md flex flex-col justify-between">
          <h2 className="text-3xl text-white font-bold">
            {allJurnal.length || "0"}
          </h2>
          <span className="text-white">Accredited Journals</span>
        </div>

        <div className="bg-[#990000] p-2 rounded-md flex flex-col justify-between">
          <h2 className="text-3xl text-white font-bold">
            {googleScholar.length || "0"}
          </h2>
          <span className="text-white">Google Scholar</span>
        </div>

        <div className="bg-[#990000] p-2 rounded-md flex flex-col justify-between">
          <h2 className="text-3xl text-white font-bold">
            {garuda.length || "0"}
          </h2>
          <span className="text-white">Garuda</span>
        </div>

        <div className="bg-[#990000] p-2 rounded-md flex flex-col justify-between">
          <h2 className="text-3xl text-white font-bold">
            {road.length || "0"}
          </h2>
          <span className="text-white">ROAD</span>
        </div>

        <div className="bg-[#990000] p-2 rounded-md flex flex-col justify-between">
          <h2 className="text-3xl text-white font-bold">
            {copernicus.length || "0"}
          </h2>
          <span className="text-white">Copernicus</span>
        </div>

        <div className="bg-[#990000] p-2 rounded-md flex flex-col justify-between">
          <h2 className="text-3xl text-white font-bold">
            {crossref.length || "0"}
          </h2>
          <span className="text-white">Crossref</span>
        </div>

        <div className="bg-[#990000] p-2 rounded-md flex flex-col justify-between">
          <h2 className="text-3xl text-white font-bold">
            {handlingByPubMedia.length || "0"}
          </h2>
          <span className="text-white">Handling by Pubmedia</span>
        </div>
      </div>
    </div>
  );
};

export default StatisticView;
