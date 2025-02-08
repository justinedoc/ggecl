import About from "./pages/About";
import Hero from "./pages/Hero";
import Navbar from "./_components/Navbar";
import Footer from "./pages/Footer";
import JoinAs from "./pages/JoinAs";
import Testimonials from "./pages/Testimonial";
import Categories from "./pages/Categories";
import CoursesList from "./_components/CoursesList";
import InstructorsList from "./_components/InstructorsList";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <About />
      <CoursesList />
      <InstructorsList />
      <Testimonials />
      <JoinAs />
      <Footer />
    </>
  );
}

export default Home;
