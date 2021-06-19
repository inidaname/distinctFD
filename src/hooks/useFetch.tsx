import { useEffect, useState } from "react";

const useFetch = () => {
  const url = `https://picsum.photos/v2/list?page=1&limit=20`;
  const [data, setData]: [
    any[] | undefined,
    React.Dispatch<React.SetStateAction<any[] | undefined>>
  ] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const abort = new AbortController();
    fetch(url, { signal: abort.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not load data for that response");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log(`Fetch Aborted`);
        } else {
          setError(err.message);
        }
      });

    return () => abort.abort();
  }, [url]);

  return { error, data };
};

export default useFetch;
