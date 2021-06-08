import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <main>
            <h2>Sorry</h2>
            <p>Page is not here</p>
            <Link to="/">go back</Link>
        </main>
    )
}

export default NotFound