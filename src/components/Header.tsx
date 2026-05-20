import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 flex justify-center mt-4 transition-all duration-500 px-4 pointer-events-none">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ${
            scrolled 
              ? "w-full max-w-4xl bg-background/70 backdrop-blur-xl border border-border/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full py-3 px-6" 
              : "w-full max-w-6xl bg-transparent py-4 px-2"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0 relative z-10 flex-1 min-w-[160px]">
            <img 
              src={logo} 
              alt="SchoolPoint Logo" 
              className={`h-7 md:h-8 w-auto flex-shrink-0 object-contain group-hover:scale-105 transition-transform ${scrolled ? 'drop-shadow-sm' : ''}`} 
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1 relative z-10 bg-background/30 backdrop-blur-sm px-2 py-1.5 rounded-full border border-border/30 shadow-inner">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-background border border-border/50 rounded-full shadow-sm"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4 justify-end flex-1 min-w-[160px]">
            <div className="hidden md:block">
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="bg-background text-foreground border border-border hover:bg-accent/10 hover:text-accent font-medium text-sm rounded-full shadow-sm px-6 h-10 transition-all duration-300 transform active:scale-95"
                >
                  Let's Talk
                </Button>
              </Link>
            </div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className={`md:hidden rounded-full ${scrolled ? "bg-background/50 border-border/50" : "bg-background/80 backdrop-blur-md"}`}
                >
                  <Menu className="w-5 h-5 text-foreground" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] border-border/40 bg-background/95 backdrop-blur-2xl">
                <SheetHeader className="pb-6 border-b border-border/10">
                  <SheetTitle className="text-left font-bold tracking-tight text-xl">Navigation</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2 mt-8">
                  {navLinks.map((link, i) => {
                    const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                    return (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={link.name}
                      >
                        <Link
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className={`block text-lg font-medium py-3 px-4 rounded-xl transition-colors ${
                            isActive
                              ? "bg-accent/10 text-accent font-bold"
                              : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    )
                  })}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                  >
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="block mt-6">
                      <Button variant="outline" className="w-full bg-background text-foreground border border-border rounded-xl h-12 text-lg hover:bg-accent/10 hover:text-accent shadow-sm">
                        Let's Talk
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </motion.div>
      </header>
    </>
  );
};

export default Header;
