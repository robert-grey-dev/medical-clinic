import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Diagnostics from "./pages/Diagnostics";
import Orthopedics from "./pages/Orthopedics";
import Neurology from "./pages/Neurology";
import Ophthalmology from "./pages/Ophthalmology";
import InternalMedicine from "./pages/InternalMedicine";
import Cardiology from "./pages/Cardiology";
import AboutUs from "./pages/AboutUs";
import PreventiveCare from "./pages/PreventiveCare";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.search, location.hash]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <PerformanceOptimizer />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/orthopedics" element={<Orthopedics />} />
          <Route path="/neurology" element={<Neurology />} />
          <Route path="/ophthalmology" element={<Ophthalmology />} />
          <Route path="/internal-medicine" element={<InternalMedicine />} />
          <Route path="/cardiology" element={<Cardiology />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/preventive-care" element={<PreventiveCare />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
