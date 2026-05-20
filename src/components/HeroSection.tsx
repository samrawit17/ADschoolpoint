import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, GraduationCap, Building, LayoutDashboard, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-background">
      {/* SaaS Dot Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.07] pointer-events-none" />
      
      <div className="container relative mx-auto px-6 max-w-6xl z-10">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center mb-16">
          <Link 
            to="/announcements" 
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/20 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/40 mb-8 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            Introducing SchoolPoint 2.0
            <ChevronRight className="w-3 h-3 ml-1" />
          </Link>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-[-0.04em] text-foreground mb-6 leading-[1.05]">
            Manage, educate, and <br className="hidden md:block"/> 
            grow your institution with <span className="font-light text-muted-foreground">precision.</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl text-balance">
            A mission-critical, multi-tenant school ecosystem designed for high-scale operations with native offline support and full automation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto font-medium px-8 h-12 rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-[1.02] shadow-sm">
                Get a Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/about" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto font-medium px-8 h-12 rounded-xl border-border/80 bg-background hover:bg-muted shadow-sm transition-all hover:scale-[1.02]">
                Learn more
              </Button>
            </Link>
          </div>
        </div>

        {/* Bento Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="md:col-span-2 bg-card border border-border/60 rounded-2xl p-6 md:p-8 flex flex-col justify-between overflow-hidden relative group min-h-[280px]">
            <div className="relative z-10 shrink-0">
               <div className="w-10 h-10 rounded-lg bg-foreground/5 dark:bg-foreground/10 flex items-center justify-center mb-4 text-foreground">
                 <LayoutDashboard className="w-5 h-5" />
               </div>
               <h3 className="text-xl font-bold tracking-tight mb-2">Centralized Dashboard</h3>
               <p className="text-muted-foreground text-sm max-w-md">Role-specific real-time data visualization with role-based widgets for admins, teachers, students, and parents.</p>
            </div>
            {/* Faux Data Block */}
            <div className="mt-6 font-mono text-xs bg-foreground/5 rounded-xl p-4 border border-border/40 text-muted-foreground">
              <span className="text-accent">~</span> sync --offline-cache
              <br/>
              <span className="text-foreground">✔</span> Attendance records synced: 1,402
              <br/>
              <span className="text-foreground">✔</span> PWA state updated successfully
            </div>
          </div>
          
          <div className="bg-card border border-border/60 rounded-2xl p-6 md:p-8 flex flex-col justify-between group min-h-[280px]">
            <div className="shrink-0">
              <div className="w-10 h-10 rounded-lg bg-foreground/5 dark:bg-foreground/10 flex items-center justify-center mb-4 text-foreground">
                 <GraduationCap className="w-5 h-5" />
               </div>
               <h3 className="text-xl font-bold tracking-tight mb-2">Academic Excellence</h3>
               <p className="text-muted-foreground text-sm">Flexible grading architecture supporting diverse curriculum types and assessment methods.</p>
            </div>
            <div className="mt-6 flex gap-2">
               <div className="w-full h-2 rounded-full bg-accent/20 overflow-hidden"><div className="w-2/3 h-full bg-accent rounded-full"/></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
