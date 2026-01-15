import React, { useEffect, useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Settings,
  LogOut,
  GraduationCap,
  FileText,
  BarChart,
  Search,
  Bell,
  MessageSquare,
} from "lucide-react";

const MENU_ITEMS = {
  student: [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      label: "Courses",
      path: "/dashboard/courses",
      icon: <BookOpen size={20} />,
    },
    {
      label: "Chats",
      path: "/dashboard/chats",
      icon: <MessageSquare size={20} />,
    },
    {
      label: "Grades",
      path: "/dashboard/grades",
      icon: <BarChart size={20} />,
    },
    {
      label: "Schedule",
      path: "/dashboard/schedule",
      icon: <FileText size={20} />,
    },
    {
      label: "Settings",
      path: "/dashboard/settings",
      icon: <Settings size={20} />,
    },
  ],
  instructor: [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      label: "My Subjects",
      path: "/dashboard/subjectsInst",
      icon: <GraduationCap size={20} />,
    },
    {
      label: "My Students",
      path: "/dashboard/students",
      icon: <Users size={20} />,
    },
    {
      label: "Settings",
      path: "/dashboard/settings",
      icon: <Settings size={20} />,
    },
  ],
  admin: [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    { label: "Users", path: "/dashboard/users", icon: <Users size={20} /> },
    {
      label: "Analytics",
      path: "/dashboard/analytics",
      icon: <BarChart size={20} />,
    },
    {
      label: "Settings",
      path: "/dashboard/settings",
      icon: <Settings size={20} />,
    },
  ],
};

function Dashboard() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const [sessionId, setSessionId] = useState("");
  const [role, setRole] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const storedSessionId = localStorage.getItem("sessionId");
    const storedRole = localStorage.getItem("role");
    const storedUserId = localStorage.getItem("userId");

    if (!storedSessionId || !storedRole || !storedUserId) {
      clearAndRedirect();
      return;
    }
    verifySession(storedSessionId, storedRole, storedUserId);
  }, []);

  const verifySession = async (sessionId, role, userId) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/verify-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, role, userId }),
      });

      const data = await res.json();
      if (!res.ok || !data.valid) {
        clearAndRedirect();
        return;
      }

      setSessionId(sessionId);
      setRole(role);
      setUserId(userId);
      setLoading(false);
    } catch (error) {
      clearAndRedirect();
    }
  };

  const clearAndRedirect = () => {
    localStorage.removeItem("sessionId");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    navigate("/login", { replace: true });
  };
  const clearAndRedirectConfirm = () => {
    setShowPopup(true);
  };

  const confirmAction = () => {
    localStorage.removeItem("sessionId");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    navigate("/login", { replace: true });
  };

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-[#F5F5F7]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E2343C]"></div>
      </div>
    );
  }

  const currentMenus = MENU_ITEMS[role] || MENU_ITEMS["student"];

  return (
    <div
      className="flex h-screen w-full bg-white font-sans text-gray-800"
      style={{ fontFamily: "DM Sans, sans-serif" }}
    >
      {showPopup && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-xs bg-opacity-50 flex items-center justify-center transition-opacity"  onClick={() => setShowPopup(false)} >
          <div className="bg-white w-160 p-12" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-semibold mb-2">Confirm</h3>
            <p className="text-gray-600 mb-4">
              Are you sure you want to continue?
            </p>

            <div className="flex justify-end gap-3 mt-10">
              <button
                onClick={() => setShowPopup(false)}
                className="w-25 py-2 bg-gray-300 hover:bg-gray-400 transition ease-in-out duration-300 hover:cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={confirmAction}
                className="w-25 py-2 bg-red-600 text-white hover:bg-red-700 transition ease-in-out duration-300 hover:cursor-pointer"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      <aside className="w-72 bg-gray-50  flex flex-col pl-6 pr-4 py-8 overflow-y-auto hide-scrollbar">
        <div className="flex items-center gap-3 px-4 mb-10">
          <img
            src="https://i.ibb.co/bM5YrcT2/logored.png"
            alt="dd"
            className="w-28 md:w-46 -ml-5"
          />
        </div>

        <nav className="flex-1 space-y-2">
          {currentMenus.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center px-4 py-3.5 text-sm font-medium transition-all duration-300 hover:cursor-pointer ${
                  isActive
                    ? "bg-[#E2343C] text-white"
                    : "text-gray-500 hover:bg-white hover:text-[#E2343C] hover:shadow-md hover:shadow-gray-100"
                }`}
              >
                {item.icon}
                <span className="ml-4">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <button
          onClick={clearAndRedirectConfirm}
          className="flex items-center gap-2 mt-6 px-4 text-xs font-semibold text-gray-400 hover:text-[#E2343C] transition-colors hover:cursor-pointer"
        >
          <LogOut size={14} /> Log out
        </button>
      </aside>

      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="h-20 flex items-center justify-between px-10 py-4">
          <h1 className="text-3xl font-bold text-gray-800">
            {currentMenus.find((m) => m.path === location.pathname)?.label ||
              "Dashboard"}
          </h1>

          <div className="flex items-center gap-6">
            

            <button className="h-11 w-11 bg-white rounded-2xl flex items-center justify-center text-gray-500 hover:text-[#E2343C] shadow-sm hover:shadow-md transition-all relative">
              <Bell size={20} />
              <span className="absolute top-3 right-3 h-2 w-2 bg-[#E2343C] rounded-full border border-white"></span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-auto px-10 pb-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
