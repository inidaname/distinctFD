import { NavLink } from "react-router-dom"

function Nav(): JSX.Element {
  return (
    <nav className="h-12 text-white bg-gradient-to-r from-gray-700 via-gray-700 to-gray-700 mt-5 w-5/6 mx-auto flex flex-row justify-between items-center">
      <div className="w-4/5">
        <NavLink activeClassName="bg-red-700" exact to="/" className="mr-1 pr-5 pl-2 py-3.5 hover:bg-red-500">Home</NavLink>
        <NavLink activeClassName="bg-red-700" exact to="/business" className="mx-1 pr-5 pl-2 py-3.5 hover:bg-red-500">Business</NavLink>
        <NavLink activeClassName="bg-red-700" exact to="/sports" className="mx-1 pr-5 pl-2 py-3.5 hover:bg-red-500">Sports</NavLink>
        <NavLink activeClassName="bg-red-700" exact to="/politics" className="mx-1 pr-5 pl-2 py-3.5 hover:bg-red-500">Politics</NavLink>
        <NavLink activeClassName="bg-red-700" exact to="/entertainments" className="mx-1 pr-5 pl-2 py-3.5 hover:bg-red-500">Entertainments</NavLink>
        <NavLink activeClassName="bg-red-700" exact to="news" className="mx-1 pr-5 pl-2 py-3.5 hover:bg-red-500">Others</NavLink>
      </div>
      <div className="w-1/5">
        Search
      </div>
    </nav>
  )
}

export default Nav