import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import CtaSection from "@/components/CtaSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SchoolPoint",
  url: "https://schoolpoint.com",
  logo: "https://schoolpoint.com/PRAD.png",
  email: "hello@schoolpoint.com",
  telephone: "+251912207180",
  sameAs: [
    "https://clutch.co/profile/afro-digital",
    "https://techbehemoths.com/company/afro-digital",
    "https://www.sortlist.com/agency/afro-digital",
    "https://www.linkedin.com/company/afro-digitalet",
    "https://x.com/SchoolPointet",
    "https://www.instagram.com/schoolpoint.et/",
    "https://t.me/SchoolPoint"
  ]
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="SchoolPoint - Software Development, AI, Security & Cloud"
        description="SchoolPoint is a website development company and IT solutions partner in Ethiopia, delivering custom software, cybersecurity, cloud services, and digital growth systems."
        path="/"
        keywords={[
          "website development in Ethiopia",
          "website development company in Ethiopia",
          "IT solution companies in Ethiopia",
          "software development Ethiopia",
          "software company Ethiopia",
          "AI solutions Ethiopia",
          "cybersecurity companies in Ethiopia",
          "cloud service in Ethiopia",
        ]}
        schema={organizationSchema}
      />
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <ProcessTimeline />
        <StatsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
