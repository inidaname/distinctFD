import {blog} from './home';

function Blogs ({blog, handleDelete}: {blog: blog[], handleDelete: Function}): JSX.Element {

    const blogs: blog[] = blog
    console.log(blog)

    return(
        <div>
            {blogs.map((blog) => (
                <div key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Blogs