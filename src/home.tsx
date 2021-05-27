import Blogs from "./blogs";
import { useEffect, useState } from 'react';


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

    const [name, setName] = useState('Hassan')

    const handleDelete = (id: number) => {
        const newBlog = blogs.filter(blog => blog.id !== id);

        setBlogs(newBlog)
    }

    useEffect(() => {
        console.log('blogs')
        console.log(name)
    }, [name])

    return (
        <main>
            <Blogs blog={blogs} handleDelete={handleDelete} />
            <button onClick={()  => setName('Baba')}>Change Name</button>
            <p>{name}</p>
        </main>
    )
}

export default Home;