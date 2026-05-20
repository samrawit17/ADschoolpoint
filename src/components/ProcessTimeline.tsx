import { CheckCircle2, ChevronRight, Workflow, WifiOff, Database, RefreshCw, Server } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Edge Interaction (Offline)",
    description: "PWA captures and modifies data instantly, even when offline. Essential for attendance and grading.",
    icon: <WifiOff className="w-5 h-5 text-accent" />,
  },
  {
    step: "02",
    title: "IndexedDB Persistence",
    description: "All changes are queued locally in a secure, encrypted Dexie sync table in your browser.",
    icon: <Database className="w-5 h-5 text-accent" />,
  },
  {
    step: "03",
    title: "Background Sync",
    description: "Automatic and silent retry queue pushes data the moment your network is restored.",
    icon: <RefreshCw className="w-5 h-5 text-accent" />,
  },
  {
    step: "04",
    title: "Server Validation",
    description: "Centralized server enforces strict schema rules and conflict resolution ensuring data integrity.",
    icon: <Server className="w-5 h-5 text-accent" />,
  },
];

const ProcessTimeline = () => {
  return (
    <section className="py-24 bg-background border-y border-border/30 overflow-hidden relative group">
      {/* Background Dots */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.10] pointer-events-none group-hover:opacity-[0.15] transition-opacity duration-1000" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />

      <div className="container relative mx-auto px-6 max-w-5xl z-10">
        <div className="mb-16 text-center">
           <h2 className="text-sm font-semibold tracking-widest text-accent uppercase mb-2">Offline Support Ecosystem</h2>
           <h3 className="text-3xl md:text-5xl font-extrabold tracking-[-0.04em] text-foreground">
             Edge-First <span className="font-light text-muted-foreground mr-1">Data Lifecycle.</span>
           </h3>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[27px] top-6 bottom-6 w-px bg-border/50 hidden md:block" />
          
          <div className="space-y-12 relative flex flex-col items-start px-2">
            {steps.map((s, idx) => (
              <div key={idx} className="relative flex items-start gap-8 group/step w-full">
                {/* Node */}
                <div className="relative z-10 hidden md:flex w-10 h-10 rounded-full bg-background border border-border/60 items-center justify-center shadow-sm flex-shrink-0 group-hover/step:border-accent/50 transition-colors duration-500">
                  <div className="w-2 h-2 rounded-full bg-foreground group-hover/step:bg-accent transition-colors duration-500" />
                </div>
                
                {/* Content Card */}
                <div className="flex-1 bg-card/40 backdrop-blur-md border border-border/40 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 hover:border-border/80 w-full group-hover/step:bg-card">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-mono font-bold text-accent px-2 py-1 bg-accent/10 rounded-md">Step {s.step}</span>
                    <h4 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">
                      {s.title}
                    </h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-1 max-w-2xl">
                    {s.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                     <div className="flex items-center gap-2">
                         {s.icon}
                     </div>
                     <ChevronRight className="w-5 h-5 text-muted-foreground/30 group-hover/step:text-accent/60 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
