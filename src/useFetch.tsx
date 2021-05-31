import { useEffect, useState } from "react";
import { blog } from "./home";

const useFetch = (url: string) => {
    const [blogs, setBlogs]: [blog[] | any | undefined, React.Dispatch<React.SetStateAction<blog[] | any | undefined>>] = useState()
    const [isPending, setIsPending]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(true)
    const [error, setError] = useState(null);


    useEffect(() => {

        const abort = new AbortController()

        setTimeout(() => {            
            fetch(url, { signal: abort.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not load data for that response')
                    }
                    return res.json();
                })
                .then((data: blog[]) => {
                    setBlogs(data)
                    setIsPending(false)
                })
                .catch( err => {
                    if (err.name === 'AbortError') {
                        console.log(`Fetch Aborted`)
                    } else {
                        setIsPending(false);
                        setError(err.message)
                    }
                })
        }, 1000);

        return () => abort.abort();
    }, [url])

    return {isPending, error, blogs}
}

export default useFetch