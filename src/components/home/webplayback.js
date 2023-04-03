import SpotifyPlayer from "react-spotify-web-playback"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const WebPlayback = () => {

    const {currentPlaylist, loadingSongs, accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);

    const songUris = []
    for (let i = 0; i < songs.length; i++) {
        songUris.push(songs[i].uri);
    }
    
    return (
        <>
        <SpotifyPlayer 
        token={accessToken}
        layout={'responsive'}
        play={true}
        uris={songUris}
        />
        </>
    );
}
export default WebPlayback;
