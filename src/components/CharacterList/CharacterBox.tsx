import { Character } from "@/util/type/Character";
import { Link } from "react-router-dom";

const CharacterBox = ({ character }: { character: Character }) => {
    return (
        <Link to={`/character/${character.id}`}>
            <div style={style.box}>
                <div style={{ width: "100%", height: "400px", borderBottom: "4px solid red" }}>
                    <img
                        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                        alt="tumbnail"
                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                </div>

                <div style={{ fontSize: "24px", fontWeight: 600, height: "100%", padding: "5px" }}>{character.name}</div>
            </div>
        </Link>
    );
};

const style = {
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

export default CharacterBox;
