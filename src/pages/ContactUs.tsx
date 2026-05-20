import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import Seo from "@/components/Seo";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SchoolPoint",
  image: "https://schoolpoint.com/PRAD.png",
  url: "https://schoolpoint.com/contact",
  telephone: ["+251966074050", "+251983355598"],
  email: "hello@schoolpoint.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
  },
  areaServed: ["Ethiopia", "East Africa"],
};

const ContactUs = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast({
            title: "Message Sent!",
            description: "We'll get back to you within 24 hours.",
          });
          form.current?.reset();
        },
        (error) => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem sending your message. Please try again.",
            variant: "destructive",
          });
          console.error("FAILED...", error.text);
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title="Contact SchoolPoint"
        description="Talk to SchoolPoint about software development, website projects, AI implementation, cybersecurity, and digital marketing in Addis Ababa and across Ethiopia."
        path="/contact"
        keywords={[
          "contact software company Ethiopia",
          "Addis Ababa web development agency",
          "digital transformation consulting Ethiopia",
        ]}
        schema={localBusinessSchema}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-6 ring-1 ring-primary/20 animate-fade-in-up">
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Let's Build Something <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Amazing Together</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Have a project in mind? We'd love to hear about it. Let's discuss how we can help transform your vision into reality.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            
            {/* Contact Info (Left Side - 2 Cols) */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  Reach out to us through any of these channels. We typically respond within 24 hours.
                </p>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    icon: <Phone className="w-5 h-5" />,
                    title: "Phone",
                    details: ["+251 912 207 180", "Mon-Sat 9am-6pm EAT"],
                    color: "text-blue-500",
                    bgColor: "bg-blue-500/10"
                  },
                  {
                    icon: <Mail className="w-5 h-5" />,
                    title: "Email",
                    details: ["hello@schoolpoint.com", "support@schoolpoint.com"],
                    color: "text-emerald-500",
                    bgColor: "bg-emerald-500/10"
                  },
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    title: "Office",
                    details: ["Addis Ababa", "Ethiopia"],
                    color: "text-purple-500",
                    bgColor: "bg-purple-500/10"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5 p-6 rounded-2xl bg-card border hover:shadow-md transition-shadow">
                    <div className={`p-3 rounded-xl ${item.bgColor} ${item.color} shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Office Hours Bento Box */}
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Clock className="w-24 h-24 text-primary" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                       Office Hours
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center border-b border-border/50 pb-2">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-border/50 pb-2">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="font-medium">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="font-medium text-destructive">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form (Right Side - 3 Cols) */}
            <div className="lg:col-span-3">
              <div className="bg-card border rounded-3xl p-8 md:p-10 shadow-xl shadow-primary/5">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
                  <p className="text-muted-foreground">Fill out the form below and we'll get back to you shortly.</p>
                </div>

                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="bg-background"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-background"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        className="bg-background"
                        placeholder="Your Company Inc."
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="bg-background"
                        placeholder="+251 912 207 180"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Project Details <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="bg-background resize-none"
                      placeholder="Tell us about your project, timeline, and budget..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full sm:w-auto min-w-[200px] rounded-full group"
                    disabled={isSending}
                  >
                    {isSending ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-24 pt-12">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl overflow-hidden border bg-card p-2 md:p-4">
            <div className="w-full h-[300px] md:h-[400px] bg-muted rounded-2xl flex items-center justify-center relative overflow-hidden group">
              {/* Background Map Placeholder Pattern */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\"20\\" height=\\"20\\" viewBox=\\"0 0 20 20\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cg fill=\\"%239C92AC\\" fill-opacity=\\"0.4\\" fill-rule=\\"evenodd\\"%3E%3Ccircle cx=\\"3\\" cy=\\"3\\" r=\\"3\\"/%3E%3Ccircle cx=\\"13\\" cy=\\"13\\" r=\\"3\\"/%3E%3C/g%3E%3C/svg%3E")',
              }} />
              
              <div className="text-center relative z-10 p-6 rounded-2xl bg-background/80 backdrop-blur-sm border shadow-sm transition-transform group-hover:scale-105 duration-300">
                <MapPin className="w-10 h-10 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                <p className="text-muted-foreground text-sm">Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
