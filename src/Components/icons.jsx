const HomeIcon = ({size}) =>{
    return(
        <svg role="img" height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"
            fill="currentColor"
            />
       </svg>
    )
}

const HomeIconActive = ({size}) =>{
    return(
        <svg role="img" height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"
            fill="currentColor"
            />
       </svg>
    )
}

const SearchIcon = ({size}) =>{
    return(
        <svg role="img" height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"
            fill="currentColor"/>
       </svg>
    )
}

const Collection = ({size}) =>{
    return(
        <svg role="img" height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"
            fill="currentColor"/>
       </svg>
    )
}

const PlusIcon = ({size}) =>{
    return(
        <svg role="img" height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"
            fill="currentColor"/>
       </svg>
    )
}
const DownloadIcon = ({size}) =>{
    return(
        <svg role="img" height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z" 
            fill="currentColor"/>
            <path d="M12 6.05a1 1 0 011 1v7.486l1.793-1.793a1 1 0 111.414 1.414L12 18.364l-4.207-4.207a1 1 0 111.414-1.414L11 14.536V7.05a1 1 0 011-1z"
            fill="currentColor"/>
            </svg>
    )
}
const HeartIcon = ({size}) =>{
    return(
        <svg role="img" height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"
            fill="currentColor"/>
       </svg>
    )
}

const PrevIcon = ({size}) =>{
    return(
        <svg role="img" height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"
            fill="currentColor"/>
       </svg>
    )
}

const NextIcon = ({size}) =>{
    return(
        <svg role="img" height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"
            fill="currentColor"/>
       </svg>
    )
}

const UserIcon = ({size}) =>{
    return(
        <svg role="img" height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M6.233.371a4.388 4.388 0 015.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 00.201 1.13l2.209 1.275a4.75 4.75 0 012.375 4.114V16H.382v-1.143a4.75 4.75 0 012.375-4.113l2.209-1.275a.75.75 0 00.201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 01.904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 00-2.13.937 2.85 2.85 0 00-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 01-.603 3.39l-2.209 1.275A3.25 3.25 0 001.902 14.5h12.196a3.25 3.25 0 00-1.605-2.457l-2.209-1.275a2.25 2.25 0 01-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 00-.588-1.022A2.888 2.888 0 008 1.5z"
            fill="currentColor"/>
       </svg>
    )
}

const DownDirIcon = ({size}) =>{
    return(
        <svg role="img" height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M14 6l-6 6-6-6h12z"
            fill="currentColor"/>
       </svg>
    )
}

const ExternalIcon = ({size}) =>{
    return(
        <svg role="img" height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M1 2.75A.75.75 0 011.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 01-.75.75H1.75a.75.75 0 01-.75-.75V2.75z"
            fill="currentColor"/>
            <path d="M15 1v4.993a.75.75 0 11-1.5 0V3.56L8.78 8.28a.75.75 0 01-1.06-1.06l4.72-4.72h-2.433a.75.75 0 010-1.5H15z"
            fill="currentColor"/>
       </svg>
    )
}

const PlayIcon = ({size}) =>{
    return(
        <svg role="img" height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"
            fill="currentColor"/>
       </svg>
    )
}



const Icon = ({name, size=24}) =>{
    const icons = {
        home: HomeIcon,
        homeActive: HomeIconActive,
        search: SearchIcon,
        collection: Collection,
        plusIcon: PlusIcon,
        heartIcon: HeartIcon,
        download: DownloadIcon,
        nextIcon: NextIcon,
        prevIcon: PrevIcon,
        userIcon: UserIcon,
        downDir: DownDirIcon,
        externalIcon: ExternalIcon,
        playIcon: PlayIcon
    }

    const Component = icons[name]
    return <Component size={size}/>
}

export {
    Icon
}