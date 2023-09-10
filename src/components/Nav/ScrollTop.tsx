const ScrollTop = () => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={handleClick}
            style={{ color: "#f0f0f0", fontSize: "24px", backgroundColor: "rgba(0,0,0,0.4)", borderRadius: "50%", width: "40px", height: "40px" }}
        >
            <i className="bi bi-arrow-up"></i>
        </button>
    );
};

export default ScrollTop;
