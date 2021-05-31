import Blogs from "./blogs";
import useFetch from "./useFetch";


export interface blog {
    title: string;
    body: string;
    author: string;
    id: number;
}


function Home(): JSX.Element {
    const {isPending, error, blogs} = useFetch('http://localhost:3400/blogs')

    return (
        <main>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && <Blogs blog={blogs} />}
        </main>
    )
}

export default Home;