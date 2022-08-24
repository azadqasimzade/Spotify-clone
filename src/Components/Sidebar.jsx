import imgLogo from '../assets/logo.svg'
import { Icon } from './icons'
import DownloadApp from './Sidebar/DownloadApp'
import Menu from './Sidebar/Menu'
import PlayLists from './Sidebar/PlayLists'

const Sidebar = () =>{
  return (
    <aside className="w-60 pt-6 flex flex-col flex-shrink-0 bg-black">
      <a href="/" className='mb-7 px-6'>
        <img src={imgLogo} alt="spotify" className='h-10'/>
      </a>
      <Menu/>

      <nav className='mt-6'>
        <ul>
          <li>
            <a href="/" className='py-2 px-6 flex items-center text-sm text-link font-semibold group hover:text-white'>
              <span className='w-6 h-6 flex items-center justify-center mr-4 bg-white opacity-70 text-black rounded-sm transition-all group-hover:opacity-100'><Icon name='plusIcon' size={12}/></span>
              Create Playlist
            </a>
          </li>
          <li>
            <a href="/" className='py-2 px-6 flex items-center text-sm text-link font-semibold group hover:text-white'>
              <span className='w-6 h-6 flex items-center justify-center mr-4 opacity-70 text-white rounded-sm transition-all group-hover:opacity-100 bg-gradient-to-br from-purple-700 to-blue-200'><Icon name='heartIcon' size={12}/></span>
              Liked Songs
            </a>
          </li>
        </ul>
      </nav>
      <PlayLists/>
      <DownloadApp/>
    </aside>
  )
}

export default Sidebar