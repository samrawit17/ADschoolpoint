import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import { Target, Users, Zap, Award, ArrowRight, CheckCircle2, Building, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import TeamSection from "@/components/TeamSection";
import Seo from "@/components/Seo";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Empowering businesses through innovative technology solutions that drive real results. We build with purpose and strategy.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We build lasting partnerships through exceptional service and clear, transparent communication.",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "Staying ahead of the curve with cutting-edge technologies and forward-thinking solutions that future-proof your business.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering quality that exceeds expectations in every project we undertake, maintaining standard-setting code.",
  },
];

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      <Seo
        title="About SchoolPoint"
        description="Learn how SchoolPoint helps organizations in Ethiopia design, build, secure, and scale modern digital products with a strategy-led engineering team."
        path="/about"
        keywords={[
          "about SchoolPoint",
          "software company Addis Ababa",
          "digital agency Ethiopia",
          "technology partner Ethiopia",
        ]}
      />
      <Header />

      <main className="overflow-x-hidden">
        {/* Split Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-border/30">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-semibold tracking-wider uppercase text-accent">
                    About SchoolPoint
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] text-foreground tracking-tight">
                  Empowering Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">
                    Digital Presence.
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed font-light mb-10 max-w-lg">
                  We are a collective of developers, designers, and strategists dedicated to transforming complex challenges into elegant digital solutions.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="px-8 py-4 bg-foreground text-background font-semibold rounded-xl hover:bg-foreground/90 transition-all flex items-center gap-2">
                    Start a Project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/portfolio" className="px-8 py-4 bg-transparent border border-border text-foreground font-semibold rounded-xl hover:bg-accent/5 hover:border-accent/30 transition-all">
                    View Our Work
                  </Link>
                </div>
              </div>

              {/* Right Abstract Art */}
              <div className="relative hidden lg:block h-[600px] w-full animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
                  <div className="absolute inset-0 border border-accent/20 rounded-full animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-10 border border-border/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                  <div className="absolute inset-20 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
                  
                  {/* Floating elements */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-background border border-border rounded-2xl flex items-center justify-center shadow-2xl rotate-12">
                    <Globe2 className="w-8 h-8 text-accent" />
                  </div>
                  <div className="absolute bottom-10 left-10 w-16 h-16 bg-background border border-border rounded-full flex items-center justify-center shadow-2xl">
                    <Building className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="absolute top-20 right-10 w-24 h-24 bg-card border border-border rounded-[2rem] flex items-center justify-center shadow-xl -rotate-12">
                    <Zap className="w-8 h-8 text-amber-500" />
                  </div>
                  
                  {/* Glowing center */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 relative overflow-hidden bg-primary/5">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              {/* Stats Block (Left) */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="professional-card p-8 rounded-3xl border border-border/50 text-center flex flex-col justify-center gap-2 aspect-square">
                  <div className="text-5xl font-black text-foreground">8+</div>
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="professional-card p-8 rounded-3xl border border-border/50 text-center flex flex-col justify-center gap-2 aspect-square bg-accent/5 mt-8">
                  <div className="text-5xl font-black text-accent">120+</div>
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Projects Done</div>
                </div>
                <div className="professional-card p-8 rounded-3xl border border-border/50 text-center flex flex-col justify-center gap-2 aspect-square -mt-8">
                  <div className="text-5xl font-black text-foreground">100+</div>
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Happy Clients</div>
                </div>
                <div className="professional-card p-8 rounded-3xl border border-border/50 text-center flex flex-col justify-center gap-2 aspect-square">
                  <div className="text-5xl font-black text-foreground">99%</div>
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Success Rate</div>
                </div>
              </div>

              {/* Story Text (Right) */}
              <div className="lg:col-span-7">
                <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-4">Our Story</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-8 text-foreground tracking-tight">
                  Bridging the gap between <span className="font-light italic text-muted-foreground">vision</span> and <span className="text-accent underline decoration-accent/30 underline-offset-8">reality.</span>
                </h3>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                  <p>
                    Founded in 2018, SchoolPoint emerged from a singular vision: to help businesses harness the raw power of modern technology. What started as a tight-knit team of passionate developers has rapidly evolved into a full-scale digital innovation agency.
                  </p>
                  <p>
                    We believe technology should empower your growth, not complicate your operations. That's why our methodology breaks down complex software architecture into intuitive, secure, and user-friendly digital products.
                  </p>
                  <ul className="space-y-4 mt-8">
                    {[
                      "Uncompromising code quality.",
                      "Transparent project management.",
                      "Continuous post-launch support."
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                        <CheckCircle2 className="w-6 h-6 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Values Section */}
        <section ref={sectionRef} className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 max-w-5xl">
            <div className="text-center mb-24">
              <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 text-foreground tracking-tight ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                The Principles We Stand By
              </h2>
            </div>

            <div className="space-y-24">
              {values.map((value, index) => {
                const Icon = value.icon;
                const isEven = index % 2 === 1;
                
                return (
                  <div 
                    key={index} 
                    className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${isEven ? 'md:flex-row-reverse' : ''} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-full md:w-1/3 flex justify-center">
                      <div className="relative w-40 h-40 md:w-48 md:h-48 group">
                        <div className="absolute inset-0 bg-accent/5 rounded-[2rem] rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-card border border-border rounded-[2rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500 flex items-center justify-center shadow-xl">
                          <Icon className="w-16 h-16 text-foreground opacity-80" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-full md:w-2/3 text-center md:text-left">
                      <div className="text-accent font-bold text-lg mb-2">0{index + 1}</div>
                      <h3 className="text-3xl font-bold mb-4 text-foreground tracking-tight">
                        {value.title}
                      </h3>
                      <p className="text-xl text-muted-foreground leading-relaxed font-light">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <TeamSection />

        {/* CTA Section */}
        <section className="py-24 bg-foreground text-background">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-background/70 max-w-2xl mx-auto mb-10 font-light">
              Let's build something amazing together. Get in touch and let's discuss your next massive breakthrough.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-accent text-white font-bold px-10 py-5 rounded-2xl hover:bg-accent/90 transition-transform hover:-translate-y-1 shadow-[0_10px_40px_-10px_rgba(var(--accent),0.5)]"
            >
              Start the Conversation
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
