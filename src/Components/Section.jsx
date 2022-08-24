import { NavLink } from 'react-router-dom'
import { Icon } from './icons'

const Section = ({title, more = false, items}) => {
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
  return (
    <section>
            <header className="flex items-center justify-between mb-4">
                <NavLink to={more ?? '/'} className='hover:underline'>
                  <h3 className="text-2xl text-white font-semibold tracking-tighter">{title}</h3>
                </NavLink>
                {more && (
                    <NavLink to={more} className='text-xs font-semibold uppercase text-link hover:underline tracking-wider'>See All</NavLink>
                )}
            </header>
            <div className='grid grid-cols-6 gap-x-6'>
                {
                    items.map(item =>(
                        <NavLink to='/' key={item.id} className='bg-footer p-4 rounded group hover:bg-active'>
                            <div className='relative pt-[100%] mb-4'>
                              <img src={item.image} alt={item.title} className={`rounded absolute object-cover inset-0 h-full w-full ${imageStyle(item)}`}/>
                              <button className='ease-in-out duration-300 transition  w-12 h-12 rounded-full bg-primary absolute bottom-2 right-2 flex group-hover:opacity-100 opacity-0 group-hover:translate-y-0 translate-y-2 items-center justify-center text-black'>
                                <Icon name='playIcon'/>
                              </button>
                            </div>
                            <h6 className='overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold'>{item.title}</h6>
                            <p className='line-clamp-2 text-link text-sm mt-2 leading-relaxed'>{item.description}</p>
                        </NavLink>
                    ))
                }
            </div>
    </section>
  )
}

export default Section