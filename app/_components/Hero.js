export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover z-[-1]"
      >
        <source src="/airflow.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col items-start justify-center h-full text-left w-full max-w-3xl pl-4 md:pl-12 pr-4 translate-y-16 md:translate-y-24">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6 fade-in-up [animation-delay:100ms] [animation-fill-mode:both]">
          Budi cool sa <span className="block">FrigoMark</span> HVAC uslugama
        </h1>
        <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-2xl fade-in-up [animation-delay:350ms] [animation-fill-mode:both]">
          Profesionalne HVAC usluge za grejanje, hlađenje i kvalitet vazduha.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 fade-in-up [animation-delay:550ms] [animation-fill-mode:both]">
          <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold hover:bg-blue-50 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
            Rezerviši uslugu
          </button>
          <button className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition">
            Saznaj više
          </button>
        </div>
      </div>
    </section>
  );
}
