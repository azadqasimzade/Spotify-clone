import { NavLink } from "react-router-dom"
import { Icon } from "../../icons"

const Albums = () => {
  return (
    <div className="flex flex-col gap-y-4 items-center justify-center mt-20">
        <Icon name='albumIcon' size={52}/>
        <h1 className="text-[2rem] font-bold mt-3 mb-2 tracking-tighter">Follow your first album</h1>
        <span className="mb-8">Save albums by tapping the heart icon.</span>
        <NavLink to={'/collection/albums'} className='font-semibold rounded-3xl text-black bg-white py-3 px-9 tracking-wide'>Find albums</NavLink>
    </div>
  )
}

export default Albums