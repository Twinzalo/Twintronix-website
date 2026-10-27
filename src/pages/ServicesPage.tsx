import PageBanner from "../components/PageBanner";
import Services from "../components/Services";

export default function ServicesPage() {
  return (
    <main>
      <PageBanner
        title="Our Services"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
        ]}
      />
      <Services />
    </main>
  );
}
