import { pricingPlans } from "@/app/_data/pricing";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="section-container bg-gray-50 flex flex-col items-center"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Maintenance Plans
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl shadow-lg p-10 transition transform hover:scale-105 border ${
                plan.popular
                  ? "border-2 border-blue-600 relative bg-white"
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-md">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                {plan.name}
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="text-5xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-600 ml-2">{plan.frequency}</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-600 mr-4 mt-1 font-bold">
                      ✓
                    </span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-lg font-bold transition text-base ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
                    : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
