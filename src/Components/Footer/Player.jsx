import { Icon } from "../icons"
import {useAudio} from 'react-use';
import { secondsToTime } from "../../utils";
import CustomRange from "../CustomRange";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setControls, setPlaying, setSidebar } from "../../stores/player";

const Player = () => {
    const dispatch = useDispatch()
    const { current, sidebar } = useSelector(state => state.player)

    const [audio, state, controls, ref] = useAudio({
        src: current?.src
    });

    useEffect(() =>{
        controls.play()
    },[current])

    useEffect(() =>{
        dispatch(setPlaying(state.playing))
    }, [state.playing])

    useEffect(() =>{
        dispatch(setControls(controls))
    }, [])

    const volumeIcon = useMemo(() =>{
        if(state.volume === 0 || state.muted) return 'volumeMuted'
        if(state.volume > 0 && state.volume < 0.33) return 'volumeLow'
        if(state.volume >= 0.33 && state.volume < 0.66) return 'volumeNormal'

        return 'volumeFull'

    }, [state.volume, state.muted])
    
  return (
    <div className="flex items-center justify-between h-full px-4">
        <div className="min-w-[11.25rem] w-[30%]">
            {
                current && (
                    <div className="flex items-center">
                        <div className="flex items-center mr-3">
                            {
                                !sidebar && (
                                    <div className="w-14 h-14 mr-4 flex-shrink-0 relative group">
                                        <img src={current.image} alt={current.title} />
                                        <button 
                                            onClick={() => dispatch(setSidebar(true))}
                                            className="flex items-center justify-center w-6 h-6 bg-black opacity-0 group-hover:opacity-80 hover:scale-[1.15] hover:!opacity-90 rounded-full absolute top-1 right-1">
                                            <Icon name='arrowTop' size={16}/>
                                        </button>
                                    </div>
                                )
                            }
                            <div>
                                <h6 className="text-sm line-clamp-1 hover:underline cursor-pointer">{current.title}</h6>
                                <p className="text-[0.688rem] text-white text-opacity-70 hover:underline hover:text-opacity-100 cursor-pointer">{current.artist}</p>
                            </div>
                        </div>
                        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100"><Icon size={16} name='heartIcon'/></button>
                        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100"><Icon size={16} name='pictureIn'/></button>
                    </div>
                )
            }
        </div>
        <div className="max-w-[45.125rem] w-[40%] flex flex-col items-center px-4 pt-4">
            <div className="flex items-center gap-x-4">
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100"><Icon size={16} name='shuffleIcon'/></button>
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100"><Icon size={16} name='playPrevIcon'/></button>
                <button onClick={controls[state?.playing ? 'pause' : 'play']} className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:scale-[1.06]"><Icon size={16} name={state?.playing ? 'pauseIcon' : 'playIcon'}/></button>
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100"><Icon size={16} name='playNextIcon'/></button>
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100"><Icon size={16} name='repeatIcon'/></button>
            </div>
            <div className="w-full flex items-center gap-x-2">
                {audio}
                <div className="text-[0.688rem] text-white text-opacity-70">
                    {secondsToTime(state?.time)}
                </div>
                <CustomRange 
                    step={0.1}
                    min={0}
                    max={state?.duration || 1}    
                    value={state?.time}
                    onChange={value => controls.seek(value)}
                />
                <div className="text-[0.688rem] text-white text-opacity-70">
                    {secondsToTime(state?.duration)}
                </div>
            </div>
        </div>
        <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100"><Icon size={16} name='lyricsIcon'/></button>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100"><Icon size={16} name='queueIcon'/></button>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100"><Icon size={16} name='deviceIcon'/></button>
            <button 
                onClick={controls[state.muted ? 'unmute' : 'mute']} className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100">
                <Icon size={16} name={volumeIcon}/>
            </button>
            <div className="w-[5.813rem] max-w-full">
                <CustomRange 
                    step={0.01}
                    min={0}
                    max={1}    
                    value={state.muted ? 0 : state?.volume}
                    onChange={value => {
                        controls.unmute()
                        controls.volume(value)
                    }}
                />
            </div>
        </div>
    </div>
  )
}

export default Player