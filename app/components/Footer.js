export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center space-x-2 leading-tight">
              <span className="text-2xl">❄️</span>
              <span>CoolAir</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Your trusted HVAC service provider for over 20 years.
            </p>
            <p className="text-gray-400 mt-4 text-sm">📞 1-800-COOLAIR</p>
            <p className="text-gray-400 text-sm">✉️ info@coolairservices.com</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 leading-tight">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  AC Installation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Heating Repair
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Maintenance Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Emergency Service
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6 leading-tight">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-6 leading-tight">Legal</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Warranty
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
            <p>
              &copy; {currentYear} CoolAir HVAC Services. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a
                href="#"
                className="hover:text-white transition hover:underline"
              >
                Facebook
              </a>
              <a
                href="#"
                className="hover:text-white transition hover:underline"
              >
                Twitter
              </a>
              <a href="#" className="hover:text-white transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
