import { useState } from "react"
import { useHistory } from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuhor] = useState('hassan')
    const [isPending, setIsPending] = useState(false);
    const history = useHistory()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const blog = {title, body, author};
        console.log(blog)

        setIsPending(true)

        fetch('http://localhost:3400/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log(`New blog added`)
            setIsPending(false)
            history.push('/')
        })
    }
    return (
        <main>
            <h2>Add new blog</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Blog Title</label>
                    <br />
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label> Blog content</label>
                    <br />
                    <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                </div>
                <div>
                    <label>Author</label>
                    <br />
                    <select value={author} onChange={(e) => setAuhor(e.target.value)}>
                        <option value="hassan">Hassan</option>
                        <option value="Saratu">Saratu</option>
                    </select>
                </div>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </main>
    )
}

export default Create