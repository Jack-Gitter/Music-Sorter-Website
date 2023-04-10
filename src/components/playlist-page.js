import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import Sliders from "./home/sliders";
import { useSelector } from "react-redux";
import WebPlayback from "./home/webplayback";
import { setCurrentPlaylist, setLoadingSongs } from "../state/reducers/songreducer";
import { setLoadingMetrics } from "../state/reducers/songreducer";
import { getBoundedVariablesThunk, getPlaylistIMGThunk } from "../services/songthunks";
import { setSongs } from "../state/reducers/songreducer";
import { useDispatch } from "react-redux";
import { setAccessToken } from "../state/reducers/songreducer";
import { useLocation } from "react-router-dom";
import { getPlaylist } from "../services/songservices";
import { useState } from "react";


const PlaylistPage = () => {
    
    const {plistID} = useParams()
    const {firstSongDisplayedIDX, playerState, loadingMetrics, playlistIMG, currentPlaylist, currentPlaylistIMG, loadingSongs, accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
    const dispatcher = useDispatch()
    const location = useLocation().pathname;
    const access_start = location.indexOf('access_token')
    const access_token = location.substring(access_start + 'access_token='.length);
    

    useMemo(() => {
        dispatcher(setAccessToken(access_token));
        dispatcher(getPlaylistIMGThunk(plistID));
        dispatcher(setSongs([]))
        dispatcher(setCurrentPlaylist(plistID));
        dispatcher(setLoadingMetrics(true));
        dispatcher(getBoundedVariablesThunk(plistID));
    }, [plistID])
    
    console.log(plistID)
    return (
        <div>
        <div className="row">
            <div className="col-4"></div>
            {playlistIMG !== 'none' && <img className="playlist-img-big col-4" src={playlistIMG}></img>}
            <div className="col-4"></div>
        </div>
        <ul cassName="list-group">
            {songs.slice(firstSongDisplayedIDX,firstSongDisplayedIDX+5).map((track) => <li className="list-group-item list-group-item-dark">
                {track.name}
                </li>)}
        </ul>
        <Sliders/>
        <WebPlayback/>
        </div>
    );
}
export default PlaylistPage;
