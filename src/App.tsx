import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SyrineJemal from "./pages/SyrineJemal";
import Projects from "./pages/Projects";
import SJLabs from "./pages/SJLabs";
import People from "./pages/People";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import LogoAnimation from "./components/LogoAnimation";
import ThankYou from './pages/ThankYou';

const queryClient = new QueryClient();

const App = () => {
  const [animationDone, setAnimationDone] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-black text-white">
          {/* Show animation only if it hasn't finished */}
          {!animationDone && (
            <LogoAnimation onComplete={() => setAnimationDone(true)} />
          )}

          {/* Render app once animation completes */}
          {(animationDone) && ( // 'true' ensures fallback render if animation fails
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/syrine-jemal" element={<SyrineJemal />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/sj-labs" element={<SJLabs />} />
                <Route path="/people" element={<People />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          )}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
