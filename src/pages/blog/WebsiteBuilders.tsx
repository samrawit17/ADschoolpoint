import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Twitter, Linkedin, Facebook } from "lucide-react";
import { useState } from "react";
import Seo from "@/components/Seo";

const WebsiteBuilders = () => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const postUrl = typeof window !== 'undefined' ? window.location.href : '';

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent("Wix vs. Webflow vs. Gebeya Jitume: Which is Best for Ethiopia?")}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent("Wix vs. Webflow vs. Gebeya Jitume")}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://schoolpoint.com/blog/website-builders"
    },
    "headline": "Wix vs. Webflow vs. Gebeya Jitume: Which is Best for Ethiopia?",
    "description": "How the top website building platforms stack up in the 2026 Ethiopian market.",
    "image": "https://uploads-ssl.webflow.com/5d5ccddd9a3f387d210a369c/64db0276a6baab24d8aa9d3c_Webflow%20vs%20Wix%20comparison.webp",
    "author": {
      "@type": "Organization",
      "name": "SchoolPoint Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SchoolPoint",
      "logo": {
        "@type": "ImageObject",
        "url": "https://schoolpoint.com/logo.png"
      }
    },
    "datePublished": "2026-02-25"
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Wix vs Webflow vs Gebeya Jitume"
        description="A practical comparison of website building platforms for the Ethiopian market, covering speed, flexibility, SEO, and local fit."
        path="/blog/website-builders"
        type="article"
        image="https://uploads-ssl.webflow.com/5d5ccddd9a3f387d210a369c/64db0276a6baab24d8aa9d3c_Webflow%20vs%20Wix%20comparison.webp"
        keywords={[
          "website builders Ethiopia",
          "website development in Ethiopia",
          "Wix vs Webflow Ethiopia",
          "no code website Ethiopia",
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
              Comparison Guide
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground border border-border/40">
              No-Code
            </span>
            <span className="text-sm text-muted-foreground ml-auto">February 25, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-8 leading-[1.1]">
            Wix vs. Webflow vs. Gebeya Jitume: Which is Best for Ethiopia?
          </h1>
        </div>
      </section>

      <section className="py-12 pb-24 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
            <p className="text-xl leading-relaxed text-foreground mb-8 font-medium">
              "I need a website, but I don't want to code." This is the most common request in Addis Ababa's tech hubs today. But "No-Code" doesn't mean "one size fits all." Here is how the top platforms stack up in the 2026 Ethiopian market.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Wix: The Speed King</h3>
            <p className="mb-4">
              If you are a small business owner in Bole or Mekele and need a site live today, Wix is your winner.
            </p>
            <ul className="space-y-4 my-6 list-disc pl-6 marker:text-accent">
              <li><strong className="text-foreground">Pros:</strong> The Wix AI builder is now highly intuitive. It can generate a full site structure by simply describing your business in English or Amharic.</li>
              <li><strong className="text-foreground">Cons:</strong> It can be "heavy." On slower 3G connections in rural areas, Wix sites can take 3-4 seconds longer to load than optimized competitors.</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Webflow: The Professional’s Choice</h3>
            <p className="mb-4">
              Webflow is what we use at SchoolPoint for high-end clients. It produces clean, semantic code that Google loves.
            </p>
            <ul className="space-y-4 my-6 list-disc pl-6 marker:text-accent">
              <li><strong className="text-foreground">Pros:</strong> Pixel-perfect design. You have total control over the mobile experience, which is critical since 90% of your traffic will be on smartphones.</li>
              <li><strong className="text-foreground">Cons:</strong> Steeper learning curve. You’ll need a few weeks of training to master it.</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Gebeya Jitume: The Local Disruptor</h3>
            <p className="mb-4">
              Gebeya Jitume has become the go-to for the "Digital Ethiopia" movement.
            </p>
            <ul className="space-y-4 my-6 list-disc pl-6 marker:text-accent">
              <li><strong className="text-foreground">Why it wins locally:</strong> It is built with African infrastructure in mind. It prioritizes ultra-lightweight pages and has native "one-click" integrations for local payment wallets that global builders sometimes struggle with.</li>
            </ul>

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

export default WebsiteBuilders;
