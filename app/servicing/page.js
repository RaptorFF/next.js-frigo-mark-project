export default function ServicingPage() {
  return (
    <div className="min-h-screen flex flex-col pt-20 bg-white">
      <main className="flex-1 max-w-3xl mx-auto w-full py-16 px-4">
        <h1 className="text-4xl font-bold mb-6">
          Servisiranje električnih uređaja
        </h1>
        <p className="text-lg mb-4">
          Profesionalno servisiranje i popravka električnih uređaja kako bi
          radili pouzdano.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Dijagnostika problema</li>
          <li>Brza popravka</li>
          <li>Kvalitetni rezervni delovi</li>
        </ul>
      </main>
    </div>
  );
}
