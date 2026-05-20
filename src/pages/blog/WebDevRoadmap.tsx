import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Twitter, Linkedin, Facebook } from "lucide-react";
import { useState } from "react";
import betermariyamProfilePic from "@/assets/1728312666234.jpeg";
import Seo from "@/components/Seo";

const WebDevRoadmap = () => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const postUrl = typeof window !== 'undefined' ? window.location.href : '';

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent("How to Start Learning Web Development in Ethiopia: The 2026 Roadmap")}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent("How to Start Learning Web Development in Ethiopia")}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://schoolpoint.com/blog/web-dev-roadmap-ethiopia-2026"
    },
    "headline": "How to Start Learning Web Development in Ethiopia: The 2026 Roadmap",
    "description": "The tech scene in Addis Ababa is no longer just 'emerging'—it is exploding. Here is your step-by-step guide to becoming a professional web developer.",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    "author": {
      "@type": "Person",
      "name": "BetreMariyam Yosef"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SchoolPoint",
      "logo": {
        "@type": "ImageObject",
        "url": "https://schoolpoint.com/logo.png"
      }
    },
    "datePublished": "2026-03-05"
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="How to Start Learning Web Development in Ethiopia"
        description="A practical 2026 roadmap for learning web development in Ethiopia, from modern frontend fundamentals to local payment integrations and hosting realities."
        path="/blog/web-dev-roadmap-ethiopia-2026"
        type="article"
        image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        keywords={[
          "web development Ethiopia",
          "software development courses Ethiopia",
          "learn web development Ethiopia",
          "developer roadmap Ethiopia",
        ]}
        schema={jsonLd}
      />
      <Header />
      
      {/* Article Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10" />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          
          <Link to="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to all articles
          </Link>

          <div className="mb-6 flex flex-wrap gap-3 items-center">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20">
              Web Development
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground border border-border/40">
              Ethiopia 2026
            </span>
            <span className="text-sm text-muted-foreground ml-auto">March 5, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-8 leading-[1.1]">
            How to Start Learning Web Development in Ethiopia: The 2026 Roadmap
          </h1>
          <div className="flex items-center justify-between border-t border-border/40 pt-8 mt-8">
            <div className="flex items-center gap-4">
               <img src={betermariyamProfilePic} alt="BetreMariyam Yosef" className="w-12 h-12 rounded-full object-cover border border-accent/20" />
               <div>
                 <a href="https://www.linkedin.com/in/betremariyamyosef/" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-accent transition-colors flex items-center gap-2">
                   BetreMariyam Yosef
                   <Linkedin className="w-3.5 h-3.5" />
                 </a>
                 <div className="text-sm text-muted-foreground">Digital Lead & Founder</div>
               </div>
            </div>

            <div className="relative">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full shadow-sm"
                onClick={() => setShowShareMenu(!showShareMenu)}
              >
                <Share2 className="w-4 h-4" />
              </Button>
              
              {showShareMenu && (
                <div className="absolute right-0 mt-2 p-2 bg-popover border border-border/50 rounded-xl shadow-lg flex gap-2 z-50 animate-in fade-in zoom-in duration-200">
                  <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-muted rounded-md transition-colors text-muted-foreground hover:text-foreground">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-muted rounded-md transition-colors text-muted-foreground hover:text-foreground">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-muted rounded-md transition-colors text-muted-foreground hover:text-foreground">
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 pb-24 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
            <p className="text-xl leading-relaxed text-foreground mb-8 font-medium">
              The tech scene in Addis Ababa is no longer just "emerging"—it is exploding. With the rise of the Digital Ethiopia 2025 strategy and the expansion of the private telecom sector, the demand for skilled web developers has reached an all-time high.
            </p>
            
            <p className="mb-6">
              But where do you start? In 2026, simply knowing "how to code" isn't enough. You need to understand the local ecosystem, from Telebirr integrations to .et domain hosting.
            </p>
            
            <p className="mb-12">
              Here is your step-by-step guide to becoming a professional web developer in Ethiopia.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Phase 1: Mastering the Modern Essentials</h3>
            <p className="mb-4">
              In 2026, Google and AI-driven platforms prioritize "Mobile-First" and "Lightweight" code. Since many Ethiopian users rely on mobile data, your first goal is to build fast websites.
            </p>
            <ul className="space-y-4 my-6 list-disc pl-6 marker:text-accent">
              <li><strong className="text-foreground">HTML5 & CSS3:</strong> These are your foundation. Focus on Responsive Design and CSS Grid to ensure your sites look perfect on everything from a Tecno smartphone to a MacBook Pro.</li>
              <li><strong className="text-foreground">JavaScript (ES15+):</strong> Plain JavaScript is the brain of the web. Don't skip this to jump into frameworks. You need it to build interactive features that users in Addis now expect.</li>
              <li><strong className="text-foreground">TypeScript:</strong> By 2026, most top Ethiopian tech firms (like Addis Software or Chapa) require TypeScript for its "type-safety," which prevents bugs before they happen.</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Phase 2: Choosing the "Ethiopian Tech Stack"</h3>
            <p className="mb-4">
              While there are many languages, the MERN Stack (MongoDB, Express, React, Node.js) currently dominates the Ethiopian startup ecosystem.
            </p>
            <ul className="space-y-4 my-6 list-disc pl-6 marker:text-accent">
              <li><strong className="text-foreground">Why React?</strong> Most modern Ethiopian "Super Apps" and e-commerce platforms are built using React or Next.js. It allows for "Single Page Applications" that feel as fast as a mobile app.</li>
              <li><strong className="text-foreground">Why Python/Django?</strong> If you are looking to work with government projects or large-scale data systems in Ethiopia, Python with Django is highly valued for its security and scalability.</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Phase 3: The Secret Sauce – Local Integrations</h3>
            <p className="mb-4">
              This is where most international courses fail. To be a successful developer in Ethiopia, you must solve local problems.
            </p>
            <ul className="space-y-4 my-6 list-disc pl-6 marker:text-accent">
              <li><strong className="text-foreground">Payment Gateways:</strong> Learn to integrate Chapa, ArifPay, and Telebirr APIs. A developer who can build a checkout page that accepts local currency is worth 10x more to an Ethiopian business owner.</li>
              <li><strong className="text-foreground">Amharic Support (Localization):</strong> Master i18n (internationalization) to create sites that switch seamlessly between English, Amharic, and Oromo.</li>
              <li><strong className="text-foreground">Low-Bandwidth Optimization:</strong> Learn to use Progressive Web Apps (PWAs) so your sites can work offline or on 3G connections.</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Phase 4: Hosting and Domains (.et)</h3>
            <p className="mb-4">
              One of the most common questions on AnswerThePublic for Ethiopia is about hosting.
            </p>
            <ul className="space-y-4 my-6 list-disc pl-6 marker:text-accent">
              <li><strong className="text-foreground">Local Hosting:</strong> For the best speed within Ethiopia, consider providers like HahuCloud. They offer local support and payment in Birr.</li>
              <li><strong className="text-foreground">Domain Names:</strong> Registering a .et or .com.et domain via Ethio Telecom or accredited registrars is essential for local SEO and building trust with Ethiopian customers.</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Phase 5: Where to Learn and Get Certified</h3>
            <p className="mb-4">
              Self-learning via YouTube is a great start, but the "Self-Taught Gap" often leaves developers without the professional portfolio needed to land a high-paying job.
            </p>
            <ul className="space-y-4 my-6 list-disc pl-6 marker:text-accent">
              <li><strong className="text-foreground">SchoolPoint’s Pan-Degree:</strong> Our 2026 curriculum is designed specifically for the African context. We don't just teach you code; we teach you Digital Transformation. You'll work on live projects, learn SEO-driven development, and understand how to market your skills.</li>
              <li><strong className="text-foreground">Local Tech Hubs:</strong> Engage with communities like iceaddis or ALX Ethiopia to network with other developers.</li>
            </ul>

            <div className="bg-muted/30 border border-border/50 rounded-2xl p-8 md:p-12 my-12 relative overflow-hidden group hover:border-accent/40 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <h3 className="text-3xl font-extrabold text-foreground mb-6 relative z-10 tracking-tight mt-0">Final Verdict: Is it worth it in 2026?</h3>
              <p className="mb-4 text-lg relative z-10">
                Absolutely. <span className="text-foreground">A junior web developer in Addis Ababa can now earn significantly more than traditional roles</span>, with the added benefit of remote work opportunities for international companies.
              </p>
              <p className="font-semibold text-accent text-xl mt-6 mb-10 relative z-10">
                The question isn't if you should start, but how fast you can get started.
              </p>
              
              <div className="text-center relative z-10 pt-8 border-t border-border/40">
                <h4 className="font-bold text-2xl text-foreground mb-3">Ready to build the future of the Ethiopian web?</h4>
                <p className="text-base mb-8 max-w-lg mx-auto">Don't get lost in generic tutorials. Join a community that understands the local market.</p>
                <Link to="/services">
                  <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 font-medium px-8 h-14 rounded-xl shadow-lg transition-all hover:scale-[1.02] w-full sm:w-auto">
                    Check out SchoolPoint’s Courses here
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevRoadmap;
