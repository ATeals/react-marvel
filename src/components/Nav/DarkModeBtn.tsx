import useDark from "@/hooks/useDark";

const DarkModeBtn = () => {
    const { mode, toggleMode } = useDark();

    return (
        <button
            onClick={toggleMode}
            style={style}
        >
            {mode === "dark" && <i className="bi bi-moon"></i>}
            {mode === "light" && <i className="bi bi-brightness-high"></i>}
        </button>
    );
};

const style: React.CSSProperties = { color: "#f0f0f0", fontSize: "24px", backgroundColor: "rgba(0,0,0,0.4)", borderRadius: "50%", width: "40px", height: "40px", margin: "0 10px" };

export default DarkModeBtn;
