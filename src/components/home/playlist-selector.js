import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const PlaylistSelector = () => {

    const {accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
    const dispatcher = useDispatch();

    return (
        <select>
            {playlists.map((plist) => <option>{plist.name}</option>)}
        </select>
    );
}
export default PlaylistSelector;
