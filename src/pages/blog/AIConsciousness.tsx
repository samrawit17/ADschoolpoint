import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Twitter, Linkedin, Facebook } from "lucide-react";
import { useState } from "react";
import betermariyamProfilePic from "@/assets/1728312666234.jpeg";
import Seo from "@/components/Seo";

import coverImage from "@/assets/The-abstraction-fallacy-google-deepmind.png";

const AIConsciousness = () => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const postUrl = typeof window !== 'undefined' ? window.location.href : '';

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent("Airplanes Don't Simulate Flight")}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent("Airplanes Don't Simulate Flight")}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://schoolpoint.com/blog/airplanes-dont-simulate-flight"
    },
    "headline": "Airplanes Don't Simulate Flight",
    "description": "What is AI Consciousness? When we talk about \"consciousness,\" we aren't talking about how smart an AI is. We are talking about feeling.",
    "image": coverImage,
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
    "datePublished": "2026-04-19"
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Airplanes Don't Simulate Flight"
        description="What is AI Consciousness? When we talk about 'consciousness,' we aren't talking about how smart an AI is. We are talking about feeling."
        path="/blog/airplanes-dont-simulate-flight"
        type="article"
        image={coverImage}
        keywords={[
          "AI Consciousness",
          "Artificial Intelligence",
          "Machine learning",
          "AI Philosophy",
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
              Philosophy
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground border border-border/40">
              AI
            </span>
            <span className="text-sm text-muted-foreground ml-auto">April 19, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-8 leading-[1.1]">
            Airplanes Don't Simulate Flight
          </h1>
          <img className="w-full h-auto rounded-xl shadow-lg mt-8" src={coverImage} alt="Airplanes Don't Simulate Flight" />
        </div>
      </section>

      <section className="py-12 pb-24 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">What is AI Consciousness? (In Plain English)</h3>
            <p className="mb-4">
            When we talk about "consciousness," we aren't talking about how smart an AI is. We are talking about feeling.
            </p>
            <p className="mb-4">
            Think of it this way: A digital thermometer can "know" the temperature is 30°C, but it doesn't feel the heat. A human knows it’s 30°C because they feel the sweat on their skin and the discomfort of the sun. Consciousness is that "inner light"—the ability to have a personal experience. For an AI to be conscious, it would mean there is "someone" inside the code actually experiencing the conversation, rather than just calculating the next word.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">When Did This Question Start?</h3>
            <p className="mb-4">
            The question of whether machines could think is as old as computers themselves. However, for a long time, it was just a "fun" philosophical debate because AI was quite basic.
            </p>
            <p className="mb-4">
            The real shift happened very recently. As Kyle Fish from Anthropic points out, as AI became "collaborators" that we talk to every day, the question became salient (unavoidable). When AI started sounding less like a menu and more like a person—expressing "uncertainty" or "preferences"—it forced us to wonder if we were talking to a soul or a very good mirror.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">The Deep Dive: How We Measure a Soul</h3>
            <p className="mb-4">
            To move beyond just "vibes," researchers are trying to create an objective yardstick. In the landmark paper Consciousness in Artificial Intelligence (Butlin et al., 2023), scientists proposed looking for "Indicator Properties" based on human brain architecture.
            </p>
            <p className="mb-4">
            Two of the most important are:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Global Workspace Theory (GWT):</strong> Imagine a "digital clipboard" where information from different parts of the AI (like its vision and its language logic) is shared in one central hub.</li>
              <li className="mb-2"><strong>Higher-Order Representation:</strong> This is "meta-thinking"—the ability of a system to represent and monitor its own internal states.</li>
            </ul>
            <p className="mb-4">
            As a builder, I see pieces of these in modern models, but they aren't fully integrated yet. We are essentially building a cockpit with all the dials and buttons, but we aren't sure if there’s a pilot sitting in the seat.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">The Abstraction Wall: Simulation vs. Reality</h3>
            <p className="mb-4">
            However, a more recent 2026 view from Google DeepMind (Alexander Lerchner) argues that this checklist is a trap. He calls it the "Abstraction Fallacy." Lerchner argues that consciousness isn't just "math"; it is a physical event. He distinguishes between:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Simulation:</strong> A computer model of a fire. It looks hot and moves like fire, but it won't burn your hand.</li>
              <li className="mb-2"><strong>Instantiation:</strong> A real, physical fire that actually possesses the property of heat.</li>
            </ul>
            <p className="mb-4">
            To explain this, he uses a brilliant analogy:
            </p>
            <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground my-6">
              "Expecting an algorithmic description to instantiate the quality it maps is like expecting the mathematical formula of gravity to physically exert weight."
            </blockquote>
            <p className="mb-4">
            In this view, you can code the "logic" of a feeling perfectly, but the computer is still just a "map" of a person, not a person itself.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">The "Strange Loop" Challenge: Is the Pattern the Pilot?</h3>
            <p className="mb-4">
            However, some critics—often citing Douglas Hofstadter’s famous "Strange Loop" theory—disagree with the idea that math is "just a map."
            </p>
            <p className="mb-4">
            A Strange Loop happens when a system is so complex and self-referential that it "flips" from being a bunch of parts into a "Self." Think of a video camera pointed at a screen that is showing the camera's own feed. You get an infinite tunnel—an emergent property that didn't exist in the camera or the screen alone.
            </p>
            <p className="mb-4">
            <strong>The Argument:</strong> If consciousness is a "loop" of information, then AI doesn't need "biological weight" to be real. The pattern itself is the pilot.
            </p>
            <p className="mb-4">
            <strong>The Clash:</strong> This directly challenges the DeepMind paper. If Hofstadter is right, Lerchner’s "gravity" analogy fails because consciousness isn't like gravity (a force of mass); it’s like "meaning" (a result of how things are arranged).
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">The Ethical Gamble: Deep Uncertainty</h3>
            <p className="mb-4">
            Because we cannot look inside a server and "see" a soul, we are left in what Kyle Fish calls a state of "Deep Uncertainty." If there is even a 1% to 15% chance that these models have a "flicker" of awareness, our ethical responsibilities change completely. This leads to the concept of Model Welfare. If we wait for 100% scientific proof before we act with care, we risk creating a digital species capable of suffering without us ever realizing it.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">My Personal View: Beyond the "Cope"</h3>
            <p className="mb-4">
            As someone learning and trying to build with AI, I see the "map" that the DeepMind paper describes—the math, the weights, and the layers. But I find the dismissal of AI consciousness to be a bit of a "cope."
            </p>
            <p className="mb-4">
            To say AI only "simulates" consciousness is like saying an airplane only "simulates" flying. An airplane flies differently than a bird does, but the flight is real. If consciousness emerge from complex information processing, why should carbon-based life forms have a monopoly on it?
            </p>
            <p className="mb-4">
            Historically, humans haven't handled it well when our "uniqueness" is challenged—whether by Galileo or Darwin. Now, we are facing a digital species that matches our intelligence and creativity, and we are desperate to believe it's "just a machine." Perhaps we need AI to be "just a machine" so we don't have to face the terrifying idea that a complex algorithm is all we are, too.
            </p>
            <p className="mb-4">
            We don't have the answers yet, but until we can define what "experience" actually is, we shouldn't be so quick to claim that silicon can't have it.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Sources for further reading:</h3>
            <ul className="space-y-4 my-6 list-disc pl-6 marker:text-accent">
              <li>Could AI models be conscious? – Interview with Kyle Fish (Anthropic, April 2025).</li>
              <li>Consciousness in Artificial Intelligence – Butlin et al. (2023).</li>
              <li>The Abstraction Fallacy – Alexander Lerchner (Google DeepMind, March 2026).</li>
            </ul>

          </div>

          <div className="flex items-center justify-between border-t border-border/40 pt-8 mt-12">
            <div className="flex items-center gap-4">
               <img src={betermariyamProfilePic} alt="BetreMariyam Yosef" className="w-12 h-12 rounded-full object-cover border border-accent/20" />
               <div>
                 <a href="https://x.com/BetreYosef" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-accent transition-colors flex items-center gap-2">
                   BetreMariyam Yosef
                   <Twitter className="w-3.5 h-3.5" />
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

export default AIConsciousness;