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
export let promiseBoundedVars;


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
        promiseBoundedVars = dispatcher(getBoundedVariablesThunk(plistID));
    }, [plistID])
    
    return (
        <div className="container-fluid">
            <div className="">
            <div className="row position-relative">
                    <ul cassName="inline-block position-absolute next-songs">
                        {songs.slice(firstSongDisplayedIDX,firstSongDisplayedIDX+5).map((track) => 
                            <li className="inline-block">
                                {track.name}
                            </li>
                        )}
                    </ul>
                    {(playlistIMG !== 'none' && playlistIMG !== '') && <span className="position-absolute album-title-big">{plistName}</span>}
                    {(playlistIMG !== 'none' && playlistIMG !== '') && <img className="playlist-img-big" src={playlistIMG}></img>}
            </div>
            <div className="row">
                <ul cassName="list-group">
                    {songs.slice(firstSongDisplayedIDX,firstSongDisplayedIDX+5).map((track) => 
                        <li className="list-group-item list-group-item-dark">
                            {track.name}
                        </li>
                    )}
                </ul>
            </div>
            <Sliders/>
            <WebPlayback/>
            </div>
        </div>
    );
}
export default PlaylistPage;
