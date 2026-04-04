import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center space-x-2 leading-tight">
              <span className="text-2xl">❄️</span>
              <span>FrigoMark</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Vaš pouzdani HVAC servis provajder već više od 20 godina.
            </p>
            <p className="text-gray-400 mt-4 text-sm">📞 1-800-FRIGOMARK</p>
            <p className="text-gray-400 text-sm">✉️ info@frigomark.com</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 leading-tight">Usluge</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Instalacija klima uređaja
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Popravka grejanja
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Planovi održavanja
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Hitne intervencije
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6 leading-tight">Kompanija</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  O nama
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Karijere
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-6 leading-tight">Pravno</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Politika privatnosti
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Uslovi korišćenja
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Garancija
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-12 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm space-y-4 md:space-y-0">
            <div className="flex mt-4 md:mt-0 text-2xl" style={{ gap: "1rem" }}>
              <Link
                href="#"
                className="hover:text-white transition"
                aria-label="Facebook"
              >
                <FaFacebook />
              </Link>
              <Link
                href="#"
                className="hover:text-white transition"
                aria-label="Twitter"
              >
                <FaTwitter />
              </Link>
              <Link
                href="#"
                className="hover:text-white transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="#"
                className="hover:text-white transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </Link>
            </div>
            <p>
              &copy; {currentYear} FrigoMark HVAC Usluge. Sva prava zadržana.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
