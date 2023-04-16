import SpotifyPlayer from "react-spotify-web-playback"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPlayerState } from "../../state/reducers/songreducer";

const WebPlayback = () => {

    const dispatcher = useDispatch()
    const {currentPlaylist, loadingSongs, songUris, accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);

    /*
    const songUris = []
    for (let i = 0; i < songs.length && i < 774; i++) {
        songUris.push(songs[i].uri);
    }
    */

        useEffect(() => {
            console.log(songUris)
        })

    return (
        <>
        {songUris.length > 0 && <SpotifyPlayer 
        styles={{
            activeColor: '#fff',
            bgColor: '#333',
            color: '#fff',
            loaderColor: '#fff',
            sliderColor: '#1cb954',
            trackArtistColor: '#ccc',
            trackNameColor: '#fff',
            sliderHandleColor:'#ffff',
            errorColor:'#FF0000'
          }}
        token={accessToken}
        layout={'responsive'}
        play={false}
        uris={songUris}
        callback={(state) => { dispatcher(setPlayerState(state)) }}
        />}
        </>
    );
}
export default WebPlayback;
