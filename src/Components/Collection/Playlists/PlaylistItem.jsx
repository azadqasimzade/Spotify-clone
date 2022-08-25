import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Icon } from '../../icons'
import { setCurrent } from '../../../stores/player'

const PlaylistItem = ({item}) => {

  const dispatch = useDispatch()
  const {current, playing, controls} = useSelector(state => state.player)

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
    <NavLink to='/collection/playlists' className='bg-footer p-4 rounded-lg group hover:bg-active cursor-pointer'>
      <div className='relative pt-[100%] mb-4'>
        <div className='rounded absolute flex items-center shadow-musicShadow justify-center object-cover inset-0 h-full w-full bg-linkColor'>
          <div className='opacity-70'>
            <Icon name='musicIcon' size={64}/>
          </div>
        </div>
        <button
          onClick={updateCurrent}
            className={`ease-in-out duration-300 transition w-12 h-12 shadow-musicShadow rounded-full cursor-default bg-primary absolute bottom-2 right-2 flex group-hover:opacity-100 opacity-0 hover:scale-[1.06] group-hover:translate-y-0 translate-y-2 items-center justify-center text-black ${!isCurrentItem ? 'opacity-0' : 'opacity-100 translate-y-0'}`}>
          <Icon name={isCurrentItem ? 'pauseIcon' : 'playIcon'}/>
        </button>
      </div>
      <h6 className='overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold'>{item.title}</h6>
      <p className='line-clamp-2 text-link text-sm mt-2 leading-relaxed'>{item.name}</p>
    </NavLink>
  )
}

export default PlaylistItem