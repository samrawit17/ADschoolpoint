import { Link } from "react-router-dom";
import { ArrowRight, MoveRight, Layers, Sparkles } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-foreground">
      {/* Dark background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none invert mix-blend-screen" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-background/20 to-transparent" />

      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative mx-auto px-6 max-w-4xl z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-background/20 bg-background/5 text-background backdrop-blur-md mb-8 shadow-sm text-sm font-medium">
          <Sparkles className="w-4 h-4 text-accent animate-pulse" />
          <span>Ready to build the future?</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold tracking-[-0.04em] text-background mb-6 leading-tight">
          Supercharge your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">
            digital infrastructure.
          </span>
        </h2>

        <p className="text-lg md:text-xl text-background/60 mb-10 max-w-2xl mx-auto font-light leading-relaxed text-balance">
          Join high-performance teams shipping robust, scalable solutions with our digital agency. 
          Stop managing servers and start building features.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contactUs"
            className="group relative flex h-14 w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-xl bg-background px-8 font-semibold text-foreground transition-all hover:bg-background/90 hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] active:scale-95 border border-border"
          >
            Get a free consultation
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <Link
            to="/solutions"
            className="group relative flex h-14 w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-xl bg-transparent border border-background/20 px-8 font-medium text-background transition-all hover:bg-background/10 hover:border-background/30 active:scale-95"
          >
            Explore enterprise solutions
            <Layers className="w-4 h-4 opacity-70" />
          </Link>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-sm text-background/40 flex-wrap">
           <span className="flex items-center gap-1.5"><MoveRight className="w-3 h-3"/> Custom proposals</span>
           <span className="flex items-center gap-1.5"><MoveRight className="w-3 h-3"/> Enterprise-grade solutions</span>
           <span className="flex items-center gap-1.5"><MoveRight className="w-3 h-3"/> Dedicated support</span>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;