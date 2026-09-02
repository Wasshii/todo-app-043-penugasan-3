"use client";

import { useSyncExternalStore, useCallback } from "react";

// 1. Fungsi subscribe untuk memantau perubahan pada localStorage
function subscribe(callback: () => void) {
    window.addEventListener("storage", callback);
    window.addEventListener("local-storage-update", callback);
    return () => {
        window.removeEventListener("storage", callback);
        window.removeEventListener("local-storage-update", callback);
    };
}

export function useLocalStorage<T>(key: string, initialValue: T) {
    // 2. Snapshot untuk sisi Client (Browser)
    const getSnapshot = (): string => {
        try {
            const item = window.localStorage.getItem(key);
            return item !== null ? item : JSON.stringify(initialValue);
        } catch {
            return JSON.stringify(initialValue);
        }
    };

    // 3. Snapshot untuk sisi Server (SSR Next.js)
    const getServerSnapshot = (): string => {
        return JSON.stringify(initialValue);
    };

    // 4. Sinkronisasi State menggunakan useSyncExternalStore
    const rawValue = useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot,
    );
    const storedValue: T = JSON.parse(rawValue);

    // 5. Fungsi Setter untuk mengubah nilai data secara aman
    const setValue = useCallback(
        (value: T | ((val: T) => T)) => {
            try {
                const item = window.localStorage.getItem(key);
                const current: T =
                    item !== null ? JSON.parse(item) : initialValue;
                const nextValue =
                    value instanceof Function ? value(current) : value;

                window.localStorage.setItem(key, JSON.stringify(nextValue));
                // Memicu event agar useSyncExternalStore mengetahui adanya perubahan
                window.dispatchEvent(new Event("local-storage-update"));
            } catch (error) {
                console.warn(
                    `Gagal menyimpan ke localStorage untuk key "${key}":`,
                    error,
                );
            }
        },
        [key, initialValue],
    );

    // 6. Mengembalikan State dan Fungsi Setter
    return [storedValue, setValue] as const;
}
