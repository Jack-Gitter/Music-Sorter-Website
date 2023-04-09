import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Sliders from "./home/sliders";
import { useSelector } from "react-redux";
import WebPlayback from "./home/webplayback";
import { setCurrentPlaylist } from "../state/reducers/songreducer";
import { setLoadingMetrics } from "../state/reducers/songreducer";
import { getBoundedVariablesThunk } from "../services/songthunks";
import { setSongs } from "../state/reducers/songreducer";
import { useDispatch } from "react-redux";
import { setAccessToken } from "../state/reducers/songreducer";



const PlaylistPage = () => {
    
    const {currentPlaylist, loadingSongs, accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
    const {plistID} = useParams()
    const dispatcher = useDispatch()
    const location = useLocation().pathname;
    const access_start = location.indexOf('access_token')
    const access_end = location.indexOf('&');
    const access_token = location.substring(access_start + 'access_token='.length, access_end);
    
    useEffect(() => {
        dispatcher(setSongs([]))
        dispatcher(setAccessToken(access_token));
        dispatcher(setCurrentPlaylist(plistID));
        dispatcher(setLoadingMetrics(true));
        dispatcher(getBoundedVariablesThunk(plistID));
    }, [plistID])
    
    return (
        <>
        <h1 className="fg-green">
        current playlist is {plistID}
        the displayed tracks can just be the nextTracks from the spotify web player nextTracks variable 
        we can get this from using the callback function and getting the state, updating a global state variable, and 
        refreshing the screen. After this is done, we are done!
        <ul>
            {songs.slice(0,15).map((track) => <li>{track.name}</li>)}
        </ul>
        <Sliders/>
        <WebPlayback/>
        </h1>
        </>
    );
}
export default PlaylistPage;
