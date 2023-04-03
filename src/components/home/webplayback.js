import SpotifyPlayer from "react-spotify-web-playback"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const WebPlayback = () => {

    const {currentPlaylist, loadingSongs, accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);

    const songUris = []
    for (let i = 0; i < songs.length && i < 774; i++) {
        songUris.push(songs[i].uri);
    }
    
    return (
        <>
        <SpotifyPlayer 
        styles={{
            activeColor: '#fff',
            bgColor: '#333',
            color: '#fff',
            loaderColor: '#fff',
            sliderColor: '#1cb954',
            trackArtistColor: '#ccc',
            trackNameColor: '#fff',
          }}
        token={accessToken}
        layout={'responsive'}
        play={true}
        uris={songUris}
        />
        </>
    );
}
export default WebPlayback;
