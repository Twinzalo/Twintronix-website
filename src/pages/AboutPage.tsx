import PageBanner from "../components/PageBanner";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";

export default function AboutPage() {
  return (
    <main>
      <PageBanner
        title="About Us"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "About Us", path: "/about" },
        ]}
      />
      <About />
      <WhyChooseUs />
      <Benefits />
      <Testimonials />
    </main>
  );
}
