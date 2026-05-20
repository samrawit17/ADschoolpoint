import { Users, Building, Activity, ShieldCheck } from "lucide-react";

const stats = [
  { value: "1,200+", label: "Schools Worldwide", icon: <Building className="w-4 h-4" /> },
  { value: "500K+", label: "Students Managed", icon: <Users className="w-4 h-4" /> },
  { value: "99.9%", label: "Platform Uptime", icon: <Activity className="w-4 h-4" /> },
  { value: "48+", label: "Core Modules", icon: <ShieldCheck className="w-4 h-4" /> },
];

const StatsSection = () => {
  return (
    <section className="py-24 bg-foreground text-background overflow-hidden relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.1] mix-blend-overlay invert pointer-events-none" />
      
      <div className="container relative mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.04em] leading-[1.1]">
              Built for <span className="text-background/60">educational scale.</span>
            </h2>
            <p className="text-lg text-background/70 max-w-md">
              A mission-critical, multi-tenant school ecosystem designed for high-scale operations with native offline support.
            </p>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-4 w-full">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-background/5 border border-background/10 rounded-2xl p-6 hover:bg-background/10 transition-colors duration-300"
              >
                <div className="flex items-center gap-2 text-background/50 mb-4">
                  {stat.icon}
                  <span className="text-xs uppercase tracking-widest font-semibold">{stat.label}</span>
                </div>
                <div className="text-3xl sm:text-4xl font-black tracking-tighter">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
