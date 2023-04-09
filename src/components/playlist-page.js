import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Sliders from "./home/sliders";
import { useSelector } from "react-redux";
import WebPlayback from "./home/webplayback";



const PlaylistPage = () => {
    
    const {currentPlaylist, loadingSongs, accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
    const {plistID} = useParams()
    
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