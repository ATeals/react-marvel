import { Character } from "@/util/type/Character";

import CharacterBox from "./CharacterBox";

const CharacterList = ({ characters }: { characters: Character[] }) => {
    return (
        <section style={style.container}>
            {characters.map((character: Character) => (
                <CharacterBox
                    key={character.id}
                    character={character}
                />
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
};

export default CharacterList;
