import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-white border-r p-4">
      <h2 className="font-bold text-xl mb-6">Admin</h2>

      <nav className="flex flex-col gap-3">
        <NavLink to="/dashboard/admin" end>Dashboard</NavLink>
        <NavLink to="/dashboard/admin/courses">Courses</NavLink>
        <NavLink to="/dashboard/admin/subjects">Subjects</NavLink>
        <NavLink to="/dashboard/admin/users">Users</NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
