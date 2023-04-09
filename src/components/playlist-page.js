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
    
    let firstSongDisplayedIDX = 0;

    useEffect(() => {
        dispatcher(setAccessToken(access_token));
        dispatcher(getPlaylistIMGThunk(plistID));
        dispatcher(setSongs([]))
        dispatcher(setCurrentPlaylist(plistID));
        dispatcher(setLoadingMetrics(true));
        dispatcher(getBoundedVariablesThunk(plistID));
    }, [plistID])
    
    if (playerState.nextTracks !== undefined && playerState.nextTracks.length > 0) {
        let trackID = playerState.nextTracks[0].id
            for (let i = 0; i < songs.length; i++) {
                if (songs[i].id === trackID) {
                    firstSongDisplayedIDX = i
                }
            }
        }

    return (
        <>
        <h1 className="fg-green">
        <img className="playlist-img" src={playlistIMG}></img>
        <ul>
            {songs.slice(firstSongDisplayedIDX-1,firstSongDisplayedIDX+15).map((track) => <li>{track.name}</li>)}
        </ul>
        <Sliders/>
        <WebPlayback/>
        </h1>
        </>
    );
}
export default PlaylistPage;
