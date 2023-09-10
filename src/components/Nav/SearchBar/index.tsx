import { useState } from "react";

import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";

const SearchBar = () => {
    const [keyword, setKeyword] = useState("");

    return (
        <section style={style}>
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

const style = { width: "70%", color: "var(--color-text)" };

export default SearchBar;
