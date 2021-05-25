import Blogs from "./blogs";
import { useState } from 'react';


export interface blog {
    title: string;
    body: string;
    author: string;
    id: number;
}


function Home(): JSX.Element {
    const [blogs, setBlogs]: [blog[], React.Dispatch<React.SetStateAction<blog[]>>] = useState([
        { title: 'Something', body: 'Yes this is something', author: 'You Know Who', id: 1 },
        { title: 'Another thing', body: 'Yes this is another thing', author: 'You Say Who', id: 2 },
        { title: 'More thing', body: 'Yes this is just more thing', author: 'Who say You', id: 3 }
    ])

    const handleDelete = (id: number) => {
        const newBlog = blogs.filter(blog => blog.id !== id);

        setBlogs(newBlog)
    }

    return (
        <main>
            <Blogs blog={blogs} handleDelete={handleDelete} />
        </main>
    )
}

export default Home;