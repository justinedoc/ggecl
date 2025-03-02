import { Route, Routes } from "react-router";
import Login from "./components/auth/pages/Login";
import Signup from "./components/auth/pages/Signup";
import Courses from "./components/landing/pages/Courses";
import Cart from "./components/landing/pages/Cart";
import Layout from "./components/landing/Layout";
import Home from "./components/landing/pages/Home";
import CoursesPage from "./components/landing/pages/CoursePage";
import Instructor from "./components/landing/pages/Instructor";
import NotFound from "./components/ui/NotFound.tsx";
import StudentLayout from "./components/Dashboard/students/_components/StudentLayout";
import Assignment from "./components/Dashboard/students/pages/Assignment";
import Settings from "./components/Dashboard/students/pages/Settings";
import StudentHome from "@/components/Dashboard/students/pages/StudentHome.tsx";
import StudentCourses from "@/components/Dashboard/students/pages/StudentCourses.tsx";
import StudentCalendar from "@/components/Dashboard/students/pages/StudentCalendar.tsx";
import StudentChat from "@/components/Dashboard/students/pages/StudentChat.tsx";
import CourseDetails from "@/components/Dashboard/Instructor/CoursesDetails.tsx";

function App() {
  return (
    <Routes>
      {/* Landing page routes  */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/courses/:id" element={<CoursesPage />} />
      </Route>

      {/* Dashboard routes  */}
      <Route path="/student/dashboard" element={<StudentLayout />}>
        {/* Student Dashboard routes  */}
        <Route index element={<StudentHome />} />
        <Route path="assignment" element={<Assignment />} />
        <Route path="settings" element={<Settings />} />
        <Route path="courses" element={<StudentCourses />} />
        <Route path="calendar" element={<StudentCalendar />} />
        <Route path="chat" element={<StudentChat />} />
      </Route>

      <Route path="/mycourses" element={<CourseDetails />} />

      <Route path="/courses" element={<Courses />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
