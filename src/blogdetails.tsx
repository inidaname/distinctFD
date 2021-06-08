import { useHistory, useParams } from "react-router-dom"
import useFetch from "./useFetch"

const BlogDetails = () => {
    const { blog } = useParams<any>()
    const {isPending, error, blogs} = useFetch(`http://localhost:3400/blogs/${blog}`)
    const history = useHistory()

    const handleClick = () => {
        fetch(`http://localhost:3400/blogs/${blog}`, {
            method: "DELETE"
        }).then(()=> {
            history.push('/')
        })
    }
    return (
        <div>
            { isPending && <div>Loading ...</div> }
            { error && <div>{ error }</div> }
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>{ blogs.body }</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails