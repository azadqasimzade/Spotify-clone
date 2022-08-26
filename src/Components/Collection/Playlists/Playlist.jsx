import playlists from "../../../data/playlists"
import { Icon } from "../../icons"
import PlaylistItem from "./PlaylistItem"

const Playlist = () => {
  return (
    <div>
        <h1 className="text-2xl font-semibold mb-5">Playlists</h1>
        <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          <div className="w-[24.646rem] max-w-full h-[16.449rem] max-h-full sm:col-span-2 rounded-lg bg-gradient-to-br from-[#450af5] to-[#8e8ee5]">
            <div className="flex flex-col p-5 h-full group relative">
              <div className="flex items-end h-full mb-7">
                <span>Dzharo & Khanza MOON</span>
              </div>
              <div className="mb-2">
                <span className="text-[2rem] font-bold tracking-tighter">Liked Songs</span>
              </div>
              <div>
                <span>1 liked songs</span>
              </div>
              <div className="absolute bottom-2 right-2">
              <button className='ease-in-out duration-300 transition w-12 h-12 shadow-musicShadow rounded-full cursor-default bg-primary absolute bottom-2 right-2 flex group-hover:opacity-100 opacity-0 hover:scale-[1.06] group-hover:translate-y-0 translate-y-2 items-center justify-center text-black'>
                <Icon name='playIcon'/>
                </button>
              </div>
            </div>
          </div>
          {
            playlists.map(item =>(
              <PlaylistItem item={item} key={item.id}/>
            ))
          }
        </div>
    </div>
  )
}

export default Playlist