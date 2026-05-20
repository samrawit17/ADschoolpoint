
import { BookOpen, Users, LayoutDashboard, MessageSquare, Database, FileSpreadsheet, Clock, CreditCard, Briefcase, Bell, Search, ShieldCheck } from "lucide-react";

const modulesList = [
  { title: "Enrollment", desc: "Digital application forms with document management and approval logic.", icon: <FileSpreadsheet className="w-6 h-6 text-accent" /> },
  { title: "Attendance & Timetable", desc: "Session-based student tracking and slot-based scheduling with conflict detection.", icon: <Clock className="w-6 h-6 text-accent" /> },
  { title: "Academics & Content", desc: "Unified system for lessons, homework, grading, and assignments with student submissions.", icon: <BookOpen className="w-6 h-6 text-accent" /> },
  { title: "Dashboard Hub", desc: "Role-specific real-time data visualization with widgets.", icon: <LayoutDashboard className="w-6 h-6 text-accent" /> },
  { title: "Finance & Accounts", desc: "Ledger-based accounting for student fees, payments, and receipts.", icon: <CreditCard className="w-6 h-6 text-accent" /> },
  { title: "HR & Payroll", desc: "Complete staff lifecycle management and automated payroll runs.", icon: <Briefcase className="w-6 h-6 text-accent" /> },
  { title: "Role-Based Security", desc: "Granular control over specific resources by roles.", icon: <ShieldCheck className="w-6 h-6 text-accent" /> },
  { title: "Comm-Book", desc: "Digital parent-teacher communication log with read-receipts.", icon: <MessageSquare className="w-6 h-6 text-accent" /> }
];

const ModulesSection = () => {
  return (
    <section className="py-24 bg-muted/30 border-y border-border/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-accent uppercase mb-2">Core Modules</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-foreground">
            Everything you need. <span className="font-light text-muted-foreground block md:inline">All in one place.</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modulesList.map((m, idx) => (
            <div key={idx} className="bg-card border border-border/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                {m.icon}
              </div>
              <h4 className="text-xl font-bold mb-2 text-foreground">{m.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
