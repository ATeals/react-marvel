import CharacterDetail from "@/components/CharacterDetail";
import useQuery from "@/hooks/useQuery";

import { getCharacter } from "@/util/api";
import { Character } from "@/util/type/Character";
import { useParams } from "react-router-dom";

const Detail = () => {
    const { id } = useParams();

    const { data, loading } = useQuery("detail" + id || "", () => getCharacter(id || ""));

    const character: Character = data?.results[0];

    console.log("render", id);
    console.log(data);

    return (
        <main>
            {!loading ? ( //
                <>{character ? <CharacterDetail character={character} /> : <h1>Not Found</h1>} </>
            ) : (
                <h1 style={{ fontSize: "32px", margin: "20px", fontWeight: 600, textAlign: "center", width: "100%", color: "var(--color-text)" }}>loading....</h1>
            )}
        </main>
    );
};

export default Detail;
