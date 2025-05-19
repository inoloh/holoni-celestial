import { useEffect, useState } from "react";

export function useFetch<T, R = unknown>(
  url: string,
  transform?: (data: R) => T
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json() as Promise<R>;
      })
      .then((json) => {
        const result = transform ? transform(json) : (json as unknown as T);
        setData(result);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [transform, url]);

  return { data, loading, error };
}
