import Hero from "./_components/Hero";
import Services from "./_components/Services";
import Brands from "./_components/Brands";
import ServiceBooking from "./_components/ServiceBooking";
import Testimonials from "./_components/Testimonials";
import Pricing from "./_components/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Brands />
      <Pricing />
      <Testimonials />
      <ServiceBooking />
    </>
  );
}
