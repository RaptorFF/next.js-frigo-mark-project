import Image from "next/image";

import { services } from "@/app/_data/services";

const serviceBackgrounds = [
  "/ac-installation.jpeg",
  "/heating-service1.jpeg",
  "/ac-washing.png",
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-container bg-blue-50 flex flex-col items-center"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Naše Usluge
          </h2>
          <p className="text-lg text-gray-600 mx-auto leading-relaxed text-center py-4">
            Sveobuhvatna HVAC rešenja prilagođena vašim potrebama
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2 border border-gray-100 min-h-130 flex flex-col"
            >
              <div className="relative basis-[40%] min-h-50">
                <Image
                  src={serviceBackgrounds[idx % serviceBackgrounds.length]}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/35" />
                <div className="relative z-10 h-full flex items-start justify-start p-4 md:p-5">
                  <div className="text-4xl inline-flex items-center justify-center w-16 h-16 bg-white/85 backdrop-blur-xs rounded-lg shadow-sm">
                    {service.icon}
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-10 md:pt-8 basis-[60%] flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-700 text-sm"
                    >
                      <span className="text-blue-600 mr-3 font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-auto bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold hover:shadow-md">
                  Saznajte Više
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
