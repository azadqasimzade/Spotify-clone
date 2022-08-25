import { useRouteMatch } from "react-router-dom"
import Albums from "../Collection/Albums/Albums"
import Artists from "../Collection/Artists/Artists"
import Playlist from "../Collection/Playlists/Playlist"
import Podcasts from "../Collection/Podcasts/Podcasts"

const Collection = () => {
  const playlistsRoute = useRouteMatch('/collection/playlists')
  const artistsRoute = useRouteMatch('/collection/artists')
  const podcastsRoute = useRouteMatch('/collection/podcasts')
  const albumsRoute = useRouteMatch('/collection/albums')

  return (
    <>
      {playlistsRoute && <Playlist/>}
      {podcastsRoute && <Podcasts/>}
      {artistsRoute && <Artists/>}
      {albumsRoute && <Albums/>}
    </>
  )
}

export default Collection