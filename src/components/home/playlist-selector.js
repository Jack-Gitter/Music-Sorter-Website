import React from "react";
import { useSelector } from "react-redux";
import { getTracksFromPlaylist } from "../../services/songservices";

const PlaylistSelector = () => {

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
        <select onChange={(e) => console.log(getTracksFromPlaylist(getPlaylistID(e.target.value)))}>
            {playlists.map((plist, index) => <option key={index}>{plist.name}</option>)}
        </select>
    );
}
export default PlaylistSelector;
