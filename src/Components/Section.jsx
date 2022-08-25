import { NavLink } from 'react-router-dom'
import SongItem from './SongItem'
import Title from './Title/Title'

const Section = ({title, more = false, items}) => {
  
  return (
    <section>
            <header className="flex items-center justify-between mb-4">
              <Title title={title} more={more}/>
                {more && (
                    <NavLink to={more} className='text-xs font-semibold uppercase text-link hover:underline tracking-wider'>See All</NavLink>
                )}
            </header>
            <div className='grid grid-cols-6 gap-x-6'>
                {
                    items.map(item => <SongItem key={item.id} item={item}/>)
                }
            </div>
    </section>
  )
}

export default Section