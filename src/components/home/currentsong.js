import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAccessToken } from "../../services/songservices";
import { getUserPlaylists } from "../../services/songservices";


const CurrentSong = () => {

    const {accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
    const dispatcher = useDispatch();


    return (
        <>
        <h1>Current song is {songs[0]}</h1>
        </>
    );
}
export default CurrentSong;
