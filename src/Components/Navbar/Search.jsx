import { useState } from "react"
import { Icon } from "../icons"

const Search = () => {
    const [search, setSearch] = useState('')

  return (
    <div className="mr-auto ml-4 relative">
        <label htmlFor="search-input" className="w-10 h-10 flex items-center justify-center absolute top-0 left-1 text-black">
            <Icon name='search' size={24}/>
        </label>
        <input autoFocus={true} id="search-input" type="text" value={search} onChange={e => setSearch(e.target.value)} className="w-[22.75rem] max-w-full h-10 px-12 outline-none font-semibold text-black rounded-3xl placeholder:text-black/70 text-sm tracking-wider" placeholder="What do you want to listen to?"/>
        {
            search && (
                <span onClick={() => setSearch('')} className="absolute top-2 right-2.5 text-black">
                    <Icon name='closeIcon' size={24}/>
                </span>
            )
        }
    </div>
  )
}

export default Search