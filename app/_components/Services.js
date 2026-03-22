import { services } from "@/app/_data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="section-container bg-gray-50 flex flex-col items-center"
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
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 p-10 border border-gray-100"
            >
              <div className="text-5xl mb-6 inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg">
                {service.icon}
              </div>
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
              <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold hover:shadow-md">
                Saznajte Više
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
