import { Outlet } from "react-router";
import { ThemeProvider } from "~/components/theme-provider";
import { ThemeSwitcher } from "~/components/theme-switcher";

import "~/index.css";

const Layout = () => (
  <ThemeProvider>
    <Outlet />
    <footer className="mx-auto flex w-full items-center justify-center border-t py-16 text-center text-xs">
      <ThemeSwitcher />
    </footer>
  </ThemeProvider>
);

export default Layout;
