import { Icon } from "../icons"

const DownloadApp = () => {
  return (
    <a href="/" className="h-10 flex flex-shrink-0 items-center px-6 gap-x-4 text-link transition-colors text-sm font-semibold hover:text-white">
        <Icon name='download'/>
        Install App
    </a>
  )
}

export default DownloadApp