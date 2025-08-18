import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useScrollToTop } from "./hooks/useScrollToTop";
import NotFound from "./pages/not-found";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Products from "./pages/products";
import Blog from "./pages/blog";
import Contact from "./pages/contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/products" component={Products} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Use the scroll to top hook to reset scroll position on navigation
  useScrollToTop();
  
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
      <Analytics />
      <SpeedInsights />
    </TooltipProvider>
  );
}

export default App;
