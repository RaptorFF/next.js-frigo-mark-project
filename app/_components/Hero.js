export default function Hero() {
  return (
    <section className="pb-24 bg-linear-to-r from-blue-600 to-blue-900 text-white h-screen flex flex-col justify-center items-center text-center">
      <div className="mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-left">
              Budi Cool sa FrigoMark HVAC Uslugama
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed text-left">
              Profesionalne HVAC usluge za grejanje, hlađenje i kvalitet
              vazduha. Dostupni 24/7 za hitne slučajeve.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-6">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold hover:bg-blue-50 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Rezerviši Uslugu
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition">
                Saznaj Više
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-12 pt-10 text-base">
              <div>
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-blue-200">Hitne Intervencije</p>
              </div>
              <div>
                <p className="text-2xl font-bold">20+</p>
                <p className="text-blue-200">Godina Iskustva</p>
              </div>
              <div>
                <p className="text-2xl font-bold">5★</p>
                <p className="text-blue-200">Ocena Kupaca</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden md:flex items-center justify-center">
            <div className="text-9xl animate-bounce">❄️</div>
          </div>
        </div>
      </div>
    </section>
  );
}
