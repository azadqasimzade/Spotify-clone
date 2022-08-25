import { NavLink } from "react-router-dom"

const PodcastsItem = ({item}) => {
  return (
    <NavLink to='/collection/podcasts' className='bg-footer p-4 rounded-lg group hover:bg-active cursor-pointer'>
    <div className='relative pt-[100%] mb-4'>
      <img src={item.image} className='rounded absolute flex items-center shadow-musicShadow justify-center object-cover inset-0 h-full w-full bg-linkColor'/>
    </div>
    <h6 className='overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold'>{item.title}</h6>
    <p className='line-clamp-2 text-link text-sm mt-2 leading-relaxed'>{item.type}</p>
  </NavLink>
  )
}

export default PodcastsItem