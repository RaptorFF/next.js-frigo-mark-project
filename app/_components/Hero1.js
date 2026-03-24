import Image from "next/image";
import backgroundImage from "@/public/upscaled.png";

export default function Hero1() {
  return (
    <section className="pb-24 h-screen">
      <Image
        className="object-cover object-top" //object-cover makes sure the image covers the entire area, object-top makes sure the top of the image is visible
        src={backgroundImage}
        alt="Hero Image"
        fill // makes the image fill the parent container, which is the main element in this case
        placeholder="blur" // adds a blur effect while the image is loading, improving perceived performance
      />
    </section>
  );
}
