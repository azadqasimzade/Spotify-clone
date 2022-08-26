import React from 'react'
import { Menu } from '@headlessui/react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import { Icon } from '../icons'

const Links = () => {
  const playlistsRoute = useRouteMatch('/collection/playlists')
  const podcastsRoute = useRouteMatch('/collection/podcasts')
  const artistsRoute = useRouteMatch('/collection/artists')
  const albumsRoute = useRouteMatch('/collection/albums')

  return (
    <>
      <div className='flex items-center gap-x-4 mr-auto ml-8'>
          <NavLink to={'/collection/playlists'} exact activeClassName='bg-linkColor' className='text-white py-2 px-4 rounded text-sm font-semibold'>Playlists</NavLink>
          <NavLink to={'/collection/podcasts'} activeClassName='bg-linkColor' className='text-white py-2 px-4 rounded text-sm font-semibold'>Podcasts</NavLink>
          <div className='md:flex hidden'>
            <NavLink to={'/collection/artists'} activeClassName='bg-linkColor' className='text-white py-2 px-4 rounded text-sm font-semibold'>Artists</NavLink>
            <NavLink to={'/collection/albums'} activeClassName='bg-linkColor' className='text-white py-2 px-4 rounded text-sm font-semibold'>Albums</NavLink>
          </div>
          <div className='md:hidden block'>
            <Menu as='nav' className='relative'>
            {({open}) => (
              <>
                  <Menu.Button className={`flex items-center h-8 rounded lg:pr-2 bg-linkColor transition-colors`}>
                  <div className='flex items-center mx-2'>
                  <div className='text-white py-2 px-4 rounded text-sm font-semibold'>{(playlistsRoute && 'Playlists') || (podcastsRoute && 'Podcasts') || (artistsRoute && 'Artists') || (albumsRoute && 'Albums')}</div>
                      <span className={open ? 'rotate-180' : ''}>
                          <Icon name='downDir' size={16}/>
                      </span>
                  </div>
              </Menu.Button>
              <Menu.Items className={'absolute p-1 top-full right-0 w-40 bg-active rounded translate-y-2'}>
                  <Menu.Item>
                  {({ active }) => (
                      <NavLink to={'/collection/artists'} activeClassName='bg-linkColor' className={`${active && 'bg-white bg-opacity-10'} h-10 flex items-center justify-between px-2 text-sm rounded-sm transition-colors`}>Artists</NavLink>
                  )}
                  </Menu.Item>
                  <Menu.Item>
                  {({ active }) => (
                    <NavLink to={'/collection/albums'} activeClassName='bg-linkColor' className={`${active && 'bg-white bg-opacity-10'} h-10 flex items-center justify-between px-2 text-sm rounded-sm transition-colors`}>Albums</NavLink>
                  )}
                  </Menu.Item>
              </Menu.Items>
              </>
            )}
            </Menu>
        </div>
      </div>
    </>
    
  )
}

export default Links