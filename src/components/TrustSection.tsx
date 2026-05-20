import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Client logos (placeholders)
const clients = [
  { name: "Tilexpharmalink", logo: "https://www.tilexpharmalink.com/wp-content/uploads/2025/07/cropped-logo-1-black-copy.png" },
  { name: "Medhhanet", logo: "https://www.medhhanet.com/upload/site_settings/202201221117medhhanet_logo.png" },
  { name: "Ethio Pharma Link", logo: "https://www.ethiopharmalink.com/wp-content/uploads/2022/06/logo-new.png" },
  { name: "Hawassa University", logo: "https://upload.wikimedia.org/wikipedia/en/1/1d/Awasa_University.png" },
];

const TrustSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background border-y border-border/30 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-10">
          <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase text-center">
            Trusted by schools and educational institutions worldwide
          </p>
          
          <div className="w-full flex flex-row flex-wrap justify-center items-center gap-6 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
            {clients.map((client, idx) => (
              <div key={idx} className="flex items-center justify-center h-10 w-24 md:h-12 md:w-32 relative group">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          <div className="pt-8">
            <Link to="/contact" className="group inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors">
              Contact us to join them
              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
