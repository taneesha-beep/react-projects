import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className="container mx-auto px-4 pt-6">
      <div className="flex items-center justify-between card px-4 py-3">
        <Link to="/" className="font-extrabold">
          Investos
        </Link>
        <nav className="flex gap-4 text-sm">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/quiz"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Quiz
          </NavLink>
          <NavLink
            to="/result"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Result
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
