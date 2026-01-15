import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  LogOut,
  MessageSquare,
  BarChart,
  Users,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r p-4">
      <h2 className="font-bold text-xl mb-6">Student</h2>

      <nav className="flex flex-col gap-3">
        <NavLink to="/dashboard/student" end>Dashboard</NavLink>
        <NavLink to="/dashboard/student/courses">My Courses</NavLink>
        <NavLink to="/dashboard/student/assignments">Assignments</NavLink>
      </nav>
    </aside>
  );
};

const StudentSidebar = ({ onLogout }) => {
  return (
    <aside className="w-72 fixed bg-gray-50 flex flex-col pl-6 pr-4 py-8 overflow-y-auto hide-scrollbar">
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 mb-10">
        <img
          src="https://i.ibb.co/bM5YrcT2/logored.png"
          alt="Logo"
          className="w-28 md:w-46 -ml-5"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        <NavLink
          to="/dashboard/student"
          end
          className={({ isActive }) =>
            `w-full flex items-center px-4 py-3.5 text-sm font-medium transition-all duration-300 hover:cursor-pointer ${
              isActive
                ? "bg-[#E2343C] text-white"
                : "text-gray-500 hover:bg-white hover:text-[#E2343C] hover:shadow-md hover:shadow-gray-100"
            }`
          }
        >
          <LayoutDashboard size={20} />
          <span className="ml-4">Dashboard</span>
        </NavLink>

        <NavLink
          to="/dashboard/student/subjects"
          className={({ isActive }) =>
            `w-full flex items-center px-4 py-3.5 text-sm font-medium transition-all duration-300 hover:cursor-pointer ${
              isActive
                ? "bg-[#E2343C] text-white"
                : "text-gray-500 hover:bg-white hover:text-[#E2343C] hover:shadow-md hover:shadow-gray-100"
            }`
          }
        >
          <BookOpen size={20} />
          <span className="ml-4">My subjects</span>
        </NavLink>

        <NavLink
          to="/dashboard/student/progress"
          className={({ isActive }) =>
            `w-full flex items-center px-4 py-3.5 text-sm font-medium transition-all duration-300 hover:cursor-pointer ${
              isActive
                ? "bg-[#E2343C] text-white"
                : "text-gray-500 hover:bg-white hover:text-[#E2343C] hover:shadow-md hover:shadow-gray-100"
            }`
          }
        >
          <BarChart size={20} />
          <span className="ml-4">Progress</span>
        </NavLink>

        <NavLink
          to="/dashboard/student/instructors"
          className={({ isActive }) =>
            `w-full flex items-center px-4 py-3.5 text-sm font-medium transition-all duration-300 hover:cursor-pointer ${
              isActive
                ? "bg-[#E2343C] text-white"
                : "text-gray-500 hover:bg-white hover:text-[#E2343C] hover:shadow-md hover:shadow-gray-100"
            }`
          }
        >
          <Users size={20} />
          <span className="ml-4">My Instructors</span>
        </NavLink>

        <NavLink
          to="/dashboard/student/settings"
          className={({ isActive }) =>
            `w-full flex items-center px-4 py-3.5 text-sm font-medium transition-all duration-300 hover:cursor-pointer ${
              isActive
                ? "bg-[#E2343C] text-white"
                : "text-gray-500 hover:bg-white hover:text-[#E2343C] hover:shadow-md hover:shadow-gray-100"
            }`
          }
        >
          <Settings size={20} />
          <span className="ml-4">Settings</span>
        </NavLink>
      </nav>

      {/* Logout */}
      <button
        onClick={onLogout}
        className="flex items-center gap-2 mt-6 px-4 text-xs font-semibold text-gray-400 hover:text-[#E2343C] transition-colors hover:cursor-pointer"
      >
        <LogOut size={14} /> Log out
      </button>
    </aside>
  );
};

export default StudentSidebar;