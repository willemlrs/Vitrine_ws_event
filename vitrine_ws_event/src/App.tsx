import { Toaster } from "@/components/ui/toaster";
import { Helmet } from "react-helmet";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Availability from "./pages/Availability";
import ReservationPage from "./pages/ReservationPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* META TAGS DYNAMIQUES */}
      <Helmet>
        <title>ws_event</title>
        <meta name="description" content="Get exclusive tickets for concerts, matches and more. No hidden fees, zero stress." />
        <meta property="og:title" content="ws_event" />
        <meta property="og:description" content="Get exclusive tickets for concerts, matches and more. No hidden fees, zero stress." />
        <meta property="og:image" content="https://www.wsevent.fr/og-preview.jpg" />
        <meta property="og:url" content="https://www.wsevent.fr" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ws_event" />
        <meta name="twitter:image" content="https://www.wsevent.fr/og-preview.jpg" />
      </Helmet>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/*<Route path="/availability" element={<Availability />} />*/ }
          <Route path="/reserver/:evenement" element={<ReservationPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
