function Nav(): JSX.Element {
  return (
    <nav className="h-12 text-white bg-gradient-to-r from-gray-700 via-gray-700 to-gray-700 mt-5 w-5/6 mx-auto flex flex-row justify-between items-center">
      <div className="w-4/5">
        <span className="pr-5 pl-2 py-3.5 hover:bg-red-500">Home</span>
        <span className="pr-5 pl-2 py-3.5 hover:bg-red-500">Business</span>
        <span className="pr-5 pl-2 py-3.5 hover:bg-red-500">Sports</span>
        <span className="pr-5 pl-2 py-3.5 hover:bg-red-500">Politics</span>
        <span className="pr-5 pl-2 py-3.5 hover:bg-red-500">Entertainment</span>
        <span className="pr-5 pl-2 py-3.5 hover:bg-red-500">Others</span>
      </div>
      <div className="w-1/5">
        Search
      </div>
    </nav>
  )
}

export default Nav