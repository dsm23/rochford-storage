import { Outlet } from "react-router";
import Footer from "~/components/footer";
import { ThemeProvider } from "~/components/theme-provider";
import { ThemeSwitcher } from "~/components/theme-switcher";

import "~/index.css";

const Layout = () => (
  <ThemeProvider>
    <ThemeSwitcher />
    <Outlet />
    <Footer />
  </ThemeProvider>
);

export default Layout;
