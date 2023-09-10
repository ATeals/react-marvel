import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header style={style.container as any}>
            <Link to={"/"}>
                <img
                    src="/images/logo.png"
                    alt="logo"
                    width={320}
                    height={128}
                />
            </Link>
        </header>
    );
};

export default Header;

const style = {
    container: { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "10px" },
};
