import { useCallback, useEffect, useState } from "react";

import useSessionStorage from "./useSessionStorage";

const useQuery = (key: string, fetchFn: () => Promise<Response>) => {
    const [cache, setCache] = useSessionStorage(key);
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<any>(null);

    const Map = JSON.parse(cache as string) || {};

    const fetching = useCallback(async () => {
        const { data, code } = await (await fetchFn()).json();

        if (code === 200) setData(data);

        try {
            setCache(JSON.stringify({ ...Map, [key]: data }));
        } catch (err) {
            console.log("Not enough storage.");
        }
        return setLoading(false);
    }, [key]);

    useEffect(() => {
        if (Map[key]) {
            setData(Map[key]);
            setLoading(false);
        } else {
            fetching();
        }

        return () => setLoading(true);
    }, [key]);

    return { data, loading };
};

export default useQuery;
