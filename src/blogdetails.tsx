import { useParams } from "react-router-dom"
import useFetch from "./useFetch"

const BlogDetails = () => {
    const { blog } = useParams<any>()
    const {isPending, error, blogs} = useFetch(`http://localhost:3400/blogs/${blog}`)
    return (
        <div>
            { isPending && <div>Loading ...</div> }
            { error && <div>{ error }</div> }
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>{ blogs.body }</p>
                </article>
            )}
        </div>
    )
}

export default BlogDetails