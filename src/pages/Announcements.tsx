import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Globe, Layers, Shield, Zap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Seo from "@/components/Seo";

const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="group relative p-8 rounded-3xl bg-card border border-border/40 shadow-sm hover:shadow-2xl hover:shadow-accent/10 transition-all overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-transform duration-300">
        <Icon className="w-7 h-7 text-accent" />
      </div>
      <h3 className="text-2xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const Announcements = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden" ref={containerRef}>
      <Seo 
        title="Introducing SchoolPoint 2.0 - A New Era for School Management" 
        description="Read about SchoolPoint 2.0, our comprehensive ecosystem designed for enterprise school management with offline sync, multi-tenancy, and deep localization."
        path="/announcements"
      />
      <Header />

      <main className="flex-grow relative pt-32 pb-24 z-10">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{ y: yBackground }}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-50" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/30 rounded-full blur-[120px] mix-blend-multiply" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] mix-blend-multiply" />
        </motion.div>

        <article className="container relative z-10 mx-auto px-6 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Major Release</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-[-0.04em] text-foreground mb-8 leading-[1.1]">
              Introducing
              <span className="block mt-2 bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent pb-4">
                SchoolPoint 2.0
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
              The mission-critical, multi-tenant school ecosystem designed for high-scale operations without compromising reliability.
            </p>
          </motion.div>

          {/* Featured Image / Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden mb-24 lg:mb-32 shadow-2xl border border-border/50 group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=2000" 
              alt="Students in a modern educational environment"
              className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-bold tracking-widest uppercase text-accent">May 20, 2026</span>
                <div className="w-1 h-1 rounded-full bg-border" />
                <span className="text-sm font-medium text-foreground/80">3 min read</span>
              </div>
            </div>
          </motion.div>

          <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-xl leading-relaxed text-foreground/90 font-medium mb-12 border-l-4 border-accent pl-6 py-2">
                We are thrilled to unveil <strong className="text-foreground">SchoolPoint 2.0</strong>, a fundamental shift in how educational institutions handle administrative workloads, data synchronization, and operational efficiency across entire school networks.
              </p>

              <h2 className="text-3xl font-bold tracking-tight mb-6 mt-16 text-foreground">Why 2.0? The Shift to Edge-First Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                In many educational environments, internet connectivity can be intermittent or unreliable. Traditional cloud-based school management systems fail under these conditions. SchoolPoint 2.0 is built on an <strong className="text-foreground">Edge-First Architecture</strong>, meaning it operates locally via a PWA and IndexedDB, instantly caching inputs like attendance and grades. Once a connection is re-established, silent background sync queues seamlessly integrate the data with our central servers.
              </p>

              <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                <FeatureCard 
                  icon={Zap}
                  title="Native Offline Support"
                  description="Teachers can take attendance and modify grades without internet access, syncing securely when a connection becomes available."
                  delay={0.1}
                />
                <FeatureCard 
                  icon={Layers}
                  title="Multi-Tenant Precision"
                  description="A scalable engine with strict data isolation. Super Admins can manage multiple schools, subscriptions, and global setups in one place."
                  delay={0.2}
                />
                <FeatureCard 
                  icon={Shield}
                  title="Unified Role Management"
                  description="Database-driven permission system with 8 distinct roles, offering granular module-level control across all your operations."
                  delay={0.3}
                />
                <FeatureCard 
                  icon={Globe}
                  title="Deep Localizations"
                  description="Dual Calendar Engines support simultaneous Gregorian and Ethiopian calendars, directly aligning with local Ministry of Education syllabus mapping."
                  delay={0.4}
                />
              </div>

              <h2 className="text-3xl font-bold tracking-tight mb-6 mt-16 text-foreground">A Fully Automated Ecosystem</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                SchoolPoint 2.0 goes beyond software. With new hardware integration like the <strong className="text-foreground">School Siren Automation</strong>, our system can trigger physical bells through webhooks and IoT controllers based on period configurations. We've also deployed <strong className="text-foreground">Automated Exam Seating Logistics</strong>—our algorithm generates seating plans that prevent cheating by shuffling grades, strictly managing room capacities and student score requirements.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-12">
                Our HR and Finance engines run simultaneously to enforce a clear separation of duties. Payroll is evaluated by HR based on exact salary structures, pushed for review, and finalized securely by Finance for disbursement.
              </p>

              <div className="bg-muted/30 rounded-3xl p-8 md:p-12 mb-16 border border-border/50 text-center relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl mix-blend-overlay" />
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to upgrade your institution?</h3>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  SchoolPoint 2.0 covers over 48 core modules with Enterprise SLA to streamline every operational bottleneck your school faces.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="rounded-xl px-8 h-14 bg-foreground text-background hover:bg-foreground/90 transition-transform hover:scale-105 shadow-xl font-semibold">
                    Contact Us for a Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Announcements;
