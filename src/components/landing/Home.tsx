import About from "./pages/About";
import Hero from "./pages/Hero";
import Navbar from "./_components/Navbar";
// import Cta from "../ui/Cta";
// import PricingPage from "./pages/PricingPage";
import Footer from "./pages/Footer";
import JoinAs from "./pages/JoinAs";
import Testimonial from "./pages/Testimonial";
import Categories from "./pages/Categories";
import Courses from "./pages/Courses";
import Instructors from "./pages/Instructors";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <About />
      <Courses />
      <Instructors />
      <Testimonial />
      <JoinAs />
      <Footer />
    </>
  );
}

export default Home;
