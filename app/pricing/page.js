import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "Montaža klima uređaja",
    subtitle:
      "Cena uključuje standardnu instalaciju; doplata za svaki dodatni dužni metar cevi",
    rows: [
      {
        name: "Montaža klime 9 i 12 BTU",
        note: "doplata po dužnom metru cevi 2.000 RSD",
        price: "8.000 RSD",
      },
      {
        name: "Montaža klime 18 BTU",
        note: "doplata po dužnom metru cevi 2.400 RSD",
        price: "10.000 RSD",
      },
      {
        name: "Montaža klime 24 BTU",
        note: "doplata po dužnom metru cevi 2.800 RSD",
        price: "12.000 RSD",
      },
    ],
  },
  {
    id: 2,
    title: "Servis klima uređaja",
    subtitle:
      "Redovan godišnji servis — čišćenje, dezinfekcija, provera sistema",
    rows: [
      {
        name: "Servis klime 9 i 12 BTU",
        note: "redovan godišnji servis",
        price: "od 1.500 RSD",
      },
      {
        name: "Servis klime 18 BTU",
        note: "redovan godišnji servis",
        price: "od 3.000 RSD",
      },
      {
        name: "Servis klime 24 BTU",
        note: "redovan godišnji servis",
        price: "od 3.500 RSD",
      },
    ],
  },
  {
    id: 3,
    title: "Demontaža i premeštanje",
    subtitle:
      "Profesionalno skidanje i premeštanje unutrašnje ili spoljne jedinice",
    rows: [
      {
        name: "Demontaža klima uređaja 9–18 BTU",
        note: "",
        price: "3.500 RSD",
      },
      { name: "Demontaža klima uređaja 24 BTU", note: "", price: "5.000 RSD" },
      {
        name: "Premeštanje spoljne jedinice",
        note: "",
        price: "6.000 – 8.000 RSD",
      },
      {
        name: "Premeštanje unutrašnje jedinice",
        note: "",
        price: "6.000 – 8.000 RSD",
      },
    ],
  },
  {
    id: 4,
    title: "Popravke i zamena delova",
    subtitle:
      "Cene popravki zavise od dijagnoze; konačna cena se dogovara na licu mesta",
    rows: [
      { name: "Zamena kondenzatora", note: "", price: "4.000 – 5.000 RSD" },
      {
        name: "Punjenje prazne klime",
        note: "cena bez rashladnog sredstva",
        price: "od 6.000 RSD",
      },
      {
        name: "Zamena senzora temperature",
        note: "",
        price: "4.000 – 5.000 RSD",
      },
      {
        name: "Zamena starter kompresora",
        note: "",
        price: "4.000 – 5.000 RSD",
      },
      { name: "Zamena holendera", note: "", price: "1.000 RSD" },
      { name: "Popravka elektronike", note: "", price: "po dogovoru" },
    ],
  },
  {
    id: 5,
    title: "Ostale usluge",
    subtitle: "Građevinski radovi i materijal koji prate montažu ili servis",
    rows: [
      { name: "Bušenje rupe u betonu", note: "", price: "1.500 RSD" },
      {
        name: "Štemovanje zida (cigla/blok)",
        note: "naplata po dužnom metru",
        price: "1.200 RSD / m",
      },
      {
        name: "Kondenz crevo",
        note: "naplata po započetom metru",
        price: "500 RSD / m",
      },
      {
        name: "Zamena izolacije na bakarnim cevima",
        note: "naplata po dužnom metru",
        price: "500 RSD / m",
      },
      {
        name: "Napojni kabl 3×1,5",
        note: "naplata po započetom metru",
        price: "500 RSD / m",
      },
      {
        name: "Postavljanje lule i kondenz creva na spoljnoj jedinici",
        note: "",
        price: "3.000 RSD",
      },
    ],
  },
  // Nova kategorija: Popravke električnih uređaja
  {
    id: 6,
    title: "Popravke električnih uređaja",
    subtitle:
      "Servis i popravka veš mašina, električnih šporeta i drugih kućnih aparata",
    rows: [
      {
        name: "Dijagnostika kvara (veš mašina/šporet)",
        note: "izlazak na teren i utvrđivanje kvara",
        price: "2.000 RSD",
      },
      {
        name: "Zamena grejača na veš mašini",
        note: "cena bez dela, uključuje rad",
        price: "od 3.500 RSD",
      },
      {
        name: "Zamena pumpe za vodu (veš mašina)",
        note: "cena bez dela, uključuje rad",
        price: "od 3.500 RSD",
      },
      {
        name: "Popravka električnog šporeta",
        note: "zamena ringle, termostata, prekidača i sl.",
        price: "od 2.500 RSD",
      },
      {
        name: "Zamena programatora (veš mašina)",
        note: "cena bez dela, uključuje rad",
        price: "po dogovoru",
      },
      {
        name: "Ostale popravke električnih uređaja",
        note: "cena zavisi od vrste kvara",
        price: "po dogovoru",
      },
    ],
  },
];

export default function PricingPage() {
  return (
    <main
      className="bg-blue-50 min-h-screen"
      style={{ paddingTop: "var(--header-height)" }}
    >
      {/* Pricing tables */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 pt-16 pb-16 space-y-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 tracking-tight text-left">
            Cenovnik usluga
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Transparentne cene bez skrivenih troškova. Cene su okvirne i mogu
            varirati u zavisnosti od modela uređaja i uslova ugradnje. Cene su
            bez PDV-a.
          </p>
        </div>
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
          >
            {/* Category header */}
            <div className="bg-blue-600 px-8 py-5">
              <h2 className="text-xl font-bold text-white">{cat.title}</h2>
              {cat.subtitle && (
                <p className="text-white text-sm mt-1 font-medium">
                  ({cat.subtitle})
                </p>
              )}
            </div>

            {/* Rows */}
            <table className="w-full">
              <tbody>
                {cat.rows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-100 last:border-0 ${
                      idx % 2 === 0 ? "bg-white" : "bg-blue-50/40"
                    }`}
                  >
                    <td className="px-8 py-4">
                      <span className="font-semibold text-gray-900 text-sm md:text-base">
                        {row.name}
                      </span>
                      {row.note && (
                        <span className="block text-gray-500 text-xs mt-0.5">
                          {row.note}
                        </span>
                      )}
                    </td>
                    <td className="px-8 py-4 text-right whitespace-nowrap">
                      <span className="font-bold text-blue-700 text-sm md:text-base">
                        {row.price}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 pb-20">
        <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Niste sigurni koja usluga vam je potrebna?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Kontaktirajte nas za besplatnu procenu — dolazimo na lice mesta i
              dajemo tačnu ponudu.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-md hover:shadow-lg text-center"
            >
              Kontaktirajte nas
            </Link>
            <Link
              href="/serviceBooking"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition text-center"
            >
              Zakažite termin
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
