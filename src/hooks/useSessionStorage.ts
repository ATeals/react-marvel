import { useSyncExternalStore } from "react";

function useSessionStorage(key: string): [string | null, (value: string) => void] {
    const subscribe = (listener: () => void) => {
        window.addEventListener("storage", listener);
        return () => window.removeEventListener("storage", listener);
    };

    const getSnapShot = (): string | null => {
        return window.sessionStorage.getItem(key);
    };

    const setSessionStorage = (value: string): void => {
        window.sessionStorage.setItem(key, value);

        window.dispatchEvent(new StorageEvent("storage"));
    };

    return [useSyncExternalStore(subscribe, getSnapShot), setSessionStorage];
}

export default useSessionStorage;
