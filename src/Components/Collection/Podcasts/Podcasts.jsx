import PodcastsItem from "./PodcastsItem"
import podcasts from "../../../data/podcasts"
import { Icon } from "../../icons"

const Podcasts = () => {
  return (
    <div>
        <h1 className="text-2xl font-semibold mb-5">Podcasts</h1>
        <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          <div className="w-[24.646rem] max-w-full h-[16.449rem] max-h-full sm:col-span-2 rounded-lg bg-gradient-to-br from-[#00644e] to-[#27856a]">
            <div className="flex flex-col p-5 h-full group relative">
              <div className="mb-2 flex items-end h-full">
                <span className="text-[2rem] font-bold tracking-tighter">Your Episodes</span>
              </div>
              <div>
                <span>0 episodes</span>
              </div>
              <div className="absolute bottom-2 right-2">
              <button className='ease-in-out duration-300 transition w-12 h-12 shadow-musicShadow rounded-full cursor-default bg-primary absolute bottom-2 right-2 flex group-hover:opacity-100 opacity-0 hover:scale-[1.06] group-hover:translate-y-0 translate-y-2 items-center justify-center text-black'>
                <Icon name='playIcon'/>
                </button>
              </div>
            </div>
          </div>
          {
            podcasts.map(item =>(
              <PodcastsItem item={item} key={item.id}/>
            ))
          }
        </div>
    </div>
  )
}

export default Podcasts