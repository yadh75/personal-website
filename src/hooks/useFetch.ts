"use client";

import { useState, useEffect } from "react";

import type { CustomHookReturn } from "@/typings";

export default function useFetch<T>(
    input: RequestInfo,
    init?: Omit<RequestInit, "signal">
): CustomHookReturn<T | null, string> {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        fetch(input, { signal: controller.signal, ...init })
            .then((response) => response.json())
            .then((d) => {
                setData(d);
                return d;
            })
            .catch((err) => {
                setError(err.toString());
                return null;
            })
            .finally(() => {
                setLoading(false);
            });

        return () => controller.abort();
    }, [init, input]);

    return [data, loading, error];
}
