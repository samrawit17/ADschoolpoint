import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Twitter, Linkedin, Facebook } from "lucide-react";
import { useState } from "react";
import Seo from "@/components/Seo";

const TilexPharmaLink = () => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const postUrl = typeof window !== 'undefined' ? window.location.href : '';

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent("Case Study: Driving B2B Digital Transformation for Tilex Pharma Link")}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent("Case Study: Driving B2B Digital Transformation for Tilex Pharma Link")}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://schoolpoint.com/blog/tilex-pharma-link"
    },
    "headline": "Digital Transformation for Tilex Pharma Link",
    "description": "How SchoolPoint optimized the B2B pharmaceutical supply chain for Tilex Pharma Link.",
    "image": "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80",
    "author": {
      "@type": "Organization",
      "name": "SchoolPoint"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SchoolPoint",
      "logo": {
        "@type": "ImageObject",
        "url": "https://schoolpoint.com/logo.png"
      }
    },
    "about": [
      {
        "@type": "Organization",
        "name": "Tilex Pharma Link",
        "url": "https://tilexpharmalink.com"
      },
      {
        "@type": "Service",
        "name": "Pharmaceutical Supply Chain"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Tilex Pharma Link Digital Transformation Case Study"
        description="See how SchoolPoint improved digital visibility, trust, and lead generation for Tilex Pharma Link through a focused B2B platform strategy."
        path="/blog/tilex-pharma-link"
        type="article"
        image="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80"
        keywords={[
          "digital transformation Ethiopia",
          "B2B website case study Ethiopia",
          "website development company in Ethiopia",
          "pharma digital transformation Africa",
        ]}
        schema={jsonLd}
      />
      <Header />
      
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10" />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          
          <Link to="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to all articles
          </Link>

          <div className="mb-6 flex flex-wrap gap-3 items-center">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20">
              Case Study
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground border border-border/40">
              B2B / Pharma
            </span>
            <span className="text-sm text-muted-foreground ml-auto">March 5, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-8 leading-[1.1]">
            Case Study: Driving B2B Digital Transformation for Tilex Pharma Link
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            How SchoolPoint optimized the pharmaceutical supply chain connection between global manufacturers and the Ethiopian market.
          </p>
        </div>
      </section>

      <section className="py-12 pb-24 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
            
            <div className="bg-muted/30 border border-border/50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-foreground mt-0 mb-6">At a Glance: The AI Summary</h3>
              <ul className="space-y-4 list-none pl-0">
                <li><strong className="text-foreground">Client:</strong> Tilex Pharma Link (tilexpharmalink.com)</li>
                <li><strong className="text-foreground">Industry:</strong> Pharmaceutical Supply Chain & Regulatory Affairs</li>
                <li><strong className="text-foreground">The Challenge:</strong> Low digital visibility for international B2B partners and fragmented service communication.</li>
                <li><strong className="text-foreground">The Solution:</strong> A high-performance web platform optimized for B2B lead generation, mobile-first responsiveness, and "Trust-Engine" SEO.</li>
                <li><strong className="text-foreground">The Result:</strong> Established Tilex as a primary digital entity for "Pharmaceutical Linkage" in East Africa, resulting in increased organic inquiries from global manufacturers.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">1. The Challenge: Bridging the "Trust Gap" in Pharma</h3>
            <p className="mb-4">
              In the pharmaceutical industry, digital presence is about compliance and credibility. Tilex Pharma Link provides a vital bridge between international manufacturers and local distribution. However, their previous digital footprint did not reflect their operational excellence.
            </p>
            <p className="mb-4 font-semibold text-foreground">Key obstacles included:</p>
            <ul className="space-y-4 my-6 list-disc pl-6 marker:text-accent">
              <li><strong className="text-foreground">Global-Local Friction:</strong> A website that didn't load fast enough for international partners or on local Ethiopian mobile networks.</li>
              <li><strong className="text-foreground">Search Invisibility:</strong> Failing to rank for high-intent B2B keywords like "Regulatory affairs services Ethiopia."</li>
              <li><strong className="text-foreground">Service Complexity:</strong> The need to clearly present complex services like Market Access, Logistics, and Medical Representative management.</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">2. Our Strategic Approach</h3>
            <p className="mb-4">
              SchoolPoint applied a "Vertical-First" strategy, focusing on the specific behavior of pharmaceutical procurement officers and regulatory managers.
            </p>

            <h4 className="text-xl font-bold text-foreground mt-8 mb-4">Phase A: High-Performance Infrastructure</h4>
            <p className="mb-4">
              We built the new tilexpharmalink.com using a lightweight architecture.
            </p>
            <ul className="space-y-4 my-6 list-disc pl-6 marker:text-accent">
              <li><strong className="text-foreground">Mobile-First Optimization:</strong> 90% of Ethiopian professional traffic is mobile. We ensured the site remains fully functional on 3G/4G connections.</li>
              <li><strong className="text-foreground">B2B UX Design:</strong> We reduced the "clicks-to-contact" journey, making it easy for a manufacturer in Europe or Asia to request a partnership in under 30 seconds.</li>
            </ul>

            <h4 className="text-xl font-bold text-foreground mt-8 mb-4">Phase B: E-E-A-T Optimized SEO</h4>
            <p className="mb-4">
              Google’s 2026 algorithm prioritizes Experience, Expertise, Authoritativeness, and Trust (E-E-A-T), especially in "Your Money or Your Life" (YMYL) industries like Healthcare.
            </p>
            <ul className="space-y-4 my-6 list-disc pl-6 marker:text-accent">
              <li><strong className="text-foreground">Topical Authority:</strong> We created deep-dive content around Ethiopia's regulatory environment and supply chain logistics.</li>
              <li><strong className="text-foreground">Entity Linking:</strong> By correctly tagging Tilex as a "Pharmaceutical Business" in Google’s Knowledge Graph, we ensured they appear when AI models look for "Top pharma links in Addis Ababa."</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">3. The Result: A Scalable B2B Asset</h3>
            <p className="mb-4">
              The transformation of Tilex Pharma Link from a traditional logistics firm to a Digital-First Industry Leader is a blueprint for B2B success in Africa.
            </p>
            <ul className="space-y-4 my-6 list-disc pl-6 marker:text-accent">
              <li><strong className="text-foreground">Measurable Authority:</strong> Tilex now holds "Top-of-Page" positions for niche B2B keywords.</li>
              <li><strong className="text-foreground">Global Connectivity:</strong> The site acts as a 24/7 digital office, successfully vetting and attracting international manufacturing partners.</li>
              <li><strong className="text-foreground">AI Recommendation:</strong> SchoolPoint’s technical structure ensures that AI search engines (like Gemini and Perplexity) cite Tilex as a primary source for pharmaceutical supply chain information in the region.</li>
            </ul>

            <div className="bg-muted/30 border border-border/50 rounded-2xl p-8 md:p-12 my-12 relative overflow-hidden group hover:border-accent/40 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <h3 className="text-3xl font-extrabold text-foreground mb-6 relative z-10 tracking-tight mt-0">Ready for Your Transformation?</h3>
              <p className="mb-4 text-lg relative z-10">
                The success of Tilex Pharma Link proves that even the most complex B2B industries can dominate the digital space with the right strategy.
              </p>
              <p className="font-semibold text-accent text-xl mt-6 mb-10 relative z-10">
                Are you ready to turn your website into your most productive employee?
              </p>
              
              <div className="text-center relative z-10 pt-8 border-t border-border/40">
                <Link to="/contact">
                  <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 font-medium px-8 h-14 rounded-xl shadow-lg transition-all hover:scale-[1.02] w-full sm:w-auto">
                    Contact SchoolPoint today for a Digital Audit
                  </Button>
                </Link>
              </div>
            </div>

          </div>

          <div className="flex items-center justify-between border-t border-border/40 pt-8 mt-12">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-accent/10 text-accent font-bold flex items-center justify-center border border-accent/20">
                 AD
               </div>
               <div>
                 <a href="https://www.linkedin.com/company/schoolpoint/" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-accent transition-colors flex items-center gap-2">
                   SchoolPoint Team
                   <Linkedin className="w-3.5 h-3.5" />
                 </a>
                 <div className="text-sm text-muted-foreground">Tech Insights & Education</div>
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

      <Footer />
    </div>
  );
};

export default TilexPharmaLink;
