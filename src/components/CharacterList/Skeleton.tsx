const Skeleton = () => {
    return (
        <section style={style.container}>
            {Array(15)
                .fill(0)
                .map((_, i) => (
                    <div
                        key={i}
                        style={style.box}
                    >
                        <div style={{ width: "100%", height: "400px", borderBottom: "4px solid red" }}></div>
                        <div style={{ fontSize: "24px", fontWeight: 600, height: "100%", padding: "5px" }}></div>
                    </div>
                ))}
        </section>
    );
};

const style = {
    container: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
        margin: "0 auto",
        padding: "10px 0",
    },
    box: {
        backgroundColor: "#151515",
        color: "#fff",
        textAlign: "center",
        borderTopRightRadius: "20%",
        borderBottomLeftRadius: "20%",
        overflow: "hidden",
        height: "100%",
    },
} as any;

export default Skeleton;
