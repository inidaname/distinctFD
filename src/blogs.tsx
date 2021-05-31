import { Link } from 'react-router-dom';
import {blog} from './home';

function Blogs ({blog}: {blog: blog[]}): JSX.Element {

    const blogs: blog[] = blog

    return(
        <div>
            {blogs.map((blog) => (
                <div key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Blogs