import React from "react";
import { Outlet } from "react-router-dom";
import InstructorSidebar from "../dashboard/Instructor/InstructorSidebar";

const InstructorLayout = () => {
  return (
    <div className="flex min-h-screen">
      <InstructorSidebar />
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default InstructorLayout;
