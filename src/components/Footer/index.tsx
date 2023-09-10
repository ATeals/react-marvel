const Footer = () => {
    return (
        <footer style={style.container}>
            <span> &copy; Ateals </span>
            <div> Vite React </div>
        </footer>
    );
};

export default Footer;

const style: any = {
    container: { color: "var(--color-text)", padding: "10px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" },
};
