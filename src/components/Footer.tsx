import { Github, Twitter, Linkedin, Instagram, Send } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/40 pt-16 pb-8 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 group mb-6 inline-flex flex-shrink-0">
               <img src={logo} alt="SchoolPoint Logo" className="h-8 w-auto group-hover:scale-105 transition-transform" />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs mb-8">
              Empowering Your Digital Presence. We build, scale, and secure your future.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
               <a href="https://x.com/SchoolPointet" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                 <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.964H5.078z"></path></svg>
               </a>
               <a href="https://www.instagram.com/schoolpoint.et/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors"><Instagram className="w-4 h-4" /></a>
               <a href="https://www.linkedin.com/company/afro-digitalet" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors"><Linkedin className="w-4 h-4" /></a>
               <a href="https://t.me/SchoolPoint" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors"><Send className="w-4 h-4" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm text-foreground">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm text-foreground">Profiles</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="https://clutch.co/profile/afro-digital" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Clutch</a></li>
              <li><a href="https://techbehemoths.com/company/afro-digital" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">TechBehemoths</a></li>
              <li><a href="https://www.sortlist.com/agency/afro-digital" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Sortlist</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm text-foreground">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie" className="hover:text-foreground transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SchoolPoint. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Empowering Your Digital Presence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;