import { NavLink } from "react-router";
import logo from "../assets/logo.jpg";

function Header() {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">

      <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 h-[70px]">

        {/* Logo */}

        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-lg font-semibold text-gray-900">
            BlogSpace
          </span>
        </div>


        {/* Navigation Links */}

        <ul className="flex items-center gap-8 text-sm font-medium">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-black border-b-2 border-black pb-1"
                  : "text-gray-600 hover:text-black transition"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="add-user"
              className={({ isActive }) =>
                isActive
                  ? "text-black border-b-2 border-black pb-1"
                  : "text-gray-600 hover:text-black transition"
              }
            >
              Add User
            </NavLink>
          </li>

          <li>
            <NavLink
              to="users-list"
              className={({ isActive }) =>
                isActive
                  ? "text-black border-b-2 border-black pb-1"
                  : "text-gray-600 hover:text-black transition"
              }
            >
              User List
            </NavLink>
          </li>

          <li>
            <NavLink
              to="user"
              className={({ isActive }) =>
                isActive
                  ? "text-black border-b-2 border-black pb-1"
                  : "text-gray-600 hover:text-black transition"
              }
            >
              User
            </NavLink>
          </li>

        </ul>

      </nav>
    </header>
  );
}

export default Header;