import { Outlet } from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Nav from "./components/Nav";

function Layout() {
    return (
        <>
            <Header />
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
