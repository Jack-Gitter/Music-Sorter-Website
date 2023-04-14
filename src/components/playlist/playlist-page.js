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


const PlaylistPage = () => {
    
    const {plistID, plistName} = useParams()
    const {firstSongDisplayedIDX, playerState, loadingMetrics, playlistIMG, currentPlaylist, currentPlaylistIMG, loadingSongs, accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
    const dispatcher = useDispatch()
    const location = useLocation().pathname;
    const access_start = location.indexOf('access_token')
    const access_token = location.substring(access_start + 'access_token='.length);
    

    useEffect(() => {
        dispatcher(setAccessToken(access_token));
        dispatcher(getPlaylistIMGThunk(plistID));
        dispatcher(setSongs([]))
        dispatcher(setCurrentPlaylist(plistID));
        dispatcher(setLoadingMetrics(true));
        dispatcher(getBoundedVariablesThunk(plistID));
    }, [plistID])
    
    return (
        <div className="m-0 p-0">
        <div className="row position-relative m-0 p-0">
                {(playlistIMG !== 'none' && playlistIMG !== '') && <span className="position-absolute album-title-big m-0 p-0">{plistName}</span>}
                {(playlistIMG !== 'none' && playlistIMG !== '') && <img className="playlist-img-big m-0 p-0" src={playlistIMG}></img>}
        </div>
        <div className="row m-0 p-0">
            <ul cassName="list-group m-0 p-0">
                {songs.slice(firstSongDisplayedIDX,firstSongDisplayedIDX+5).map((track) => 
                    <li className="list-group-item list-group-item-dark m-0 p-0">
                        {track.name}
                    </li>
                )}
            </ul>
        </div>
        <div className="row">
            <Sliders/>
            <WebPlayback/>
        </div>
        </div>
    );
}
export default PlaylistPage;
