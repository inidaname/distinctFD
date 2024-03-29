import { useEffect, useState } from "react";

const useFetch = (url?: string) => {
  const getUrl = (!url) ? `https://picsum.photos/v2/list?page=1&limit=20` : url;
  console.log('fetch call')
  const [data, setData]: [
    any[] | undefined,
    React.Dispatch<React.SetStateAction<any[] | undefined>>
  ] = useState();
  const [error, setError] = useState(null);
  const [isPending, setIsPending]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(true)

  useEffect(() => {
    const abort = new AbortController();
    fetch(getUrl, { signal: abort.signal })
      .then((res) => {
        if (!res.status) {
          throw Error("Could not load data for that response");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setData(data.articles);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log(`Fetch Aborted`);
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => abort.abort();
  }, [getUrl]);

  return { isPending, error, data };
};

export default useFetch;
