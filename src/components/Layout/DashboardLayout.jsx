import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <div className="flex flex-col text-left space-y-2 mt-16 bg-amber-400 w-28 h-28">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/editprofile">Edit Profile</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default DashboardLayout;
