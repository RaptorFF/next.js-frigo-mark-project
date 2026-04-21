import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="max-w-7xl mx-auto pt-32 pb-20 px-6 lg:px-8">
      <div className="space-y-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 tracking-tight text-left">
            O nama
          </h1>
          <div className="overflow-hidden">
            <Image
              src="/ac-installation.jpeg"
              alt="Ugradnja klima uredjaja"
              width={1200}
              height={720}
              className="float-right ml-8 mb-4 w-full md:w-1/2 h-72 md:h-88 object-cover rounded-2xl shadow-lg"
            />
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Naša firma specijalizovana je za profesionalnu ugradnju,
              servisiranje i održavanje klima uređaja, kao i drugih rashladnih
              sistema. Sa dugogodišnjim iskustvom i timom stručnjaka, pružamo
              pouzdane i kvalitetne usluge za domaćinstva i poslovne objekte.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Naš cilj je da obezbedimo maksimalnu udobnost, energetsku
              efikasnost i dug vek trajanja vaših uređaja. Koristimo savremenu
              opremu i originalne rezervne delove, a svakom klijentu pristupamo
              individualno, nudeći optimalna rešenja prema njegovim potrebama.
            </p>
          </div>
        </div>

        <div className="overflow-hidden">
          <Image
            src="/heating-service1.jpeg"
            alt="Servis sistema grejanja"
            width={1200}
            height={720}
            className="float-left mr-8 mb-4 w-full md:w-1/2 h-72 md:h-88 object-cover rounded-2xl shadow-lg"
          />
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Pored klimatizacije i rashladnih uređaja, specijalizovani smo i za
            servisiranje sistema toplotnih pumpi, kao i servisiranje električnih
            uređaja poput veš mašina i električnih šporeta. Naš tim poseduje
            znanje i iskustvo za brzo i efikasno rešavanje svih vrsta kvarova i
            održavanje ovih uređaja, uz korišćenje kvalitetnih delova i
            savremenih dijagnostičkih alata.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Poverite nam brigu o vašoj klimatizaciji, rashladnim uređajima,
            električnim uređajima i toplotnim pumpama - sigurnost, pouzdanost i
            zadovoljstvo klijenata su naš prioritet.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Za sva pitanja, savete ili zakazivanje servisa, slobodno nas
            kontaktirajte. Hvala što ste izabrali našu firmu!
          </p>
        </div>
      </div>
    </section>
  );
}
