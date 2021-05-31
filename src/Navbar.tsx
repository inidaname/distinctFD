import { Link } from "react-router-dom"


function Navbar(): JSX.Element {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
            <Link to="/headlines">Headlines</Link>
        </nav>
    )
}

export default Navbar