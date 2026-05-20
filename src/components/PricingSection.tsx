
import { CheckCircle2 } from "lucide-react";

const tiers = [
  {
    name: "CORE",
    for: "Foundation",
    desc: "Essential features for growing schools.",
    features: ["Basic User Management", "School Profile & Settings", "Basic Reports", "Push Notifications", "Dashboard Access"]
  },
  {
    name: "STANDARD",
    for: "Operational",
    desc: "Complete operational suite for established institutions.",
    popular: true,
    features: ["All CORE features", "Attendance & Timetable", "Full Academic & Grading", "Finance & HR System", "Parent & Student Portals", "Messaging & Comm-Book"]
  },
  {
    name: "ULTIMATE",
    for: "Enterprise",
    desc: "Advanced logistics and automation for large-scale networks.",
    features: ["All STANDARD features", "Exam Seating Logistics", "Advanced Analytics", "School Siren Automation", "Bulk Data Operations", "Priority Multi-Language"]
  }
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-muted/30 border-y border-border/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-accent uppercase mb-2">Plans & Pricing</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-foreground">
            Scale your ecosystem <span className="font-light text-muted-foreground block md:inline">effortlessly.</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div key={idx} className={`relative bg-card rounded-3xl p-8 border ${tier.popular ? 'border-accent shadow-2xl shadow-accent/10 scale-105 z-10' : 'border-border/50 shadow-sm'}`}>
              {tier.popular && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase">Most Popular</div>}
              <div className="mb-8">
                <h4 className="text-xl font-black mb-1">{tier.name}</h4>
                <div className="text-accent text-sm font-semibold mb-3">{tier.for}</div>
                <p className="text-muted-foreground text-sm">{tier.desc}</p>
              </div>
              <div className="mb-8">
                 <span className="text-4xl font-black">Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${tier.popular ? 'bg-accent text-white hover:bg-accent/90' : 'bg-foreground/5 text-foreground hover:bg-foreground/10'}`}>
                Contact Sales
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
