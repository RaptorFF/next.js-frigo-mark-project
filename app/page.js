import Hero from "./_components/Hero";
import Services from "./_components/Services";
import ServiceBooking from "./_components/ServiceBooking";
import Testimonials from "./_components/Testimonials";
import Pricing from "./_components/Pricing";
import ContactForm from "./_components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ServiceBooking />
      <Testimonials />
      <Pricing />
      <ContactForm />
    </>
  );
}
