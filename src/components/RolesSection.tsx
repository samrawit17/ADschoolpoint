
import { Shield, ShieldAlert, GraduationCap, Building, User, Users, BadgeDollarSign, FileText } from "lucide-react";

const rolesList = [
  { name: "Super Admin", desc: "Multi-school management, subscriptions, platform global flags.", icon: <GlobeIcon /> },
  { name: "Admin", desc: "Full control over a single school tenant and its settings.", icon: <Building className="w-6 h-6" /> },
  { name: "Registrar", desc: "Enrollment, grading oversight, and academic record locking.", icon: <FileText className="w-6 h-6" /> },
  { name: "Teacher", desc: "Class management, attendance, and grading for assigned units.", icon: <GraduationCap className="w-6 h-6" /> },
  { name: "Student", desc: "View personal progress, homework, and fee status.", icon: <User className="w-6 h-6" /> },
  { name: "Parent", desc: "Monitor multiple linked children's progress and pay fees.", icon: <Users className="w-6 h-6" /> },
  { name: "Finance", desc: "Fee structures, payment processing, and payroll disbursement.", icon: <BadgeDollarSign className="w-6 h-6" /> },
  { name: "HR", desc: "Employee lifecycle, leave management, and payroll calculation.", icon: <Shield className="w-6 h-6" /> },
];

function GlobeIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>; }

const RolesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-accent uppercase mb-2">System Roles</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-foreground">
            Tailored experiences <span className="font-light text-muted-foreground block md:inline">for every user.</span>
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {rolesList.map((r, idx) => (
            <div key={idx} className="group p-6 rounded-2xl bg-card border border-border/50 text-center hover:border-accent/40 transition-colors">
              <div className="mx-auto w-12 h-12 bg-foreground/5 dark:bg-foreground/10 flex items-center justify-center rounded-full mb-4 text-foreground group-hover:scale-110 group-hover:text-accent transition-all duration-300">
                {r.icon}
              </div>
              <h4 className="font-bold text-foreground mb-1">{r.name}</h4>
              <p className="text-xs text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
