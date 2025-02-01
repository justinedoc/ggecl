import About from "./pages/About";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Cta from "../ui/Cta";
import PricingPage from "./pages/PricingPage";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Cta />
      <PricingPage />
    </>
  );
}

export default Home;
