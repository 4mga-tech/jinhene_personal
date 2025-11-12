import {
  Mail,
  Phone,
  MapPin,
  Download,
  Briefcase,
  GraduationCap,
  Award,
  Facebook,
  Instagram,
} from "lucide-react";
import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import bi1 from "./images/bi1.jpg";
import bi2 from "./images/bi2.jpg";
import bi3 from "./images/bi3.jpg";
import bi4 from "./images/bi4.jpg";
export default function App() {
  const heroImages = [bi1, bi2, bi3, bi4];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Carousel */}
      <section id="home" className="relative h-screen">
        <HeroCarousel images={heroImages} />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white px-4">
            <h1 className="mb-4">TELNOLOJIA</h1>
            <button
              onClick={() =>
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 bg-gradient-to-r from-white to-blue-50 hover:from-blue-50 hover:to-white transition-all rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ color: "#6E95D4" }}
            >
              Дэлгэрэнгүй
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6" style={{ color: "#6E95D4" }}>
                Миний тухай
              </h2>
              <p className="mb-4">
                Сайн байна уу! Амгаланбаатар миний бие Мэдээллийн технологийн
                чиглэлээр суралцдаг ШУТИС-МХТС-ийн 4-р курсын оюутан. Энэхүү
                вэбсайт нь миний хувийн танилцуулга хуудас бөгөөд вэб, мобайл
                хөгжүүлэлтийн санал байвал надтай холбогдоно уу.
              </p>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={bi3}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg"
                style={{ backgroundColor: "#6E95D4", opacity: 0.2 }}
              />
            </div>
          </div>

          {/* Skills */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
              <div className="text-4xl mb-2" style={{ color: "#6E95D4" }}>
                2+
              </div>
              <div className="text-gray-700">Жилийн туршлага</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200">
              <div className="text-4xl mb-2" style={{ color: "#9333EA" }}>
                Чиглэл
              </div>
              <div className="text-gray-700">Fullstack developer</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-200">
              <div className="text-4xl mb-2" style={{ color: "#0D9488" }}>
                300+
              </div>
              <div className="text-gray-700">Сэтгэл ханамжтай үйлчлүүлэгч</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200">
              <div className="text-4xl mb-2" style={{ color: "#EA580C" }}>
                15+
              </div>
              <div className="text-gray-700">Шагнал хүртсэн</div>
            </div>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ color: "#6E95D4" }}>
              Миний анкет
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Миний мэргэжлийн туршлага, боловсрол, амжилтын дэлгэрэнгүй
              мэдээлэл
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                  <Briefcase className="text-white" size={24} />
                </div>
                <h3 style={{ color: "#6E95D4" }}>Ажлын туршлага</h3>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <div className="mb-2"> Frontend хөгжүүлэгч</div>
                  <div className="text-gray-600 mb-2">
                    Tech Company Inc. | 2024 - Одоо
                  </div>
                  <p className="text-gray-600">
                    Орчин үеийн фреймворк ашиглан өргөтгөх боломжтой вэб
                    програмуудыг бүтээх.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <div className="mb-2">Frontend хөгжүүлэгч</div>
                  <div className="text-gray-600 mb-2">
                    Crystal Residence | 2025 - Одоо
                  </div>
                  <p className="text-gray-600">
                    Үйлчлүүлэгчдийн олон төслүүдийг хөгжүүлж, засварлаж,
                    ажиллагаа болон хэрэглэгчийн туршлагад анхаарсан.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <div className="mb-2">Бага хөгжүүлэгч</div>
                  <div className="text-gray-600 mb-2">
                    Nuden Solution | 2025 - Одоо
                  </div>
                  <p className="text-gray-600">
                    Шинэлэг бүтээгдэхүүнүүд бүтээхэд хувь нэмэр оруулж, програм
                    хангамж хөгжүүлэх шилдэг туршлагыг эзэмшсэн.
                  </p>
                </div>
              </div>
            </div>

            {/* Education & Awards */}
            <div>
              {/* Education */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 style={{ color: "#9333EA" }}>Боловсрол</h3>
              </div>

              <div className="space-y-6 mb-12">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <div className="mb-2">Мэдээллийн технологийн бакалавр</div>
                  <div className="text-gray-600 mb-2">
                    ШУТИС-МХТС | 2022 - 2026
                  </div>
                  <p className="text-gray-600">
                    Програм хангамж, Мэдээллийн технологийн чиглэлээр мэргэшсэн.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <div className="mb-2">Мэдээллийн технологийн магистр</div>
                  <div className="text-gray-600 mb-2">
                    ШУТИС-МХТС | 2027 - 2029
                  </div>
                  <p className="text-gray-600">
                    Мэдээллийн технологи болон програмчлалын талаар суралцсан.
                  </p>
                </div>
              </div>

              {/* Awards */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
                  <Award className="text-white" size={24} />
                </div>
                <h3 style={{ color: "#EA580C" }}>Шагнал урамшуулал</h3>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <div className="mb-2">Шилдэг хөгжүүлэгчийн шагнал</div>
                  <div className="text-gray-600">
                    Технологийн бага хурал 2024
                  </div>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <div className="mb-2">Шинэлэг санааны шагнал</div>
                  <div className="text-gray-600">Компанийн шагнал 2025</div>
                </div>
              </div>
            </div>
          </div>

          {/* Download CV Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 px-8 py-3 text-white rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <Download size={20} />
              Анкет татах
            </button>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ color: "#6E95D4" }}>
              Миний хобби
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Програм хангамжаас гадна намайг урам зориг өгч, тэнцвэртэй
              байлгадаг янз бүрийн зүйлс
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="p-8 rounded-lg bg-gradient-to-br from-amber-50 to-yellow-100 border-2 border-amber-200 hover:shadow-xl hover:scale-105 transition-all">
              <div className="mb-6 rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1702728342833-21a85f6a71b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzcyUyMGdhbWUlMjBib2FyZHxlbnwxfHx8fDE3NjE4MDk1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Шатар"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="mb-3 text-center" style={{ color: "#D97706" }}>
                Шатар
              </h3>
              <p className="text-gray-700 text-center">
                Стратеги, логик сэтгэлгээг хөгжүүлж, өрсөлдөхүйц тоглоомыг хийх
                дуртай. Шатар бол миний дуртай оюуны спорт юм.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-gradient-to-br from-rose-50 to-pink-100 border-2 border-rose-200 hover:shadow-xl hover:scale-105 transition-all">
              <div className="mb-6 rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1689905836149-2e4f30088f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWl0YXIlMjBpbnN0cnVtZW50JTIwbXVzaWN8ZW58MXx8fHwxNzYxODA5NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Гитар"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="mb-3 text-center" style={{ color: "#E11D48" }}>
                Гитар
              </h3>
              <p className="text-gray-700 text-center">
                Гитар тоглох нь намайг амраахад тусалдаг бөгөөд бүтээлч
                сэтгэлгээг минь хөгжүүлдэг. Янз бүрийн дуу сонсох дуртай.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-white">Холбоо барих</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Би шинэ төслүүд, бүтээлч санаанууд эсвэл таны алсын хараанд нэгдэх
              боломжийн талаар ярилцахад үргэлж нээлттэй байдаг.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-white">
                <div className="p-3 bg-white/20 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="mb-1">Имэйл</div>
                  <a
                    href="mailto:gansukhamgalanbaatarr13@gmail.com"
                    className="text-white/90 hover:text-white"
                  >
                    gansukhamgalanbaatarr13@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 text-white">
                <div className="p-3 bg-white/20 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="mb-1">Утас</div>
                  <a
                    href="tel:+976 89808814"
                    className="text-white/90 hover:text-white"
                  >
                    +976 8980 8814
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 text-white">
                <div className="p-3 bg-white/20 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="mb-1">Хаяг</div>
                  <p className="text-white/90">Нүдэн солюшн, Улаанбаатар</p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-6 border-t border-white/20">
                <div className="mb-4 text-white">Сошиал хаяг</div>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/amglnbaatar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/4mga.tech?igsh=ZnQzeXdua2w0Y3Y4&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Таны нэр"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Таны имэйл"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Таны мессеж"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-white resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-white hover:bg-white/90 transition-colors rounded-lg"
                  style={{ color: "#6E95D4" }}
                >
                  Мессеж илгээх
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <a
              href="https://m.me/amglnbaatar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Mail size={20} />
              Мессеж илгээх
            </a>
          </div>
          <p>
            &copy; 2025 Амгаланбаатар (4mga). Бүх эрх хуулиар хамгаалагдсан.
          </p>
        </div>
      </footer>
    </div>
  );
}
