import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section>
      <div className="flex justify-between">
        <h2 className="text-4xl font-bold">Amazon</h2>
        <nav className="flex gap-10 text-lg">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </nav>
      </div>
    </section>
  );
};

export default Header;
