import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Twitter, Linkedin, Facebook } from "lucide-react";
import { useState } from "react";
import betermariyamProfilePic from "@/assets/1728312666234.jpeg";
import Seo from "@/components/Seo";

const PaymentGateways = () => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const postUrl = typeof window !== 'undefined' ? window.location.href : '';

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent("How to Integrate Chapa, Telebirr, and EthSwitch into Your Website (2026 Guide)")}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent("How to Integrate Chapa, Telebirr, and EthSwitch")}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://schoolpoint.com/blog/payment-gateways"
    },
    "headline": "Chapa vs. Telebirr: The 2026 Integration Guide for Ethiopian Startups",
    "description": "If you are building an e-commerce platform in Ethiopia today, your checkout flow is your most critical component. Here is a technical breakdown of how the big two compare.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtrAtWhtlDHCZbhkt8jeaNzsK3xEDsorxYtw&s",
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
    "datePublished": "2026-01-14"
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="How to Integrate Chapa, Telebirr, and EthSwitch"
        description="A 2026 technical guide to integrating Chapa, Telebirr, and EthSwitch into websites and e-commerce platforms built for the Ethiopian market."
        path="/blog/payment-gateways"
        type="article"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtrAtWhtlDHCZbhkt8jeaNzsK3xEDsorxYtw&s"
        keywords={[
          "Telebirr integration Ethiopia",
          "Chapa integration Ethiopia",
          "payment gateway Ethiopia",
          "website development in Ethiopia",
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
              Technical Guide
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground border border-border/40">
              FinTech
            </span>
            <span className="text-sm text-muted-foreground ml-auto">March 1, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-8 leading-[1.1]">
            How to Integrate Chapa, Telebirr, and EthSwitch into Your Website (2026 Guide)
          </h1>
        </div>
      </section>

      <section className="py-12 pb-24 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
            <p className="text-xl leading-relaxed text-foreground mb-8 font-medium">
              In 2026, a website that can’t accept money is just a digital brochure. For Ethiopian developers and business owners, the biggest challenge isn't building the site—it's connecting it to the wallets where the money actually is: Telebirr, CBEBirr, and M-Pesa.
            </p>
            
            <p className="mb-12">
              If you want to reduce cart abandonment and build trust, you need a seamless checkout experience. Here is the technical roadmap to integrating Ethiopia's leading payment gateways.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">1. Why Chapa is the Developer’s Favorite</h3>
            <p className="mb-4">
              Chapa remains the most developer-friendly gateway in Ethiopia. In 2026, their API has matured to support 15+ open-source libraries.
            </p>
            <ul className="space-y-4 my-6 list-disc pl-6 marker:text-accent">
              <li><strong className="text-foreground">The Integration:</strong> Use the Chapa Flutter SDK or the WooCommerce plugin for instant setup.</li>
              <li><strong className="text-foreground">Pro Tip:</strong> Always use their "Webhook" feature to verify transactions. This ensures that even if a user closes their browser during payment, your system still records the successful sale.</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">2. Direct Telebirr Integration</h3>
            <p className="mb-4">
              For high-volume merchants, integrating Telebirr directly via the Ethio Telecom Developer Portal is a must.
            </p>
            <ul className="space-y-4 my-6 list-disc pl-6 marker:text-accent">
              <li><strong className="text-foreground">Security first:</strong> You must handle the merchOrderId and transactionNo with strict encryption (RSA-2048) as required by Ethio Telecom's 2026 security standards.</li>
              <li><strong className="text-foreground">The Benefit:</strong> Direct integration often leads to lower transaction fees compared to third-party aggregators.</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">3. The Role of EthSwitch</h3>
            <p className="mb-4">
              EthSwitch has unified the banking landscape. By integrating an EthSwitch-compatible gateway, you allow your customers to pay using any local bank card or mobile app (CBE, Awash, Dashen, etc.) through a single interface.
            </p>

          </div>

          <div className="flex items-center justify-between border-t border-border/40 pt-8 mt-12">
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

      <Footer />
    </div>
  );
};

export default PaymentGateways;
