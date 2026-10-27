import PageBanner from "../components/PageBanner";
import Contact from "../components/Contact";
import Map from "../components/Map";

export default function ContactPage() {
  return (
    <main>
      <PageBanner
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Contact", path: "/contact" },
        ]}
      />
      <Contact />
      <Map />
    </main>
  );
}
