import { useEffect, useState } from "react";
import { ApiRequest, baseUrl } from "@/app/context/ApiRequest";

export interface LiveData<T> {
  data: T | null;
  loading: boolean;
}

const CACHE_PREFIX = "phindol_cache:";

function readCache<T>(path: string): T | null {
  try {
    const raw = localStorage.getItem(CACHE_PREFIX + path);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function writeCache<T>(path: string, data: T): void {
  try {
    localStorage.setItem(CACHE_PREFIX + path, JSON.stringify(data));
  } catch {
    // Storage full/disabled -- just skip caching, the live fetch still works.
  }
}

// Stale-while-revalidate: a cached response (if any) renders immediately
// with loading=false, while a fresh request always runs in the background
// and overwrites both the state and the cache once it resolves. This means
// repeat visits/reloads never flash empty -- they show last-known-good data
// instantly and reconcile silently. `data` starts genuinely null only on a
// browser's very first visit; it stays null if that first fetch fails, and
// callers show a loading/empty state instead of stand-in content.
export function useLiveData<T>(path: string): LiveData<T> {
  const [data, setData] = useState<T | null>(() => readCache<T>(path));
  const [loading, setLoading] = useState(data === null);

  useEffect(() => {
    let cancelled = false;
    const cached = readCache<T>(path);
    setData(cached);
    setLoading(cached === null);

    ApiRequest({ url: `${baseUrl}/${path}` })
      .then((result) => {
        if (cancelled) return;
        setData(result as T);
        writeCache(path, result);
      })
      .catch(() => {
        // Backend down/unreachable -- fall back to whatever's cached (if
        // anything); no other stand-in content.
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [path]);

  return { data, loading };
}
