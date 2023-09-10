import { useState } from "react";

import useQuery from "@/hooks/useQuery";
import { getCharacterList } from "@/util/api";
import { CharacterList, Skeleton as SkCharacter } from "@/components/CharacterList";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const InfiniteCharacterList = ({ offset }: { offset: number }) => {
    const { data, loading } = useQuery("characterList" + offset, () => getCharacterList(offset));

    const [next, setNext] = useState(false);

    const { bottomItemRef } = useIntersectionObserver(() => setNext(true));

    return (
        <div>
            {!loading ? (
                <>
                    {data.results.length !== 0 && (
                        <>
                            <CharacterList characters={data.results} />
                            {next ? <InfiniteCharacterList offset={offset + 99} /> : <div ref={bottomItemRef}></div>}
                        </>
                    )}
                </>
            ) : (
                <SkCharacter />
            )}
        </div>
    );
};

export default InfiniteCharacterList;
