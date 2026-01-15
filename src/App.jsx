import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

/* Public pages */
import Landing from "./pages/Landing";
import Login from "./pages/Login";

/* Route logic */
import DashboardResolver from "./routes/DashboardResolver";
import ProtectedRoute from "./routes/ProtectedRoute";

/* Layouts */
import StudentLayout from "./layouts/StudentLayout";
import InstructorLayout from "./layouts/InstructorLayout";
import AdminLayout from "./layouts/AdminLayout";

/* Student pages */
import StudentDashboard from "./dashboard/Student/StudentDashboard";

/* Instructor pages */
import InstructorDashboard from "./dashboard/Instructor/InstructorDashboard";
import InstructorOverview from "./dashboard/Instructor/pages/Overview";
import InstructorSubjects from "./dashboard/Instructor/pages/Subjects";
import InstructorSettings from "./dashboard/Instructor/pages/Settings";

/* Admin pages */
import AdminDashboard from "./dashboard/Admin/AdminDashboard";
import InstructorStudents from "./dashboard/Instructor/pages/Students";
import InstructorActivity from "./dashboard/Instructor/pages/Activity";
import StudentSubjects from "./dashboard/Student/pages/Subjects";
import StudentProgress from "./dashboard/Student/pages/Progress";
import StudentOverview from "./dashboard/Student/pages/Overview";
import StudentInstructors from "./dashboard/Student/pages/Instructors";
import StudentSettings from "./dashboard/Student/pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard entry (backend decides role) */}
        <Route path="/dashboard" element={<DashboardResolver />} />

        {/* ================= STUDENT ================= */}
        <Route
          path="/dashboard/student"
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <StudentLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<StudentDashboard />} />
          <Route path="subjects" element={<StudentSubjects />} />
          <Route path="Progress" element={<StudentProgress />} />
          <Route path="overview" element={<StudentOverview />} />
          <Route path="instructors" element={<StudentInstructors />} />
          <Route path="settings" element={<StudentSettings />} />
        </Route>

        {/* ================= INSTRUCTOR ================= */}
        <Route
          path="/dashboard/instructor"
          element={
            <ProtectedRoute allowedRoles={["instructor"]}>
              <InstructorLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<InstructorDashboard />} />
          <Route path="overview" element={<InstructorOverview />} />
          <Route path="subjects" element={<InstructorSubjects />} />
          <Route path="students" element={<InstructorStudents />} />
          <Route path="activity" element={<InstructorActivity />} />
          <Route path="settings" element={<InstructorSettings />} />
        </Route>

        {/* ================= ADMIN ================= */}
        <Route
          path="/dashboard/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
