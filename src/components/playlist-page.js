import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Sliders from "./home/sliders";
import { useSelector } from "react-redux";
import WebPlayback from "./home/webplayback";



const PlaylistPage = () => {
    
    const {currentPlaylist, loadingSongs, accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);

    
    useEffect(() => {

    }, [])
    
    return (
        <>
        <h1 className="fg-green">
        <h2>
            current playlist is {currentPlaylist}
        </h2>

        <ul>
            {songs.slice(0,15).map((track) => <li>{track.name}</li>)}
        </ul>
        <Sliders/>
        <WebPlayback/>
        </h1>
        </>
    );
}
export default PlaylistPage;
