import { Link } from "react-router-dom";

import { Character } from "@/util/type/Character";

const CharacterBox = ({ character }: { character: Character }) => {
    return (
        <Link to={`/character/${character.id}`}>
            <div style={style.container}>
                <div style={style.imgBox}>
                    <img
                        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                        alt="tumbnail"
                        style={style.img}
                    />
                </div>

                <div style={style.name}>{character.name}</div>
            </div>
        </Link>
    );
};

const style: { [key: string]: React.CSSProperties } = {
    container: {
        backgroundColor: "#151515",
        color: "#fff",
        textAlign: "center",
        borderTopRightRadius: "20%",
        borderBottomLeftRadius: "20%",
        overflow: "hidden",
        height: "100%",
    },
    imgBox: { width: "100%", height: "400px", borderBottom: "4px solid red" },
    img: { objectFit: "cover", width: "100%", height: "100%" },
    name: { fontSize: "24px", fontWeight: 600, height: "100%", padding: "5px" },
};

export default CharacterBox;
