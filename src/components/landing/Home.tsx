import About from "./pages/About";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Cta from "./pages/Cta";
import PricingPage from "./pages/PricingPage";
import Login from "./pages/Login";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Cta />
      <PricingPage />
      <Login />
    </>
  );
}

export default Home;
