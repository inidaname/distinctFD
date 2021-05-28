import { useEffect, useState } from "react";
import { blog } from "./home";

const useFetch = (url: string) => {
    const [blogs, setBlogs]: [blog[] | undefined, React.Dispatch<React.SetStateAction<blog[] | undefined>>] = useState()
    const [isPending, setIsPending]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(true)
    const [error, setError] = useState(null);


    useEffect(() => {
        setTimeout(() => {            
            fetch(url)
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
                    setIsPending(false);
                    setError(err.message)
                })
        }, 1000);
    }, [url])

    return {isPending, error, blogs}
}

export default useFetch