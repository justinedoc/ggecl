import { Route, Routes } from "react-router";
import Home from "./components/landing/Home";
import Login from "./components/auth/pages/Login";
import Signup from "./components/auth/pages/Signup";
import Courses from "./components/landing/pages/Courses";
import Cart from "./components/landing/pages/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}

export default App;
