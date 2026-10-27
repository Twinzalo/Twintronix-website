import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Services from "../components/Services";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Map from "../components/Map";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <Services />
      <Benefits />
      <FAQ />
      <Testimonials />
      <Contact />
      <Map />
    </main>
  );
}
