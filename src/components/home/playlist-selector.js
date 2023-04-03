import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoundedVariablesThunk, getTracksFromPlaylistThunk } from "../../services/songthunks";
import { setLoadingSongs } from "../../state/reducers/songreducer"; 
import { setCurrentPlaylist } from "../../state/reducers/songreducer";
import { setLoadingMetrics } from "../../state/reducers/songreducer";

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
        <>
        <select disabled={loadingSongs || loadingMetrics} onChange={(e) => {
                console.log(loadingSongs)
                let pid = getPlaylistID(e.target.value);
                if (pid != -1) {
                    dispatcher(setCurrentPlaylist(pid));
                    dispatcher(setLoadingMetrics(true));
                    dispatcher(getBoundedVariablesThunk(pid));
                } else {
                    dispatcher(setCurrentPlaylist(-1));
                }
                }
            }>
                <option defaultValue={true}>Please Select a Playlist</option>
                {playlists.map((plist, index) => <option key={index}>{plist.name}</option>)}
            </select> 
            {(loadingSongs || loadingMetrics )&& <i className='fa fas fa-spinner fa-spin'></i>}
        </>
    );
}
export default PlaylistSelector;
