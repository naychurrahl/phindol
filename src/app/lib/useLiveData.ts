import { useEffect, useState } from "react";
import { ApiRequest, baseUrl } from "@/app/context/ApiRequest";

// Renders `fallback` immediately (so the page never has empty/blank
// content on first paint), then swaps in live data from the backend
// if it responds. If the backend is down, unreachable, or errors,
// the fetch just fails silently and the fallback stays in place --
// the page keeps working, it's just not live.
export function useLiveData<T>(path: string, fallback: T): T {
  const [data, setData] = useState<T>(fallback);

  useEffect(() => {
    let cancelled = false;

    ApiRequest({ url: `${baseUrl}/${path}` })
      .then((result) => {
        if (! cancelled) setData(result as T);
      })
      .catch(() => {
        // Backend down/unreachable -- keep showing the fallback.
      });

    return () => {
      cancelled = true;
    };
  }, [path]);

  return data;
}
