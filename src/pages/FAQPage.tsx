import PageBanner from "../components/PageBanner";
import FAQ from "../components/FAQ";

export default function FAQPage() {
  return (
    <main>
      <PageBanner
        title="FAQ"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "FAQ", path: "/faq" },
        ]}
      />
      <FAQ />
    </main>
  );
}
