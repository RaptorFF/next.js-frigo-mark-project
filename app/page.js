import Hero from "./components/Hero";
import Services from "./components/Services";
import ServiceBooking from "./components/ServiceBooking";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";

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
