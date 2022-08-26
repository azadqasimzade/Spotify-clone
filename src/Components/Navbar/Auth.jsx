import { Menu } from '@headlessui/react'
import { Icon } from '../icons'

const Auth = () => {
    const user = {
        name: 'Azad Qasimzade',
        avatar: <Icon name='userIcon' size={16}/>
    }
    
  return (
    <Menu as='nav' className='relative'>
      {({open}) => (
        <>
            <Menu.Button className={`flex items-center h-8 rounded-3xl ${open ? 'bg-active' : 'bg-black'} lg:pr-2 hover:bg-active transition-colors ml-10`}>
            <div className='w-7 h-7 rounded-full p-px flex items-center justify-center bg-link opacity-80'>{user.avatar}</div>
            <div className='lg:flex hidden items-center ml-2'>
                <span className='text-sm font-semibold mr-2'>{user.name}</span>
                <span className={open ? 'rotate-180' : ''}>
                    <Icon name='downDir' size={16}/>
                </span>
            </div>
        </Menu.Button>
        <Menu.Items className={'absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2'}>
            <Menu.Item>
            {({ active }) => (
                <a
                className={`${active && 'bg-white bg-opacity-10'} h-10 flex items-center justify-between px-2 text-sm rounded-sm transition-colors`}
                href="/"
                >
                Account
                <span><Icon name='externalIcon' size={16}/></span>
                </a>
            )}
            </Menu.Item>
            <Menu.Item>
            {({ active }) => (
                <a
                className={`${active && 'bg-white bg-opacity-10'} h-10 flex items-center px-2 text-sm rounded-sm transition-colors`}
                href="/"
                >
                Profile
                </a>
            )}
            </Menu.Item>
            <Menu.Item>
            {({ active }) => (
                <a
                className={`${active && 'bg-white bg-opacity-10'} h-10 flex items-center justify-between px-2 text-sm rounded-sm transition-colors`}
                href="/"
                >
                Upgrade to Premium
                <span><Icon name='externalIcon' size={16}/></span>
                </a>
            )}
            </Menu.Item>
            <Menu.Item>
            {({ active }) => (
                <a
                className={`${active && 'bg-white bg-opacity-10'} h-10 flex items-center justify-between px-2 text-sm rounded-sm transition-colors`}
                href="/"
                >
                Support
                <span><Icon name='externalIcon' size={16}/></span>
                </a>
            )}
            </Menu.Item>
            <Menu.Item>
            {({ active }) => (
                <a
                className={`${active && 'bg-white bg-opacity-10'} h-10 flex items-center justify-between px-2 text-sm rounded-sm transition-colors`}
                href="/"
                >
                Download
                <span><Icon name='externalIcon' size={16}/></span>
                </a>
            )}
            </Menu.Item>
            <Menu.Item>
            {({ active }) => (
                <a
                className={`${active && 'bg-white bg-opacity-10'} h-10 flex items-center px-2 text-sm rounded-sm transition-colors border-b border-white border-opacity-10`}
                href="/"
                >
                Settings
                </a>
            )}
            </Menu.Item>
            <Menu.Item>
            {({ active }) => (
                <a
                className={`${active && 'bg-white bg-opacity-10'} h-10 flex items-center px-2 text-sm rounded-sm transition-colors`}
                href="/"
                >
                Log out
                </a>
            )}
            </Menu.Item>
        </Menu.Items>
        </>
      )}
    </Menu>
  )
}

export default Auth