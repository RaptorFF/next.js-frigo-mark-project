import Image from "next/image";
import Link from "next/link";

export default function InstalationPage() {
  return (
    <section className="mx-auto pt-32 pb-20 px-6 lg:px-8 bg-blue-50">
      <div className="space-y-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 tracking-tight text-left">
            Instalacija klima uređaja
          </h1>
          <div className="overflow-hidden">
            <Image
              src="/ac-installation.jpeg"
              alt="Proces instalacije klima uređaja"
              width={1200}
              height={720}
              className="float-right ml-0 md:ml-8 mb-6 md:mb-4 w-full md:w-1/2 h-80 md:h-104 object-cover rounded-2xl shadow-lg"
            />
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Pravilna instalacija klima uređaja je ključna za dugotrajan i
              efikasan rad uređaja. Naš tim stručnjaka koristi savremenu opremu
              i poštuje sve tehničke standarde kako bi obezbedio optimalan rad i
              sigurnost vašeg sistema.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Proces instalacije obuhvata pažljivo planiranje pozicije
              unutrašnje i spoljašnje jedinice, precizno bušenje i montažu,
              povezivanje bakarnih cevi i električnih instalacija, vakumiranje
              sistema i završno testiranje. Nakon završetka, prostor ostavljamo
              čistim i urednim.
            </p>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">
              Svaka instalacija započinje dogovorom sa klijentom i savetovanjem
              o najboljoj lokaciji za uređaj. Prilikom montaže, posebnu pažnju
              posvećujemo zaštiti enterijera i preciznosti radova. Po završetku
              instalacije, vršimo detaljnu proveru ispravnosti sistema i
              obavezno čišćenje radnog prostora. Naš cilj je da svaki klijent
              bude potpuno zadovoljan pruženom uslugom.
            </p>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">
              Naše usluge instalacije su dostupne širom Niša i okoline, a naši
              tehničari su obučeni da rade sa različitim modelima i brendovima
              klima uređaja.{" "}
              <Link
                href="/contact"
                className="text-black hover:text-blue-900 font-semibold"
              >
                Kontaktirajte
              </Link>{" "}
              nas danas kako biste zakazali termin i osigurali profesionalnu
              instalaciju vašeg klima uređaja.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
