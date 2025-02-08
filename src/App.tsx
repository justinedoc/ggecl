import { Route, Routes } from "react-router";
import Home from "./components/landing/Home";
import Login from "./components/auth/pages/Login";
import Signup from "./components/auth/pages/Signup";
import AllCourses from "./components/landing/_components/AllCourses";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/all-courses" element={<AllCourses />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}

export default App;
