import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const DashboardResolver = () => {
  const [status, setStatus] = useState("loading");
  const [redirectPath, setRedirectPath] = useState(null);

  const sessionId = localStorage.getItem("sessionId");

  useEffect(() => {
    if (!sessionId) {
      setRedirectPath("/login");
      setStatus("done");
      return;
    }

    const resolveUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
          headers: {
            "x-session-id": sessionId,
          },
        });

        if (!res.ok) throw new Error("Unauthorized");

        const data = await res.json();
        const role = data.role;

        localStorage.setItem("role", role); // optional UI use

        if (role === "student") {
          setRedirectPath("/dashboard/student");
        } else if (role === "instructor") {
          setRedirectPath("/dashboard/instructor");
        } else if (role === "admin") {
          setRedirectPath("/dashboard/admin");
        } else {
          throw new Error("Invalid role");
        }
      } catch (err) {
        console.error("Resolve failed:", err);
        localStorage.clear();
        setRedirectPath("/login");
      } finally {
        setStatus("done");
      }
    };

    resolveUser();
  }, [sessionId]);

  if (status === "loading") {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-gray-500 text-sm">Loading dashboard...</p>
      </div>
    );
  }

  return <Navigate to={redirectPath} replace />;
};

export default DashboardResolver;
