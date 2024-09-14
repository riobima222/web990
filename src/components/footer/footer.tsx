import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { Input } from "./input";
import { forwardRef } from "react";
import AnimatedGradientHeading from "./animatedGradientHeading";

interface FooterProps {
  kontakRef?: React.RefObject<HTMLDivElement>;
}

const Footer = forwardRef<HTMLDivElement, FooterProps>(({ kontakRef }) => {
  return (
    <div ref={kontakRef} className="--FOOTER-- mt-10 px-4 mb-5">
      <div className="--CONTENT-- flex flex-col md:flex-row justify-between border-2 border-yellow-500 rounded-md p-4">
        <div className="--LEFT-- w-full md:w-[55%] flex order-2 md:order-1 items-center">
          <div className="--LEFT CONTENT-- flex flex-col gap-5">
            <AnimatedGradientHeading />
            <div className="--KONTAK-- ms-2">
              <h4>
                <strong>Kontak:</strong>{" "}
              </h4>
              <div className="--EMAIL-- flex items-center justify-start gap-3">
                <div>
                  <MdOutlineMail className="text-[#990000] text-xl" />
                </div>
                <span>Example@gmail.com</span>
              </div>
              <div className="--WHATSAPP-- flex items-center justify-start gap-3">
                <div>
                  <FaWhatsapp className="text-[#990000] text-xl" />
                </div>
                <span>+62 8123456789</span>
              </div>
            </div>

            <div className="--ALAMAT-- ms-2">
              <h4>
                <strong>Alamat:</strong>
              </h4>
              <p>
                Lembaga Penelitian Lemlit Universitas Islam Internasional
                Darullughah Wadda wah UII Dalwa 31 Raya Raci No. 51 PO BOX &
                Bangil Pasuruan Jawa Timur
              </p>
            </div>
          </div>
        </div>

        <div className="--RIGHT-- w-full md:w-[38%] bg-[#990000] p-3 flex flex-col order-1 md:order-2 mb-5 md:mb-0 justify-center items-center text-white">
          <h1 className="mb-3 text-2xl font-bold">Ada pertanyaan ?</h1>
          <form className="--FORM-- max-w-[20em] w-full flex flex-col gap-1">
            <label htmlFor="noHP" className="ms-2 font-bold text-sm">
              No telp
            </label>
            <Input
              id="noHP"
              name="noHP"
              type="text"
              placeholder="0812345...."
            />
            <textarea
              name="pesan"
              placeholder="Apa pertanyaan kamu ?"
              className="text-sm py-3 px-4 w-full text-black rounded-lg focus:outline-none h-[8em]"
            ></textarea>
            <button
              type="button"
              className="transition duration-200 bg-[#990000] text-white border-[1px] border-white font-bold px-3 py-1 rounded-md hover:bg-white hover:text-[#990000]"
            >
              kirim
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});

Footer.displayName = "Footer";

export default Footer;
