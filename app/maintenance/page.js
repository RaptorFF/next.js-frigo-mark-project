import Image from "next/image";
import Link from "next/link";

export default function MaintenancePage() {
  return (
    <section className="mx-auto pt-32 pb-20 px-6 lg:px-8 bg-blue-50">
      <div className="space-y-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 tracking-tight text-left">
            Servisiranje i održavanje klima uređaja
          </h1>
          <div className="overflow-hidden">
            <Image
              src="/ac-service.jpg"
              alt="Servisiranje klima uređaja"
              width={1200}
              height={720}
              className="float-right ml-0 md:ml-8 mb-6 md:mb-4 w-full md:w-1/2 h-80 md:h-104 object-cover rounded-2xl shadow-lg"
            />
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Redovno servisiranje klima uređaja je osnova dugotrajnog i
              efikasnog rada sistema. Naš tim iskusnih tehničara obavlja
              kompletno održavanje svih vrsta i brendova klima uređaja,
              koristeći profesionalnu opremu i originalne rezervne delove.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Servis obuhvata temeljno pranje i dezinfekciju filtera i lamela,
              proveru i dopunjavanje rashladnog gasa, čišćenje odvodnih cevi i
              kondenzatora, kao i merenje performansi sistema. Na ovaj način
              osiguravamo maksimalnu efikasnost i duži vek trajanja vašeg
              uređaja.
            </p>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">
              Preporučujemo servisiranje najmanje jednom godišnje, idealno pred
              sezonu grejanja ili hlađenja. Pravilno održavan uređaj troši manje
              električne energije, pruža bolji kvalitet vazduha i ređe zahteva
              skupe popravke. Naši tehničari su dostupni i za hitne intervencije
              u slučaju kvara.
            </p>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">
              Pružamo usluge servisiranja na teritoriji Niša i okoline. Nakon
              svakog servisa izdajemo potvrdu o obavljenom radu sa detaljnim
              opisom izvršenih aktivnosti.{" "}
              <Link
                href="/contact"
                className="text-black hover:text-blue-900 font-semibold"
              >
                Kontaktirajte
              </Link>{" "}
              nas i zakažite servis — pobrinućemo se da vaš uređaj radi
              besprekorno tokom cele godine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
