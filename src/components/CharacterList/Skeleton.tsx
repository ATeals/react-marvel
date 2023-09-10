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
                        <div style={style.imgBox}></div>
                        <div style={style.name}></div>
                    </div>
                ))}
        </section>
    );
};

const style: { [key: string]: React.CSSProperties } = {
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
    imgBox: { width: "100%", height: "400px", borderBottom: "4px solid red" },
    name: { fontSize: "24px", fontWeight: 600, height: "100%", padding: "5px" },
};

export default Skeleton;
