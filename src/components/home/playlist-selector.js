import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTracksFromPlaylistThunk } from "../../services/songthunks";

const PlaylistSelector = () => {

    const dispatcher = useDispatch();
    // eslint-disable-next-line
    const {accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
    const getPlaylistID = (n) => {
        for (let i = 0; i < playlists.length; i++) {
            if (playlists[i].name === n) {
                return playlists[i].id;
            }
        } 
    }

    return (
        <select onChange={(e) => console.log(dispatcher(getTracksFromPlaylistThunk(getPlaylistID(e.target.value))))}>
            {playlists.map((plist, index) => <option key={index}>{plist.name}</option>)}
        </select>
    );
}
export default PlaylistSelector;
