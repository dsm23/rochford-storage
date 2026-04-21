import { Outlet } from "react-router";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import { ThemeProvider } from "~/components/theme-provider";
import { ThemeSwitcher } from "~/components/theme-switcher";

import "~/index.css";

const Layout = () => (
  <ThemeProvider>
    <header>
      <Navbar>
        <ThemeSwitcher />
      </Navbar>
    </header>
    <Outlet />
    <Footer />
  </ThemeProvider>
);

export default Layout;
