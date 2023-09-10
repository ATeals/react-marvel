import { useParams } from "react-router-dom";

import CharacterDetail from "@/components/CharacterDetail";
import useQuery from "@/hooks/useQuery";

import { getCharacter } from "@/util/api";
import { Character } from "@/util/type/Character";

const Detail = () => {
    const { id } = useParams();

    const { data, loading } = useQuery("detail" + id || "", () => getCharacter(id || ""));

    const character: Character = data?.results[0];

    return (
        <main>
            {!loading ? ( //
                <>{character ? <CharacterDetail character={character} /> : <h1>Not Found</h1>} </>
            ) : (
                <h1 style={style}>loading....</h1>
            )}
        </main>
    );
};

const style: React.CSSProperties = { fontSize: "32px", margin: "20px", fontWeight: 600, textAlign: "center", width: "100%", color: "var(--color-text)" };

export default Detail;
