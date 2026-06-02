import Image from "next/image";
import Link from "next/link";
import { BLUR_DATA_URL } from "@/app/_data/media";

export default function AboutPage() {
  return (
    <section className="mx-auto pt-32 pb-20 px-6 lg:px-8 bg-blue-50">
      <div className="space-y-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 tracking-tight text-left">
            O nama
          </h1>
          <div className="overflow-hidden">
            <Image
              src="/images/ac-installation.jpeg"
              alt="Ugradnja klima uredjaja"
              width={1200}
              height={720}
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              className="float-right ml-0 md:ml-8 mb-6 md:mb-4 w-full md:w-1/2 h-80 md:h-104 object-cover rounded-2xl shadow-lg"
            />
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Naša firma specijalizovana je za profesionalnu ugradnju,
              servisiranje i održavanje klima uređaja, kao i drugih rashladnih
              sistema. Sa dugogodišnjim iskustvom i timom stručnjaka, pružamo
              pouzdane i kvalitetne usluge za domaćinstva i poslovne objekte.
              Svaki posao obavljamo savesno, poštujući dogovorene rokove i
              brinući se o čistoći i redu na radnom mestu. Naši tehničari
              redovno se usavršavaju kako bi pratili najnovije tehnologije i
              standarde u industriji.
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
            src="/images/heating-service1.jpeg"
            alt="Servis sistema grejanja"
            width={1200}
            height={720}
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className="float-left mr-0 md:mr-8 mb-6 md:mb-4 w-full md:w-1/2 h-80 md:h-104 object-cover rounded-2xl shadow-lg"
          />
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Pored klimatizacije i rashladnih uređaja, specijalizovani smo i za
            servisiranje uređaja poput veš mašina, električnih šporeta i drugih
            kućnih aparata. Naš tim poseduje znanje i iskustvo za brzo i
            efikasno rešavanje svih vrsta kvarova i održavanje ovih uređaja, uz
            korišćenje kvalitetnih delova i savremenih dijagnostičkih alata.
            Takođe pružamo usluge održavanja i popravke toplotnih pumpi,
            osiguravajući da vaši sistemi grejanja i hlađenja funkcionišu
            optimalno tokom cele godine.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Poverite nam brigu o vašoj klimatizaciji, rashladnim uređajima,
            električnim uređajima i toplotnim pumpama - sigurnost, pouzdanost i
            zadovoljstvo klijenata su naš prioritet.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Za sva pitanja, savete ili zakazivanje servisa, slobodno nas{" "}
            <Link
              href="/contact"
              className="text-black hover:text-blue-900 font-semibold"
            >
              kontaktirajte
            </Link>
            . Hvala što ste izabrali našu firmu!
          </p>
        </div>
      </div>
    </section>
  );
}
