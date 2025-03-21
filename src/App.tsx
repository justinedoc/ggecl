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
import InstructorSettings from "@/components/Dashboard/Instructor/pages/InstructorSettings.tsx";
import CoursesDetails from "@/components/Dashboard/Instructor/pages/CoursesDetails.tsx";
import InstructorLayout from "@/components/Dashboard/Instructor/components/InstructorLayout.tsx"
import Earnings from "@/components/Dashboard/Instructor/pages/Earnings.tsx"
import InstructorHome from "@/components/Dashboard/Instructor/pages/InstructorHome.tsx"
import InstructorCourses from "@/components/Dashboard/Instructor/pages/InstructorCourses.tsx"
import SingleCourse from "@/components/Dashboard/Instructor/pages/SingleCourse.tsx"
import InstructorLogin from "@/components/Dashboard/Instructor/pages/InstructorLogin"
import Chat from "@/components/Dashboard/Instructor/pages/Chat"
import AdminLayout from "@/components/Dashboard/admin/components/AdminLayout"
import AdminHome from "@/components/Dashboard/admin/pages/AdminHome"
import Adminlogin from "@/components/Dashboard/admin/pages/Adminlogin"
import StudentLogin from "@/components/Dashboard/students/pages/StudentLogin"
import AdminSettings from "@/components/Dashboard/admin/pages/AdminSettings"
import Payments from "@/components/Dashboard/admin/pages/Payments"
import CourseManagement from "@/components/Dashboard/admin/pages/CourseManagement"
import Analytics from "@/components/Dashboard/admin/pages/Analytics"

function App() {
  return (
    <Routes>
      {/* Landing page routes  */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="instructor" element={<Instructor />} />
        <Route path="courses/:id" element={<CoursesPage />} />


        
      {/* Login routes for all accounts */}
      <Route path="instructor/login" element={<InstructorLogin />} />
      <Route path="admin/login" element={<Adminlogin />} />
      <Route path="student/login" element={<StudentLogin />} />
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

      <Route path="/instructor/dashboard" element={<InstructorLayout />}>
        <Route path="mycourses" element={<CoursesDetails />} />
        <Route path="settings" element={<InstructorSettings />} />
        <Route path="earnings" element={<Earnings />} />
        <Route index element={<InstructorHome />} />
        <Route path="courses" element={<InstructorCourses />} />
        <Route path="chat" element={<Chat />} />
        <Route path="course1" element={<SingleCourse />} />                    {/* Justin you go change this stuff to the course/id when picked by the user */}
      </Route>



      <Route path="/admin/dashboard" element={<AdminLayout />}>
      <Route index element={<AdminHome />} />      
      <Route path="settings" element={<AdminSettings />} />      
      <Route path="payments" element={<Payments />} />      
      <Route path="courses" element={<CourseManagement />} />      
      <Route path="analytics" element={<Analytics />} />      
      </Route>










      <Route path="/courses" element={<Courses />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
