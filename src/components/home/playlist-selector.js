import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTracksFromPlaylistThunk } from "../../services/songthunks";
import { setLoadingSongs } from "../../state/reducers/songreducer"; 
import { setCurrentPlaylist } from "../../state/reducers/songreducer";

const PlaylistSelector = () => {

    const dispatcher = useDispatch();

    // eslint-disable-next-line
    const {currentPlaylist,loadingSongs, accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
    const getPlaylistID = (n) => {
        for (let i = 0; i < playlists.length; i++) {
            if (playlists[i].name === n) {
                return playlists[i].id;
            }
        } 
    }

    return (
        <>
        <select disabled={loadingSongs} onChange={(e) => {
                console.log(loadingSongs)
                let pid = getPlaylistID(e.target.value);
                dispatcher(setCurrentPlaylist(pid));
                }
            }>
                {playlists.map((plist, index) => <option disabled={loadingSongs}key={index}>{plist.name}</option>)}
            </select> 
        </>
    );
}
export default PlaylistSelector;
