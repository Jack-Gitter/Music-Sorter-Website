import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Sliders from "./home/sliders";
import { useSelector } from "react-redux";
import WebPlayback from "./home/webplayback";
import { setCurrentPlaylist } from "../state/reducers/songreducer";
import { setLoadingMetrics } from "../state/reducers/songreducer";
import { getBoundedVariablesThunk, getPlaylistIMGThunk } from "../services/songthunks";
import { setSongs } from "../state/reducers/songreducer";
import { useDispatch } from "react-redux";
import { setAccessToken } from "../state/reducers/songreducer";
import { useLocation } from "react-router-dom";
import { getPlaylist } from "../services/songservices";
import { useState } from "react";



const PlaylistPage = () => {
    
    const {playerState, playlistIMG, currentPlaylist, currentPlaylistIMG, loadingSongs, accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
    const {plistID} = useParams()
    const dispatcher = useDispatch()
    const location = useLocation().pathname;
    const access_start = location.indexOf('access_token')
    const access_token = location.substring(access_start + 'access_token='.length);
    console.log("access token is: ")
    console.log(accessToken)
    
    const [firstSongDisplayedIDX, firstSongDisplayedIDXUpdater] = useState(0)

    useEffect(() => {
        dispatcher(setAccessToken(access_token));
        dispatcher(getPlaylistIMGThunk(plistID));
        dispatcher(setSongs([]))
        dispatcher(setCurrentPlaylist(plistID));
        dispatcher(setLoadingMetrics(true));
        dispatcher(getBoundedVariablesThunk(plistID));
        console.log(playerState)
        if (playerState.nextTracks !== undefined) {
        let trackID = playerState.nextTracks[0].id
            for (let i = 0; i < songs.length; i++) {
                if (songs[i].id === trackID) {
                    firstSongDisplayedIDXUpdater(i)
                    break
                }
            }
        }
    }, [plistID, playerState])
    
   console.log(firstSongDisplayedIDX) 
    return (
        <>
        <h1 className="fg-green">
        current playlist is {plistID}
        the displayed tracks can just be the nextTracks from the spotify web player nextTracks variable 
        we can get this from using the callback function and getting the state, updating a global state variable, and 
        refreshing the screen. After this is done, we are done!
        <img className="playlist-img" src={playlistIMG}></img>
        <ul>
        get the index of playerStatus.nextTracks[0].id in songs and then render from there
            {songs.slice(0,15).map((track) => <li>{track.name}</li>)}
        </ul>
        <Sliders/>
        <WebPlayback/>
        </h1>
        </>
    );
}
export default PlaylistPage;
