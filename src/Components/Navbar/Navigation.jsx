import { Icon } from "../icons"
import { useHistory} from 'react-router-dom'

const Navigation = () => {
    const history = useHistory()

  return (
    <nav className="flex items-center gap-x-4">
        <button onClick={() => history.goBack()} className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70">
            <Icon name='prevIcon' size={22}/>
        </button>
        <button onClick={() => history.goForward()} className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70">
            <Icon name='nextIcon' size={22}/>
        </button>
    </nav>
  )
}

export default Navigation