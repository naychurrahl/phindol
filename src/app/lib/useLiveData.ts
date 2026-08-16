import { useEffect, useState } from "react";
import { ApiRequest, baseUrl } from "@/app/context/ApiRequest";

export interface LiveData<T> {
  data: T | null;
  loading: boolean;
}

// No fallback content -- this renders only what the backend actually
// returns. `data` is null while loading and stays null if the fetch
// fails; callers show a loading/empty state instead of stand-in content.
export function useLiveData<T>(path: string): LiveData<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setData(null);

    ApiRequest({ url: `${baseUrl}/${path}` })
      .then((result) => {
        if (!cancelled) setData(result as T);
      })
      .catch(() => {
        // Backend down/unreachable -- data stays null, no fallback to show.
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
