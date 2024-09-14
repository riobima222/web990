import ImageSlider from "./imageSlider";

const Hero = () => {
  return (
    <section className="pt-32">
      <div className="container mx-auto px-4 py-12">
        <div className="--CONTENT-- flex flex-col md:flex-row items-center justify-between gap-8">
          <div
            className="--LEFT CONTENT-- w-full md:w-5/12 space-y-6"
            data-aos="fade-up"
            data-aos-easing="ease-in"
            data-aos-duration="1200"
          >
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-800">
              Pubmedia Journal Series
            </h1>
            <p className="text-gray-600">
              Pubmedia Journal Series currently publishes 100+ peer-reviewed
              journals, and 3 conference journals. Pubmedia Journal Series is
              managed directly by the Indonesian Journal Publisher. Pubmedia
              Journal Series is indexed by: Crossref, Dimensions, Google
              Scholar, Road
            </p>
            <button
              type="button"
              className="bg-[#990000] text-white font-semibold text-sm py-3 px-6 rounded-md hover:bg-[#7a0000] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#990000] focus:ring-opacity-50"
            >
              Temukan jurnal
            </button>
          </div>

          <div
            className="--RIGHT CONTENT-- w-full md:w-7/12 h-[400px] md:h-[350px] flex items-center"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1200"
          >
            <ImageSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
