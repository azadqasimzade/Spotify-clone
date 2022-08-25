import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from "react-router-dom"
import { Icon } from "./icons"
import { setCurrent } from '../stores/player'

const SongItem = ({item}) => {

    const dispatch = useDispatch()
    const { current, playing, controls } = useSelector(state => state.player)

    const imageStyle = item =>{
        switch(item.type){
          case "artist":
            return "rounded-full"
    
          case "podcast":
            return "rounded-xl"
    
          default:
            return "rounded"
        }
    }

    const updateCurrent = () =>{
        if(current.id === item.id){
            if(playing){
                controls.pause()
            }else{
                controls.play()
            }
        }else{
            dispatch(setCurrent(item))
        }
    }

    const isCurrentItem = (current?.id ===  item.id && playing)
    
  return (
        <NavLink to='/' className='bg-footer p-4 rounded group hover:bg-active'>
            <div className='relative pt-[100%] mb-4'>
                <img src={item.image} alt={item.title} className={`rounded absolute object-cover inset-0 h-full w-full ${imageStyle(item)}`}/>
                <button 
                    onClick={updateCurrent}
                    className={`ease-in-out duration-300 transition  w-12 h-12 rounded-full bg-primary absolute bottom-2 right-2 flex group-hover:opacity-100 opacity-0 group-hover:translate-y-0 translate-y-2 items-center justify-center text-black ${!isCurrentItem ? 'opacity-0' : 'opacity-100 translate-y-0'}`}>
                <Icon name={isCurrentItem ? 'pauseIcon' : 'playIcon'}/>
                </button>
            </div>
            <h6 className='overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold'>{item.title}</h6>
            <p className='line-clamp-2 text-link text-sm mt-2 leading-relaxed'>{item.description}</p>
        </NavLink>
  )
}

export default SongItem