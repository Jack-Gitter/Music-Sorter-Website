import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import Sliders from "../home/sliders";
import { useSelector } from "react-redux";
import WebPlayback from "../home/webplayback";
import { setCurrentPlaylist, setLoadingSongs } from "../../state/reducers/songreducer";
import { setLoadingMetrics } from "../../state/reducers/songreducer";
import { getBoundedVariablesThunk, getPlaylistIMGThunk } from "../../services/songthunks";
import { setSongs } from "../../state/reducers/songreducer";
import { useDispatch } from "react-redux";
import { setAccessToken } from "../../state/reducers/songreducer";
import { useLocation } from "react-router-dom";
import { getPlaylist } from "../../services/songservices";
import { useState } from "react";
import Presets from "../home/presets";
export let promiseBoundedVars;


const PlaylistPage = () => {
    
    const {plistID, plistName} = useParams()
    const {firstSongDisplayedIDX, playerState, loadingMetrics, playlistIMG, currentPlaylist, currentPlaylistIMG, loadingSongs, accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
    const dispatcher = useDispatch()
    const location = useLocation().pathname;
    const access_start = location.indexOf('access_token')
    const access_token = location.substring(access_start + 'access_token='.length);
    
    const millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
      }
    

    useEffect(() => {
        dispatcher(setAccessToken(access_token));
        dispatcher(getPlaylistIMGThunk(plistID));
        if (currentPlaylist !== plistID) {
        dispatcher(setCurrentPlaylist(plistID));
        dispatcher(setSongs([]))
        dispatcher(setLoadingMetrics(true));
        promiseBoundedVars = dispatcher(getBoundedVariablesThunk(plistID));
        }
    }, [plistID])
    
    return (
        <div className="container-fluid">
            <div className="">
            <div className="row position-relative">
                    {(playlistIMG !== 'none' && playlistIMG !== '') && <span className="position-absolute album-title-big">{plistName}</span>}
                    {(playlistIMG !== 'none' && playlistIMG !== '') && <img className="playlist-img-big" src={playlistIMG}></img>}
            </div>
            <Presets/>
            <Sliders/>
            <div className="row m-2">
                <ul className="list-group m-2">
                    {songs.slice(firstSongDisplayedIDX).map((track) => 
                        <li className="next-songs list-group-item">
                            <img className={"q-image m-3"} src={track.album.images[0].url}></img>
                            {track.name} 
                            <span>&#8226;</span> 
                            {track.artists[0].name}
                            {millisToMinutesAndSeconds(track.duration_ms)}
                        </li>
                    )}
                </ul>
            </div>
            <WebPlayback/>
            </div>
        </div>
    );
}
export default PlaylistPage;
