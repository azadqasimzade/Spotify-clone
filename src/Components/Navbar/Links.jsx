import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = () => {
  return (
    <div className='flex items-center gap-x-4 mr-auto ml-8'>
        <NavLink to={'/collection/playlists'} exact activeClassName='bg-linkColor' className='text-white py-2 px-4 rounded text-sm font-semibold'>Playlists</NavLink>
        <NavLink to={'/collection/podcasts'} activeClassName='bg-linkColor' className='text-white py-2 px-4 rounded text-sm font-semibold'>Podcasts</NavLink>
        <NavLink to={'/collection/artists'} activeClassName='bg-linkColor' className='text-white py-2 px-4 rounded text-sm font-semibold'>Artists</NavLink>
        <NavLink to={'/collection/albums'} activeClassName='bg-linkColor' className='text-white py-2 px-4 rounded text-sm font-semibold'>Albums</NavLink>
    </div>
  )
}

export default Links