import { Icon } from "../../icons"
import { NavLink } from 'react-router-dom'

const Artists = () => {
    return (
      <div className="flex flex-col gap-y-4 items-center justify-center mt-20">
          <Icon name='artistIcon' size={64}/>
          <h1 className="text-[2rem] font-bold mt-3 mb-2 tracking-tighter">Follow your first artist</h1>
          <span className="mb-8">Follow artists you like by tapping the follow button.</span>
          <NavLink to={'/collection/artists'} className='font-semibold rounded-3xl text-black bg-white py-3 px-9 tracking-wide'>Find artist</NavLink>
      </div>
    )
  }
  
  export default Artists