import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center space-x-2 leading-tight">
              <span className="text-2xl">❄️</span>
              <span>Frigomark</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Vaš pouzdani HVAC servis provajder već više od 20 godina.
            </p>
            <p className="text-gray-400 mt-4 text-sm">
              📞{" "}
              <a
                href="tel:+381642869648"
                className="inline-flex items-center rounded-md bg-blue-500/20 px-2 py-1 text-blue-200 hover:bg-blue-500/30 hover:text-white transition sm:bg-transparent sm:px-0 sm:py-0 sm:text-gray-300"
                aria-label="Pozovite broj +381 64 286 9648"
              >
                +381 64 286 9648
              </a>
            </p>
            <p className="text-gray-400 text-sm mt-2">
              ✉️{" "}
              <a
                href="mailto:aleksandarm985@gmail.com"
                className="inline-flex items-center rounded-md bg-blue-500/20 px-2 py-1 text-blue-200 hover:bg-blue-500/30 hover:text-white transition sm:bg-transparent sm:px-0 sm:py-0 sm:text-gray-300"
                aria-label="Pošaljite email na aleksandarm985@gmail.com"
              >
                aleksandarm985@gmail.com
              </a>
            </p>
            <p className="text-gray-400 text-sm mt-2">
              <span className="block">🕘 Radno vreme:</span>
              <span className="block pl-6">Pon - Pet 09:00 - 17:00</span>
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 leading-tight">Usluge</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link
                  href="/installation"
                  className="hover:text-white transition"
                >
                  Instalacija klima uređaja
                </Link>
              </li>
              <li>
                <Link
                  href="/maintenance"
                  className="hover:text-white transition"
                >
                  Održavanje i servis klima uređaja
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-white transition">
                  Planovi održavanja
                </Link>
              </li>
              <li>
                <Link
                  href="/heatingPump"
                  className="hover:text-white transition"
                >
                  Popravka i servis toplotnih pumpi
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Hitne intervencije
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6 leading-tight">Kompanija</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  O nama
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Kontakt
                </Link>
              </li>
              <li>
                <div className="flex text-2xl pt-1" style={{ gap: "1rem" }}>
                  <Link
                    href="https://www.facebook.com/frigomark.frigomark"
                    className="hover:text-white transition"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </Link>
                  <Link
                    href="https://www.instagram.com/frigomarkfrigomark/"
                    className="hover:text-white transition"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-12 mt-12">
          <div className="flex flex-col md:flex-row justify-center items-center text-gray-400 text-sm space-y-4 md:space-y-0">
            <p>
              &copy; {currentYear} Frigomark HVAC Usluge. Sva prava zadržana.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
