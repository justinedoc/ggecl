import About from "./pages/About";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Cta from "../ui/Cta";
import PricingPage from "./pages/PricingPage";
import Footer from "./pages/Footer";
import JoinAs from "./pages/JoinAs";
import Testimonial from "../ui/Testimonial";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Cta />
      <JoinAs />
      <Testimonial />
      <PricingPage />
      <Footer />
    </>
  );
}

export default Home;
