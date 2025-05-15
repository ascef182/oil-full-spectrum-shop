import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Benefits from "./pages/Benefits";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import ProductInfo from "./pages/ProductInfo";
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import BlogIndex from './pages/blog/BlogIndex';
import OleoFitoterapicoAnsiedade from './pages/blog/OleoFitoterapicoAnsiedade';
import TratamentoNaturalInsonia from './pages/blog/TratamentoNaturalInsonia';
import FitoterapiaFibromialgia from './pages/blog/FitoterapiaFibromialgia';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/produtos/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/beneficios" element={<Benefits />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/produto-info" element={<ProductInfo />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/oleo-fitoterapico-ansiedade" element={<OleoFitoterapicoAnsiedade />} />
            <Route path="/blog/tratamento-natural-insonia" element={<TratamentoNaturalInsonia />} />
            <Route path="/blog/fitoterapia-fibromialgia" element={<FitoterapiaFibromialgia />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
