import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/general/HomePage";
import Login from "./pages/general/Login";
import SignUp from "./pages/general/SignUp";
import ForgotPassword from "./pages/general/ForgotPassword";
import StudentDB from "./pages/student/StudentDashboard";
import TutorDB from "./pages/tutor/TutorDashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/student-dashboard" element={<StudentDB />} />
        <Route path="/tutor-dashboard" element={<TutorDB />} />
      </Routes>
    </Router>
  );
}

export default App;
