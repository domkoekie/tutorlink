import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/general/HomePage";
import Login from "./pages/general/Login";
import SignUp from "./pages/general/SignUp";
import ForgotPassword from "./pages/general/ForgotPassword";
import StudentDB from "./pages/student/StudentDashboard";
import TutorDB from "./pages/tutor/TutorDashboard";
import StudentProfile from "./pages/student/StudentProfile";
import TutorProfile from "./pages/tutor/TutorProfile";
import StudentSessions from "./pages/student/StudentSessions";
import TutorSessions from "./pages/tutor/TutorSessions";
import About from "./pages/general/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/student-dashboard" element={<StudentDB />} />
        <Route path="/tutor-dashboard" element={<TutorDB />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/tutor-profile" element={<TutorProfile />} />
        <Route path="/student-sessions" element={<StudentSessions />} />
        <Route path="/tutor-sessions" element={<TutorSessions />} />
      </Routes>
    </Router>
  );
}

export default App;
