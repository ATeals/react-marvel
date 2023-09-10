import useQuery from "@/hooks/useQuery";
import { searchCharacter } from "@/util/api";
import { Character } from "@/util/type/Character";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SearchResult = ({ keyword }: { keyword: string }) => {
    const { data, loading } = useQuery("Search" + keyword, () => searchCharacter(keyword));

    useEffect(() => {
        console.log(keyword, data, loading);
    }, [keyword]);

    return (
        <div style={style.container}>
            {!loading ? ( //
                data.results.length !== 0 ? (
                    data?.results?.map(({ id, name }: Character) => (
                        <Link
                            key={id}
                            to={`character/${id}`}
                        >
                            <div style={style.text}>
                                {name} ({id})
                            </div>
                        </Link>
                    ))
                ) : (
                    <h1> Not Found</h1>
                )
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
};

const style = {
    text: { marginTop: "8px", fontSize: "18px" },
    container: { margin: "10px" },
};

export default SearchResult;
