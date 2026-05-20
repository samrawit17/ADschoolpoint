const fs = require('fs');

const modulesContent = `
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
`;

const rolesContent = `
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
`;

const pricingContent = `
import { CheckCircle2 } from "lucide-react";

const tiers = [
  {
    name: "CORE",
    for: "Foundation",
    desc: "Essential features for growing schools.",
    features: ["Basic User Management", "School Profile & Settings", "Basic Reports", "Push Notifications", "Dashboard Access"]
  },
  {
    name: "STANDARD",
    for: "Operational",
    desc: "Complete operational suite for established institutions.",
    popular: true,
    features: ["All CORE features", "Attendance & Timetable", "Full Academic & Grading", "Finance & HR System", "Parent & Student Portals", "Messaging & Comm-Book"]
  },
  {
    name: "ULTIMATE",
    for: "Enterprise",
    desc: "Advanced logistics and automation for large-scale networks.",
    features: ["All STANDARD features", "Exam Seating Logistics", "Advanced Analytics", "School Siren Automation", "Bulk Data Operations", "Priority Multi-Language"]
  }
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-muted/30 border-y border-border/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-accent uppercase mb-2">Plans & Pricing</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-foreground">
            Scale your ecosystem <span className="font-light text-muted-foreground block md:inline">effortlessly.</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div key={idx} className={\`relative bg-card rounded-3xl p-8 border \${tier.popular ? 'border-accent shadow-2xl shadow-accent/10 scale-105 z-10' : 'border-border/50 shadow-sm'}\`}>
              {tier.popular && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase">Most Popular</div>}
              <div className="mb-8">
                <h4 className="text-xl font-black mb-1">{tier.name}</h4>
                <div className="text-accent text-sm font-semibold mb-3">{tier.for}</div>
                <p className="text-muted-foreground text-sm">{tier.desc}</p>
              </div>
              <div className="mb-8">
                 <span className="text-4xl font-black">Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={\`w-full py-3 rounded-xl font-bold transition-all duration-300 \${tier.popular ? 'bg-accent text-white hover:bg-accent/90' : 'bg-foreground/5 text-foreground hover:bg-foreground/10'}\`}>
                Contact Sales
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
`;

const faqContent = `
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Does SchoolPoint work without an internet connection?",
    a: "Yes. Our Edge-First architecture natively supports offline operations for essential tasks like attendance and grading. Data is cached locally and synced automatically in the background when your network is restored."
  },
  {
    q: "Can SchoolPoint handle multiple calendar systems simultaneously?",
    a: "Absolutely. We feature a dual calendar engine that fully supports both Gregorian and Ethiopian calendars simultaneously, handling things like 13 months and localized public holidays effortlessly."
  },
  {
    q: "Is SchoolPoint suitable for a group of schools?",
    a: "Yes. SchoolPoint uses Logical Isolation multi-tenancy. A Super Admin can manage multiple school branches under one unified system while ensuring data remains strictly isolated."
  },
  {
    q: "How secure is our student and financial data?",
    a: "Extremely secure. We use enterprise-grade PostgreSQL with Prisma, JWT-based authentication, BCrypt hashing, and strict Role-Based Access Control (RBAC) ensuring data boundaries."
  },
  {
    q: "How long does it take to deploy SchoolPoint in our institution?",
    a: "Setup is incredibly fast—often within a few days depending on the size of your current data. Our Bulk Data Operations module makes importing existing student and staff records a breeze."
  }
];

const FaqSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about integrating SchoolPoint into your institution.</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={\`item-\${index}\`}>
              <AccordionTrigger className="text-left text-lg font-semibold">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
`;

fs.writeFileSync('src/components/ModulesSection.tsx', modulesContent);
fs.writeFileSync('src/components/RolesSection.tsx', rolesContent);
fs.writeFileSync('src/components/PricingSection.tsx', pricingContent);
fs.writeFileSync('src/components/FaqSection.tsx', faqContent);

console.log("Components created.");
