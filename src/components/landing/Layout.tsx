import { Outlet } from "react-router";
import Navbar from "./_components/Navbar";
import Footer from "./pages/Footer";
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
