const SearchSection = () => {
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
          >
            All
          </span>
          <select
            defaultValue="International indexed"
            className="select select-error w-full border-none max-w-xs focus:outline-none"
          >
            <option disabled>International indexed</option>
            <option value={"google scholar"}>Google Scholar</option>
            <option value={"road"}>ROAD</option>
            <option value={"doaj"}>DOAJ</option>
            <option value={"scopus"}>Scopus</option>
            <option value={"copernicus"}>Copernicus</option>
            <option value={"crossref"}>Crossref</option>
            <option value={"international journal"}>
              International Journal
            </option>
          </select>
          <select
            defaultValue="National indexed"
            className="select select-error w-full border-none max-w-xs focus:outline-none"
          >
            <option disabled>National indexed</option>
            <option value={"garuda"}>Garuda</option>
            <option value={"handling by pubmedia"}>Handling by pubmedia</option>
          </select>
        </div>
        <div className="--SEARCH--">
          <div>
            <input
              type="text"
              placeholder="Search.."
              className="input border-2 border-[#990000] focus:outline-none focus:border-[#990000] w-full max-w-xs text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchSection;
