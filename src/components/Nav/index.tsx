import DarkModeBtn from "./DarkModeBtn";
import ScrollTop from "./ScrollTop";
import SearchBar from "./SearchBar";

const Nav = () => {
    return (
        <nav
            style={{
                ...style.nav,
                position: "sticky",
                top: "0px",
                zIndex: 999,
                backgroundColor: "var(--color-bg)",
                borderBottom: "5px solid red",
                transition: "background 250ms ease-in-out, transform 150ms ease",
                display: "flex",
            }}
        >
            <ScrollTop />
            <DarkModeBtn />
            <SearchBar />
        </nav>
    );
};

const style = { nav: { padding: "10px" } };

export default Nav;
