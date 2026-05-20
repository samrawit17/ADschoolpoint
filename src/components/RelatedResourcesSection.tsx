import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type RelatedResource = {
  title: string;
  description: string;
  to: string;
  label: string;
};

type RelatedResourcesSectionProps = {
  title: string;
  intro: string;
  items: RelatedResource[];
};

const RelatedResourcesSection = ({ title, intro, items }: RelatedResourcesSectionProps) => {
  return (
    <section className="py-24 bg-muted/20 border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{title}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{intro}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group rounded-3xl border border-border/50 bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/30"
              >
                <div className="text-sm font-semibold text-accent">{item.label}</div>
                <h3 className="mt-3 text-2xl font-bold text-foreground transition-colors group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{item.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 font-semibold text-accent">
                  Explore
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedResourcesSection;