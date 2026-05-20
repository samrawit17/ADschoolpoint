import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import WebDevRoadmap from "./pages/blog/WebDevRoadmap";
import PaymentGateways from "./pages/blog/PaymentGateways";
import WebsiteBuilders from "./pages/blog/WebsiteBuilders";
import PWAGuide from "./pages/blog/PWAGuide";
import TilexPharmaLink from "./pages/blog/TilexPharmaLink";
import AIConsciousness from "./pages/blog/AIConsciousness";
import ContactUs from "./pages/ContactUs";
import BookingPage from "./pages/Booking";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import CookiePolicy from "./pages/CookiePolicy";
import Compliance from "./pages/Compliance";
import ScrollToTop from "./components/ScrollToTop";
import Announcements from "./pages/Announcements";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/web-dev-roadmap-ethiopia-2026" element={<WebDevRoadmap />} />
            <Route path="/blog/payment-gateways" element={<PaymentGateways />} />
            <Route path="/blog/website-builders" element={<WebsiteBuilders />} />
            <Route path="/blog/pwa-guide" element={<PWAGuide />} />
            <Route path="/blog/tilex-pharma-link" element={<TilexPharmaLink />} />
            <Route path="/blog/airplanes-dont-simulate-flight" element={<AIConsciousness />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/announcements" element={<Announcements />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
