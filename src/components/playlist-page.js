import { useEffect, useLayoutEffect } from "react";
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
    
    const {playerState, loadingMetrics, playlistIMG, currentPlaylist, currentPlaylistIMG, loadingSongs, accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
    const {plistID} = useParams()
    const dispatcher = useDispatch()
    const location = useLocation().pathname;
    const access_start = location.indexOf('access_token')
    const access_token = location.substring(access_start + 'access_token='.length);
    let firstSongDisplayedIDX = 0;

    useEffect(() => {
        dispatcher(setAccessToken(access_token));
        dispatcher(getPlaylistIMGThunk(plistID));
        dispatcher(setSongs([]))
        dispatcher(setCurrentPlaylist(plistID));
        dispatcher(setLoadingMetrics(true));
        dispatcher(getBoundedVariablesThunk(plistID));
    }, [plistID])

    
    useLayoutEffect(() => {
    if (playerState.nextTracks !== undefined && playerState.nextTracks.length > 0) {
        let trackID = playerState.nextTracks[0].id
            for (let i = 0; i < songs.length; i++) {
                if (songs[i].id === trackID) {
                    firstSongDisplayedIDX = i
                }
            }
        }
    })
    
    return (
        <div>
        <div className="row">
            <div className="col-4"></div>
            {playlistIMG !== '' && <img className="playlist-img-big col-4" src={playlistIMG}></img>}
            <div className="col-4"></div>
        </div>
        <ul className="list-group">
            {(songs.slice(firstSongDisplayedIDX,firstSongDisplayedIDX+5)).map((track) => <li className="list-group-item list-group-item-dark">
                {track.name}
                </li>)}
        </ul>
        <Sliders/>
        <WebPlayback/>
        </div>
    );
}
export default PlaylistPage;
