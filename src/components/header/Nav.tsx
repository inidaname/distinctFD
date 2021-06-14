function Nav(): JSX.Element {
  return (
    <nav className="h-12 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 mt-5 w-5/6 mx-auto flex flex-row justify-between items-center">
      <div className="w-4/5">
        <span className="pr-5 pl-2">Home</span>
        <span className="pr-5 pl-2">Business</span>
        <span className="pr-5 pl-2">Sports</span>
        <span className="pr-5 pl-2">Politics</span>
        <span className="pr-5 pl-2">Entertainment</span>
        <span className="pr-5 pl-2">Others</span>
      </div>
    </nav>
  )
}

export default Nav