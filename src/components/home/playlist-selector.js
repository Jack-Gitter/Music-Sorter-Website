import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoundedVariablesThunk, getTracksFromPlaylistThunk } from "../../services/songthunks";
import { setLoadingSongs } from "../../state/reducers/songreducer"; 
import { setCurrentPlaylist } from "../../state/reducers/songreducer";
import { setLoadingMetrics } from "../../state/reducers/songreducer";
import { Link } from "react-router-dom";

const PlaylistSelector = () => {

    const dispatcher = useDispatch();

    // eslint-disable-next-line
    const {loadingMetrics, currentPlaylist,loadingSongs, accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
    const getPlaylistID = (n) => {
        for (let i = 0; i < playlists.length; i++) {
            if (playlists[i].name === n) {
                return playlists[i].id;
            }
        } 
        return -1;
    }

    return (
        <div className="row">
        {console.log(playlists)}
        {(loadingSongs || loadingMetrics) && <i className='fa fas fa-spinner fa-spin'></i>}
        {playlists.map((plist, index) => 
            <div className="col-3">
            <Link to={`/playlist/${getPlaylistID(plist.name)}}`}><img className={`${plist.id === currentPlaylist ? 'border border-success border-5': ''} playlist-img`} 
                onClick={() => {
                    let pid = getPlaylistID(plist.name);
                    if (pid != -1) {
                        dispatcher(setCurrentPlaylist(pid));
                        dispatcher(setLoadingMetrics(true));
                        dispatcher(getBoundedVariablesThunk(pid));
                    } else {
                        dispatcher(setCurrentPlaylist(-1));
                    }
                }}
            src={plist.images[0].url}></img></Link>
            </div>
        )}
        </div>
    );
}
export default PlaylistSelector;
