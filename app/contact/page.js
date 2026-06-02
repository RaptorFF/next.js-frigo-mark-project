import Image from "next/image";
import ContactForm from "../_components/ContactForm";
import { BLUR_DATA_URL } from "@/app/_data/media";

export default function ContactPage() {
  return (
    <section className="bg-blue-50 pt-(--header-height) pb-10">
      <div className="w-full mx-auto px-8 md:px-10">
        <div className="w-full max-w-450 mx-auto mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:mt-10">
          <article className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 min-h-117.5 flex flex-col lg:min-h-135">
            <div className="relative w-full basis-[55%] min-h-65">
              <Image
                src="/images/ac-background.png"
                alt="Kontakt i podrška"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                className="object-cover"
              />
            </div>

            <div className="basis-[45%] grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                  Kontakt
                </h1>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  Pozovite nas, bilo da vam je potreban servis, instalacija ili
                  savet, naš tim je spreman da pomogne.
                </p>
                <div className="text-gray-700 text-lg space-y-4">
                  <p>
                    <span className="font-semibold">Telefon:</span> 064/286-9648
                  </p>
                  <p>
                    <span className="font-semibold">Adresa:</span> Subotička 12,
                    Niš, Србија
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    aleksandarm985@gmail.com
                  </p>
                </div>
              </div>

              <div className="relative min-h-56 md:min-h-full border-t border-gray-100 md:border-t-0 md:border-l p-6 md:p-8">
                <iframe
                  title="Lokacija firme u kontakt kartici"
                  src="https://maps.google.com/maps?q=Suboti%C4%8Dka%2012%2C%20Ni%C5%A1&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="h-full w-full rounded-lg border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </article>

          <div className="bg-white rounded-xl shadow-md border border-gray-100 min-h-117.5 lg:min-h-135">
            <ContactForm
              withHeaderOffset={false}
              compact
              sectionClassName="bg-blue-50 pt-0 pb-6 h-full"
              containerClassName="max-w-none mx-0 px-6 sm:px-8 lg:px-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
