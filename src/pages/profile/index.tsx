import Footer from "@/components/footer/footer";
import ClientNavbar from "@/components/navbar/clientNavbar";
import Link from "next/link";
import { useRef } from "react";

const ProfilePage = () => {
  const kontakRef = useRef<HTMLDivElement>(null);

  const scrollToKontak = () => {
    if (kontakRef.current) {
      kontakRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="-PROFILE- overflow-x-hidden">
      <ClientNavbar scroll={{ scrollToKontak }} />
      <div className="-HERO- px-0 sm:px-5 mt-5 pt-20">
        <div className="-IMAGE- flex pe-7 pb-7 justify-end items-end h-[13em] md:h-[17em] bg-[url('/images/banner.jpg')]">
          <h1 className="text-3xl text-white font-bold">Tentang kami</h1>
        </div>
      </div>

      <div className="-ABOUT- px-3 sm:px-10 mt-10">
        <h1 className="text-3xl font-bold text-[#780101] mt-3">
          Tentang Yayasan Sinergi Kawula Muda
        </h1>
        <h4 className="text-gray-600 font-bold mb-2 mt-5 text-md">Profile</h4>
        <div className="flex flex-col gap-3 text-gray-500 leading-7">
          <p>
            Yayasan Sinergi Kawula Muda adalah sebuah lembaga non-profit yang
            didirikan pada tahun 2023 dengan tujuan mengembangkan pendidikan
            tinggi di Indonesia. Ide awal pendirian ini berasal dari Ibu Dr.
            Novianita Rulandari, M.Si, seorang praktisi, pengajar, dan peneliti
            di bidang pendidikan. Beliau pernah menjabat sebagai Ketua Program
            Studi dan terakhir sebagai Dekan di salah satu PTS di Indonesia.
            Selain itu, beliau juga sering diamanahkan sebagai tim pendirian
            program studi, perubahan sekolah tinggi ke institut, empat kali
            menjadi Ketua Konferensi Internasional, mengelola tiga buah jurnal
            ilmiah internasional, melakukan kolaborasi riset dengan peneliti
            lain di luar negeri, dan menjadi reviewer di berbagai jurnal.
          </p>
          <p>
            Dengan pengalaman tersebut, Ibu Novianita Rulandari yakin dan
            bertekad untuk mendirikan Yayasan yang bergerak di bidang pendidikan
            tinggi, penerbitan jurnal ilmiah, konsultasi manajemen jurnal
            ilmiah, dan konsultasi menajamen lainnya. Beliau mengajak rekan
            sejawatnya yang juga merupakan sahabat solidnya, yaitu 1. Bapak Dr.
            Andri Putra Kesmawan, M.Si yang merupakan praktisi manajemen jurnal
            ilmiah, beliau pernah menjabat sebagai Ketua Relawan Jurnal
            Indonesia, 2. Bapak Hary Purnomo, ST yang merupakan praktisi bidang
            IT, menjabat sebagai CEO PT. Klakklik Inovasi Digital, dan Senior
            Software Enginer BAPPENAS, dan 6 orang rekan lainnya bergabung untuk
            mewujudkan tujuan tersebut.
          </p>
          <p>
            Mereka memulai dengan mendirikan Yayasan yang sepakat dinamakan
            Yayasan Sinergi Kawula Muda dan telah mendapatkan perizinan
            legalitas dari Dirjen Administrasi Hukum Umum dan Kementerian Hukum
            serta Hak Asasi Manusia Nomor AHU-0003890.AH.01.04.Tahun 2023.
            Langkah selanjutnya mereka merancang instrumen untuk mendirikan
            perguruan tinggi, mendirikan Sinergi International Journal yang
            aktif dalam publikasi penelitian, merancang skema dan proposal untuk
            penyelenggaraan konferensi internasional, melakukan kegiatan
            konsultasi manajemen penyelenggaraan konferensi internasional,
            konsultasi manajemen pengelolaan jurnal, dan konsultasi manajamen
            lainnya. Dengan semangat muda dan optimis yang dimiliki oleh mereka
            membuat mereka terus belajar dan berusaha untuk memberikan SINERGI
            MUDA bagi kualitas pendidikan di Indonesia.
          </p>
        </div>

        <h4 className="text-gray-600 font-bold mb-2 mt-5 text-md">
          Visi, Misi, dan tujuan
        </h4>
        <h4 className="text-gray-600 font-bold text-md mb-2">Visi:</h4>
        <p className="text-gray-500 leading-7">
          Menjadi badan penyelenggara pendidikan tinggi, penerbitan jurnal
          ilmiah, dan konsultan manajemen yang terdepan dan terpercaya di
          Indonesia, dengan memberikan kontribusi nyata dalam meningkatkan
          kualitas pendidikan tinggi dan mengembangkan riset ilmiah yang
          berkualitas, serta memberikan layanan konsultasi manajemen terbaik
          untuk mendukung kemajuan institusi dan organisasi di Indonesia, dengan
          memanfaatkan potensi dan semangat muda para kawula muda yang tergabung
          dalam yayasan ini, serta melakukan sinergi dengan berbagai pihak, baik
          dari dalam maupun luar negeri, untuk mencapai tujuan.
        </p>
        <h4 className="text-gray-600 font-bold text-md mb-2 mt-4">Misi:</h4>
        <p className="text-gray-500 leading-7">
          Menyelenggarakan pendidikan tinggi berkualitas yang terjangkau untuk
          semua kalangan masyarakat, dengan fokus pada pengembangan kemampuan
          dan keterampilan yang relevan dengan kebutuhan industri dan dunia
          kerja. Menyediakan platform publikasi jurnal ilmiah yang
          mempublikasikan riset ilmiah berkualitas melalui penerbitan jurnal
          ilmiah yang diakui secara nasional dan internasional, serta memberikan
          dukungan dan pelatihan bagi peneliti dan mahasiswa untuk meningkatkan
          kualitas dan relevansi riset mereka. Menyediakan layanan konsultasi
          manajemen yang berkualitas dan terpercaya untuk membantu institusi dan
          organisasi di Indonesia meningkatkan kinerja dan efektivitas mereka di
          bidang pengelolaan jurnal ilmiah, penyelenggaraan konferensi
          internasional, dan bidang lainnya. Mengembangkan dan memperkuat
          jaringan sinergi dengan berbagai pihak, baik dari dalam maupun luar
          negeri, untuk memperluas kerja sama dan mencapai tujuan yang lebih
          besar dalam meningkatkan kualitas pendidikan tinggi dan mengembangkan
          riset ilmiah yang berkualitas di Indonesia. Memberikan kesempatan dan
          dukungan yang tepat untuk mengembangkan potensi dan semangat muda para
          kawula muda yang tergabung dalam yayasan ini melalui program
          pengembangan sumber daya manusia, pengembangan karir, dan kepemimpinan
          yang berkelanjutan.
        </p>
        <h4 className="text-gray-600 font-bold text-md mb-2 mt-4">Tujuan:</h4>
        <p className="text-gray-500 leading-7">
          Meningkatkan aksesibilitas pendidikan tinggi berkualitas untuk semua
          kalangan masyarakat di Indonesia, terutama yang terkendala oleh faktor
          finansial, dengan menawarkan program pendidikan tinggi yang terjangkau
          dan terakreditasi, serta fokus pada pengembangan kemampuan dan
          keterampilan yang relevan dengan kebutuhan industri dan dunia kerja.
          Meningkatkan kualitas riset ilmiah di Indonesia dengan menyediakan
          platform publikasi jurnal ilmiah yang berkualitas, dan memberikan
          dukungan dan pelatihan bagi peneliti dan mahasiswa dalam meningkatkan
          kualitas dan relevansi riset mereka. Membantu institusi dan organisasi
          di Indonesia meningkatkan kinerja dan efektivitas mereka di bidang
          pengelolaan jurnal ilmiah, penyelenggaraan konferensi internasional,
          dan bidang lainnya melalui layanan konsultasi manajemen yang
          berkualitas dan terpercaya. Membangun jaringan sinergi yang kuat
          dengan berbagai pihak, baik dari dalam maupun luar negeri, untuk
          memperluas kerja sama dan mencapai tujuan yang lebih besar dalam
          meningkatkan kualitas pendidikan tinggi dan mengembangkan riset ilmiah
          yang berkualitas di Indonesia. Memberikan kesempatan dan dukungan yang
          tepat untuk mengembangkan potensi dan semangat muda para kawula muda
          yang tergabung dalam yayasan ini melalui program pengembangan sumber
          daya manusia, pengembangan karir, dan kepemimpinan yang berkelanjutan,
          sehingga dapat meningkatkan kualitas sumber daya manusia di Indonesia
          dan memperkuat masa depan industri dan riset ilmiah.
        </p>

        <h4 className="text-gray-600 font-bold text-md mb-2 mt-4">Layanan</h4>
        <h4 className="text-gray-600 font-bold text-md mb-2 mt-4">
          Badan penyelenggara Perguruan tinggi, Penerbit Jurnal ilmiah,
          Konsultasi manajemen penyelenggaraan konferensi internasional,
          konsultasi manajemen Jurnal ilmiah, dan konsultasi manajemen lainnya.
        </h4>
        <h4 className="text-gray-600 font-bold text-md mb-2 mt-4">
          1. Badan Penyelenggara Perguruan Tinggi
        </h4>
        <div className="flex flex-col gap-3 text-gray-500 leading-7">
          <p>
            Pendidikan tinggi adalah salah satu faktor kunci dalam memajukan
            suatu bangsa. Dalam era globalisasi yang semakin berkembang,
            perguruan tinggi menjadi semakin penting dalam menciptakan sumber
            daya manusia yang berkualitas dan mampu bersaing di tingkat
            internasional. Namun, di banyak negara, ketersediaan perguruan
            tinggi yang berkualitas masih sangat terbatas.
          </p>
          <p>
            Dalam hal ini, kami memandang pentingnya mendirikan sebuah perguruan
            tinggi yang dapat memberikan pendidikan tinggi berkualitas bagi
            mahasiswa. Perguruan tinggi kami bertujuan untuk memberikan
            pendidikan yang inovatif, relevan, dan terkini, dengan fokus pada
            pengembangan keterampilan praktis yang dapat diaplikasikan di
            lapangan kerja.
          </p>
          <p>
            Selain itu, kami juga bertujuan untuk membantu mahasiswa dalam
            mengembangkan potensi mereka secara pribadi dan profesional, serta
            mempersiapkan mereka untuk menjadi pemimpin masa depan di berbagai
            bidang. Kami akan memberikan pengalaman pendidikan yang holistik dan
            interaktif, dengan memadukan pembelajaran kelas dan pembelajaran
            berbasis praktik.
          </p>
          <p>
            Dalam mendirikan perguruan tinggi ini, kami berharap dapat membantu
            meningkatkan akses terhadap pendidikan tinggi berkualitas, serta
            membantu meningkatkan kualitas sumber daya manusia di dalam maupun
            luar negeri. Kami percaya bahwa dengan memberikan pendidikan tinggi
            yang inovatif dan relevan, kami dapat membantu menciptakan generasi
            muda yang lebih terdidik dan berkompeten, dan pada akhirnya,
            membantu memajukan negara.
          </p>
        </div>
        <h4 className="text-gray-600 font-bold text-md mb-2 mt-4">
          2. Penerbit Jurnal Ilmiah
        </h4>
        <div className="flex flex-col gap-3 text-gray-500 leading-7">
          <p>
            Dalam era informasi yang semakin berkembang pesat, jurnal ilmiah
            menjadi salah satu sarana penting bagi para peneliti untuk
            mempublikasikan hasil riset mereka dan berbagi pengetahuan dengan
            sesama. Dengan berkembangnya teknologi informasi dan komunikasi,
            kini lebih mudah bagi para peneliti untuk mempublikasikan hasil
            riset mereka melalui jurnal ilmiah yang terbit secara daring atau
            online.
          </p>
          <p>
            Oleh karena itu, Yayasan Sinergi Kawula Muda sebuah jurnal ilmiah
            baru yang berfokus pada bidang-bidang penelitian yang relevan dengan
            perkembangan terkini dalam ilmu pengetahuan dan teknologi. Jurnal
            ilmiah ini akan menjadi sarana bagi para peneliti untuk
            mempublikasikan hasil penelitian mereka dan memperluas jangkauan
            pengetahuan mereka secara global.
          </p>
          <p>
            Jurnal ilmiah ini akan menjalankan proses seleksi dan review,
            sehingga dapat dihasilkan artikel berkualitas.Kami juga berkomitmen
            untuk menyediakan akses terbuka (open access) ke jurnal ilmiah kami,
            sehingga pembaca dari seluruh dunia dapat memperoleh informasi yang
            berkualitas dan dapat dipercaya. Dengan demikian, jurnal ilmiah ini
            akan menjadi sarana penting bagi para pembaca untuk memperdalam
            pengetahuan mereka dan mengikuti perkembangan terkini dalam
            bidang-bidang ilmu pengetahuan.
          </p>
          <p>
            Melalui pendirian jurnal ilmiah ini, kami berharap dapat membangun
            komunitas ilmiah yang kuat dan dapat berkontribusi pada kemajuan
            ilmu pengetahuan secara luas. Kami mengundang para peneliti dari
            berbagai disiplin ilmu untuk mempublikasikan hasil riset mereka di
            jurnal ilmiah kami dan bergabung dalam menciptakan sinergi yang
            positif untuk menjawab tantangan-tantangan global dan lokal yang
            semakin kompleks.{" "}
            <Link href="#" className="font-bold text-[#780101] hover:underline">
              Adapun jurnal yang kami terbitkan dan diakses disini
            </Link>
          </p>
        </div>
        <h4 className="text-gray-600 font-bold text-md mb-2 mt-4">
          4. Konsultasi Manajemen Jurnal Ilmiah
        </h4>
        <div className="flex flex-col gap-3 text-gray-500 leading-7">
          <p>
            Pengembangan dan penyebaran ilmu pengetahuan melalui publikasi
            jurnal ilmiah menjadi salah satu fokus utama dalam dunia akademik
            saat ini. Publikasi jurnal ilmiah menjadi sarana untuk
            menyebarluaskan penelitian yang dilakukan oleh para peneliti dan
            akademisi kepada masyarakat luas, sehingga dapat memberikan manfaat
            dan dampak yang lebih luas.
          </p>
          <p>
            Namun, publikasi jurnal ilmiah tidaklah mudah. Ada banyak aspek yang
            harus diperhatikan, mulai dari proses penilaian artikel hingga tata
            kelola manajemen jurnal yang baik. Masalah yang sering ditemui dalam
            manajemen jurnal adalah kurangnya pengalaman dan sumber daya yang
            dibutuhkan untuk mengelola jurnal dengan baik.
          </p>
          <p>
            Penyelenggara manajemen jurnal kami bertujuan untuk menyediakan
            layanan yang lengkap dan berkualitas tinggi bagi para peneliti dan
            editor jurnal, termasuk manajemen editorial, copyediting pengaturan
            peer-review, publikasi sampai dengan asistensi pendampingan
            akreditasi nasional. Kami memiliki tim yang terdiri dari profesional
            berpengalaman di bidang manajemen jurnal yang siap membantu para
            peneliti dan editor jurnal untuk mencapai tujuan mereka.
          </p>
        </div>
      </div>

      <Footer kontakRef={kontakRef} />
    </div>
  );
};
export default ProfilePage;
