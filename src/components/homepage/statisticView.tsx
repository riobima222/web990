const StatisticView = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1200"
      className="--STATISTIC OVERVIEW-- flex justify-center"
    >
      <div className="--CONTENT-- border-2 border-yellow-500 rounded-md max-w-[40em] w-full p-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-[#990000] p-2 rounded-md flex flex-col justify-between">
          <h2 className="text-3xl text-white font-bold">0</h2>
          <span className="text-white">Journals</span>
        </div>

        <div className="bg-[#990000] p-2 rounded-md flex flex-col justify-between">
          <h2 className="text-3xl text-white font-bold">0</h2>
          <span className="text-white">Accredited Journals</span>
        </div>

        <div className="bg-[#990000] p-2 rounded-md flex flex-col justify-between">
          <h2 className="text-3xl text-white font-bold">110</h2>
          <span className="text-white">Google Scholar</span>
        </div>

        <div className="bg-[#990000] p-2 rounded-md flex flex-col justify-between">
          <h2 className="text-3xl text-white font-bold">0</h2>
          <span className="text-white">Garuda</span>
        </div>

        <div className="bg-[#990000] p-2 rounded-md flex flex-col justify-between">
          <h2 className="text-3xl text-white font-bold">110</h2>
          <span className="text-white">ROAD</span>
        </div>

        <div className="bg-[#990000] p-2 rounded-md flex flex-col justify-between">
          <h2 className="text-3xl text-white font-bold">110</h2>
          <span className="text-white">Copernicus</span>
        </div>

        <div className="bg-[#990000] p-2 rounded-md flex flex-col justify-between">
          <h2 className="text-3xl text-white font-bold">110</h2>
          <span className="text-white">Crosref</span>
        </div>

        <div className="bg-[#990000] p-2 rounded-md flex flex-col justify-between">
          <h2 className="text-3xl text-white font-bold">110</h2>
          <span className="text-white">Handling by Pubmedia</span>
        </div>
      </div>
    </div>
  );
};

export default StatisticView;
