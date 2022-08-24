const PlayLists = () => {
  return (
    <>
        <div className="mx-6 mt-2 border-t border-white border-opacity-10"></div>
        <div className="flex-auto overflow-auto">
            <nav className="mt-2">
                <ul>
                    {
                        new Array(40).fill(
                            <li className="px-6">
                                <a href="/" className="flex h-8 items-center cursor-default text-sm font-semibold text-link hover:text-white transition-colors">
                                    My Playlist
                                </a>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </div>
    </>
  )
}

export default PlayLists