import { Route, Routes } from "react-router";
import Login from "./components/auth/pages/Login";
import Signup from "./components/auth/pages/Signup";
import Courses from "./components/landing/pages/Courses";
import Cart from "./components/landing/pages/Cart";
import Layout from "./components/landing/Layout";
import Home from "./components/landing/pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="/courses" element={<Courses />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}

export default App;
