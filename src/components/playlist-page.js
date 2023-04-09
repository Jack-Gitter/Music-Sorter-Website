import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Sliders from "./home/sliders";
import { useSelector } from "react-redux";


const PlaylistPage = () => {
    
    const {currentPlaylist, loadingSongs, accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
    
    useEffect(() => {


    }, [])
    
    return (
        <>
        <h1 className="fg-green">
        <ul>
            {songs.map((track) => <li>{track.name}</li>)}
        </ul>
        <Sliders/>
        </h1>
        </>
    );
}
export default PlaylistPage;
