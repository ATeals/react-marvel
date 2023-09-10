import { useState } from "react";
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";

const SearchBar = () => {
    const [keyword, setKeyword] = useState("");

    return (
        <section style={{ width: "70%", color: "var(--color-text)" }}>
            <SearchInput setSearch={setKeyword} />
            {keyword !== "" && (
                <SearchResult
                    key={keyword}
                    keyword={keyword}
                />
            )}
        </section>
    );
};

export default SearchBar;
