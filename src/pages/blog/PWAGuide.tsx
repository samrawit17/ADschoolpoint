import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Twitter, Linkedin, Facebook } from "lucide-react";
import { useState } from "react";
import Seo from "@/components/Seo";

const PWAGuide = () => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const postUrl = typeof window !== 'undefined' ? window.location.href : '';

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent("Why Your Ethiopian Business Needs a PWA")}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent("Progressive Web Apps in Ethiopia")}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://schoolpoint.com/blog/pwa-guide"
    },
    "headline": "Why Your Ethiopian Business Needs a PWA, Not Just an App",
    "description": "We frequently meet with CEOs who say 'I want an App.' In many cases, what they really need is a Progressive Web App (PWA). Here is why PWAs are dominating the East African market.",
    "image": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
    "author": {
      "@type": "Organization",
      "name": "SchoolPoint Strategy"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SchoolPoint",
      "logo": {
        "@type": "ImageObject",
        "url": "https://schoolpoint.com/logo.png"
      }
    },
    "datePublished": "2026-03-10"
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Why Your Ethiopian Business Needs a PWA"
        description="Learn why progressive web apps often outperform native apps for Ethiopian businesses focused on speed, mobile access, and lower development cost."
        path="/blog/pwa-guide"
        type="article"
        image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
        keywords={[
          "PWA Ethiopia",
          "progressive web app Ethiopia",
          "website development company in Ethiopia",
          "mobile web app Ethiopia",
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
              Future-Proofing Guide
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground border border-border/40">
              PWA
            </span>
            <span className="text-sm text-muted-foreground ml-auto">March 10, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-8 leading-[1.1]">
            Why Your Ethiopian Business Needs a PWA, Not Just an App
          </h1>
        </div>
      </section>

      <section className="py-12 pb-24 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
            <p className="text-xl leading-relaxed text-foreground mb-8 font-medium">
              We frequently meet with CEOs who say "I want an App." In many cases, what they really need is a Progressive Web App (PWA). App stores take a 30% cut, downloads require storage space on standard low-memory devices, and native apps cost thousands of dollars to build for iOS and Android separately. Here is why PWAs are dominating the East African market.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">What is a PWA?</h3>
            <p className="mb-4">
              A PWA is a website that behaves like an app. You access it via chrome or safari, but it can run offline, push notifications, and sit on your phone's home screen.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Why they are perfect for Ethiopia:</h3>
            <ul className="space-y-4 my-6 list-disc pl-6 marker:text-accent">
              <li><strong className="text-foreground">Zero Installation Barrier:</strong> A user goes to "yourshop.com.et" and clicks "Add to Home Screen". No visiting the Google Play Store, no downloading a 50MB file.</li>
              <li><strong className="text-foreground">Offline Functionality:</strong> When Ethio Telecom faces routing issues or a user steps out of LTE range in the countryside, a PWA can still display cached products and queue actions for when the internet returns.</li>
              <li><strong className="text-foreground">Cheaper to Maintain:</strong> You maintain one codebase (React/NextJS) instead of three (Web, Swift, Kotlin).</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">The Success Story</h3>
            <p className="mb-4">
              Jumia famously swapped to a PWA and saw a 33% higher conversion rate and a 50% lower bounce rate. If you are launching a product in 2026, start with a PWA. Only build a native App when your users absolutely demand features like heavy Bluetooth integration or complex 3D rendering.
            </p>

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

export default PWAGuide;
