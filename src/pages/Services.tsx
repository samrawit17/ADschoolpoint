import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code, Globe, Shield, Sparkles, TrendingUp, Cloud, ArrowRight, Layers, Cpu, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Seo from "@/components/Seo";

const services = [
  {
    icon: Code,
    title: "Application & Software Development",
    description: "We specialize in building bespoke software solutions from the ground up. Our process involves a deep dive into your business logic to create applications that are not just functional, but also scalable, secure, and perfectly aligned with your operational needs.",
    features: [
      "Custom Web Applications",
      "Mobile App Development",
      "Enterprise Software Solutions",
    ],
    technologies: ["React", "Node.js", "Python", "Java"],
    slug: "application-development",
    colSpan: "lg:col-span-2",
  },
  {
    icon: Globe,
    title: "Website Development & Digital Presence",
    description: "Your website is your digital storefront. We craft visually stunning and highly performant websites that provide an exceptional user experience tailored exactly to your brand.",
    features: [
      "Responsive Web Design",
      "E-commerce Platforms",
      "SEO Optimization",
    ],
    technologies: ["Next.js", "Tailwind CSS", "WordPress"],
    slug: "website-development",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Infrastructure",
    description: "Provide comprehensive cybersecurity services to protect your critical assets from evolving threats. Proactive, continuous monitoring and rapid incident response.",
    features: [
      "Security Audits & Assessments",
      "Data Encryption",
      "24/7 Security Monitoring",
    ],
    technologies: ["SSL/TLS", "Firewall", "AWS Security Hub"],
    slug: "security-solutions",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Sparkles,
    title: "AI Integration & Automation",
    description: "Harness the power of Artificial Intelligence to revolutionize your business. We integrate cutting-edge AI and machine learning models to automate complex processes and derive actionable insights.",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Predictive Analytics",
    ],
    technologies: ["TensorFlow", "OpenAI APIs", "LangChain"],
    slug: "ai-integration",
    colSpan: "lg:col-span-2",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Streamline your operations with our comprehensive cloud infrastructure and automation solutions. Migrate to the cloud, set up CI/CD pipelines, and implement Infrastructure as Code.",
    features: [
      "Cloud Migration & Strategy",
      "CI/CD Pipeline Setup",
      "Container Orchestration",
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    slug: "automation-cloud-devops",
    colSpan: "lg:col-span-2",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & Growth",
    description: "A great product needs a great audience. Data-driven digital marketing strategies to amplify brand voice and accelerate growth.",
    features: [
      "SEO & SEM Strategies",
      "Content Marketing",
      "Conversion Optimization",
    ],
    technologies: ["Google Analytics", "HubSpot", "Meta Ads"],
    slug: "digital-marketing",
    colSpan: "lg:col-span-1",
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title="IT Services and Software Solutions in Ethiopia"
        description="Explore SchoolPoint IT services in Ethiopia including website development, custom software development, cybersecurity, AI integration, cloud computing, and digital marketing."
        path="/services"
        keywords={[
          "IT solution companies in Ethiopia",
          "website development company in Ethiopia",
          "software development services Ethiopia",
          "cybersecurity companies in Ethiopia",
          "AI integration Ethiopia",
          "cloud computing in Ethiopia",
          "cloud service in Ethiopia",
        ]}
      />
      <Header />

      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent/5 rounded-full blur-[80px] md:blur-[120px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-primary/5 rounded-full blur-[60px] md:blur-[100px] animate-float" style={{ animationDelay: "3s" }} />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />

          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">
                Our Services
              </span>
            </div>

            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-foreground ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: "0.1s" }}>
              Comprehensive Digital
              <br />
              <span className="text-accent">Solutions</span>
            </h1>

            <p className={`text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
              Empowering Your Digital Presence. From concept to deployment, we deliver excellence across every digital touchpoint with cutting-edge technology and expert craftsmanship.
            </p>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="pt-8 pb-32 md:pt-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] animate-float" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <div 
                  key={service.slug} 
                  className={`group relative professional-card p-8 rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col justify-between ${service.colSpan} animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  <div className="relative z-10 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-7 h-7" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <Layers className="w-4 h-4 text-accent/70 flex-shrink-0" />
                          <span className="text-sm font-medium text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.technologies.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-background/50 border border-border/50 rounded-full text-xs font-semibold text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 pt-6 border-t border-border/30 mt-auto">
                    <Link to={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-accent font-semibold group/link">
                      Learn More
                      <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-32 relative overflow-hidden bg-primary/5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium text-accent">
                  Our Process
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Our Streamlined Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A clear, collaborative journey from concept to successful deployment
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
              {[
                { step: "01", title: "Discover", description: "We analyze your needs and define project scope and goals." },
                { step: "02", title: "Design", description: "Creating intuitive interfaces and seamless user experiences." },
                { step: "03", title: "Development", description: "Building scalable solutions with cutting-edge technologies." },
                { step: "04", title: "Testing", description: "Rigorous QA to ensure flawless performance and security." },
                { step: "05", title: "Launch", description: "Deploying your solution and providing ongoing support." },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="professional-card p-8 rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-elevated hover:-translate-y-2 transition-all duration-500 group"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  <div className="relative z-10">
                    <div className="text-5xl font-bold text-accent/20 mb-4 group-hover:text-accent/30 transition-colors">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-accent text-accent-foreground">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-accent-foreground/90 max-w-2xl mx-auto mb-8">
              Let's discuss how SchoolPoint can empower your organization with innovative technology solutions.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-background text-accent font-semibold px-8 py-4 rounded-lg hover:bg-background/90 transition-colors group">
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
