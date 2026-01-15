import { Book, Clock, LayoutDashboard, LogOut, Settings, Users } from "lucide-react";
import { NavLink } from "react-router-dom";

const InstructorSidebar = ({ onLogout }) => {
  return (
    <aside className="fixed w-72 flex flex-col pl-6 pr-4 py-8 overflow-y-hidden h-screen hide-scrollbar" style={{fontFamily: "DM Sans, sans-serif"}}>
      
      <div className="flex items-center gap-3 px-4 mb-10">
        <img
          src="https://i.ibb.co/bM5YrcT2/logored.png"
          alt="Logo"
          className="w-28 md:w-46 -ml-5"
        />
      </div>

      <nav className="flex-1 space-y-2 rounded-md">
        <NavLink
          to="/dashboard/instructor"
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
          to="/dashboard/instructor/subjects"
          className={({ isActive }) =>
            `w-full flex items-center px-4 py-3.5 text-sm font-medium transition-all duration-300 hover:cursor-pointer ${
              isActive
                ? "bg-[#E2343C] text-white"
                : "text-gray-500 hover:bg-white hover:text-[#E2343C] hover:shadow-md hover:shadow-gray-100"
            }`
          }
        >
          <Book size={20} />
          <span className="ml-4">My Subjects</span>
        </NavLink>

        <NavLink
          to="/dashboard/instructor/students"
          className={({ isActive }) =>
            `w-full flex items-center px-4 py-3.5 text-sm font-medium transition-all duration-300 hover:cursor-pointer ${
              isActive
                ? "bg-[#E2343C] text-white"
                : "text-gray-500 hover:bg-white hover:text-[#E2343C] hover:shadow-md hover:shadow-gray-100"
            }`
          }
        >
          <Users size={20} />
          <span className="ml-4">My Students</span>
        </NavLink>
        <NavLink
          to="/dashboard/instructor/activity"
          className={({ isActive }) =>
            `w-full flex items-center px-4 py-3.5 text-sm font-medium transition-all duration-300 hover:cursor-pointer ${
              isActive
                ? "bg-[#E2343C] text-white"
                : "text-gray-500 hover:bg-white hover:text-[#E2343C] hover:shadow-md hover:shadow-gray-100"
            }`
          }
        >
          <Clock size={20} />
          <span className="ml-4">Recent Activity</span>
        </NavLink>

        <NavLink
          to="/dashboard/instructor/settings"
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
        className="flex justify-self-end gap-2 mt-6 px-4 text-xs font-semibold text-gray-400 hover:text-[#E2343C] transition-colors hover:cursor-pointer w-25"
      >
        <LogOut size={14} /> Log out
      </button>
    </aside>
  );
};

export default InstructorSidebar;