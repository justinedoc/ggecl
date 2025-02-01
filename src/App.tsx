import { Route, Routes } from "react-router";
import Home from "./components/landing/Home";
import Login from "./components/landing/pages/Login";
import Signup from "./components/landing/pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}

export default App;
