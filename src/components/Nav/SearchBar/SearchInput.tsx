import { Dispatch, SetStateAction } from "react";

import useTyping from "@/hooks/useTyping";

const SearchInput = ({ setSearch }: { setSearch: Dispatch<SetStateAction<string>> }) => {
    const [typing, setTyping] = useTyping("", () => setSearch(typing));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTyping(e.target.value);
    };

    const handleBlur = () => {
        setTyping("");

        setTimeout(() => setSearch(""), 100);
    };

    return (
        <>
            <input
                type="text"
                value={typing}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Search Hero"
                style={style.input}
            />
        </>
    );
};

const style = {
    input: {
        color: "var(--color-text)",
        padding: " 0.75rem 4rem 0.75rem 0.75rem",
        width: "100%",
        border: "none",
        borderRadius: 0,
        backgroundColor: "transparent",
        boxShadow: " inset 0 0 0 2px black,inset 6px 6px 0 rgba(230, 37, 42, 0.2), 3px 3px 0 rgba(230, 37, 42, 0.2)",
    },
};

export default SearchInput;
