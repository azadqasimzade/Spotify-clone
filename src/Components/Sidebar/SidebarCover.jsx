import { useSelector, useDispatch } from "react-redux"
import { setSidebar } from "../../stores/player"
import { Icon } from "../icons"

const SidebarCover = () => {
  const dispatch = useDispatch()

  const { current } = useSelector(state => state.player)

  return (
    <div className="pt-[100%] bg-black relative group">
      <img src={current.image} alt={current.title}  className='w-full h-full absolute object-cover top-0 left-0'/>
      <button 
          onClick={() => dispatch(setSidebar(false))}
          className="flex items-center justify-center w-6 h-6 bg-black opacity-0 rotate-180 group-hover:opacity-80 hover:scale-[1.15] hover:!opacity-90 rounded-full absolute top-1 right-1">
          <Icon name='arrowTop' size={16}/>
      </button>
    </div>
  )
}

export default SidebarCover