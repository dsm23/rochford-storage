import type { FunctionComponent, PropsWithChildren } from "react";
import { Link, NavLink } from "react-router";

const Navbar: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <nav className="sticky top-0 bg-background/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
    <div className="mx-auto flex max-w-7xl flex-col px-12 py-6 sm:flex-row">
      <Link to="/" className="font-heading text-2xl font-bold tracking-tighter">
        Rochford Storage
      </Link>
      <div className="flex flex-col gap-6 sm:ml-auto sm:flex-row sm:items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-heading text-sm font-semibold tracking-tight uppercase ${isActive ? "text-green-800 underline underline-offset-4 dark:text-green-300" : "text-foreground/70 hover:text-foreground"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `font-heading text-sm font-semibold tracking-tight uppercase ${isActive ? "text-green-800 underline underline-offset-4 dark:text-green-300" : "text-foreground/70 hover:text-foreground"}`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            `font-heading text-sm font-semibold tracking-tight uppercase ${isActive ? "text-green-800 underline underline-offset-4 dark:text-green-300" : "text-foreground/70 hover:text-foreground"}`
          }
        >
          Gallery
        </NavLink>
        {children}
      </div>
    </div>
  </nav>
);

export default Navbar;
