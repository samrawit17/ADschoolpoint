import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { BuildingIcon } from "lucide-react";

const clients = [
  {
    name: "Addis Academy",
    location: "Addis Ababa, Ethiopia",
    details: "Deployed for 1,500 students. Handled data migration from legacy Excel sheets to full ERP system in under 2 weeks.",
  },
  {
    name: "Safari International School",
    location: "Nairobi, Kenya",
    details: "Implemented offline-first capabilities to assure continuous operations across 3 branch networks despite internet outages.",
  },
  {
    name: "Unity High School",
    location: "Adama, Ethiopia",
    details: "Reduced financial reconciliation time by 80% through automated fee management and payment gateway integrations.",
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="SchoolPoint Portfolio & Case Studies"
        description="See how SchoolPoint has revolutionized school management and operations in various institutions."
        path="/portfolio"
      />
      <Header />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            We partner with leading institutions to bridge the gap between education and technology. See how SchoolPoint is making a difference.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {clients.map((c, i) => (
              <div key={i} className="bg-card border border-border/50 p-8 rounded-2xl">
                <BuildingIcon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-1">{c.name}</h3>
                <p className="text-sm font-semibold text-accent mb-4">{c.location}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;