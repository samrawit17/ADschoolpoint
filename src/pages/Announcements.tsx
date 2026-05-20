import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { ArrowRight, Sparkles, ServerCrash, ShieldCheck, Pocket, Cloud } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Pocket className="w-8 h-8 text-accent" />,
    title: "All-in-One Modules",
    desc: "We merged 8 separate software systems into one seamless experience. Enrollment, Attendance, Timetable, Grading, Finance, HR, and Communication."
  },
  {
    icon: <ServerCrash className="w-8 h-8 text-accent" />,
    title: "Native Offline Support",
    desc: "Internet down? No problem. Teachers can still mark attendance and enter grades. Syncs automatically when back online via our Edge-First architecture."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    title: "Granular Role Based Access",
    desc: "7 specific roles tailored precisely for the needs of Super Admins, School Admins, Registrars, Teachers, Students, Parents, Finance, and HR."
  },
  {
    icon: <Cloud className="w-8 h-8 text-accent" />,
    title: "Cloud Infrastructure",
    desc: "Enterprise-grade PostgreSQL with isolated tenant environments. Ensures zero data leakage between schools while allowing Super Admin oversight."
  }
];

const Announcements = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Introducing SchoolPoint 2.0"
        description="Discover the complete revamp of SchoolPoint. A mission-critical, multi-tenant school ecosystem designed for high-scale operations."
        path="/announcements"
      />
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold tracking-wider uppercase text-accent">Product Update</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-foreground">
            Introducing SchoolPoint 2.0
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Education requires tools that work exactly the way schools do. Today, we are completely rethinking school management. 
            Welcome to the most comprehensive update we've ever released—built from the ground up to solve the real, operational challenges of modern institutions.
          </p>
          
          <div className="rounded-3xl overflow-hidden aspect-video relative mb-20 bg-muted/30 border border-border/50 flex items-center justify-center">
             <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0" 
                title="SchoolPoint 2.0 Overview" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
             />
          </div>

          <div className="text-left mb-20">
            <h2 className="text-3xl font-bold mb-8 text-foreground">What's New in 2.0?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="bg-card border border-border/50 p-6 rounded-2xl">
                  <div className="mb-4 bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-accent/5 border border-accent/20 rounded-3xl p-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to upgrade your institution?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Let our team walk you through every new feature in a personalized demo.
            </p>
            <Link to="/contact">
              <button className="bg-foreground text-background px-8 py-4 rounded-xl font-bold hover:bg-foreground/90 transition-all inline-flex items-center gap-2">
                Book Your Custom Demo
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Announcements;