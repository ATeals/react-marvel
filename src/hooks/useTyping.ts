import { Dispatch, useEffect, useRef, useState } from "react";

const useTyping = (initialValue: string, handleEditComplete: () => void, delay: number = 400): [string, Dispatch<React.SetStateAction<string>>, boolean] => {
    const [typing, setTyping] = useState(initialValue);

    const isTyping = useRef(false);

    useEffect(() => {
        isTyping.current = true;

        const timer = setTimeout(() => {
            handleEditComplete();
            isTyping.current = false;
        }, delay);

        return () => {
            isTyping.current = false;
            clearTimeout(timer);
        };
    }, [typing]);

    return [typing, setTyping, isTyping.current];
};

export default useTyping;
