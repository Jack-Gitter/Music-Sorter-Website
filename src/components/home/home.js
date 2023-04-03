import { useParams, useSearchParams } from "react-router-dom";
import HeaderComponent from "./header";
import PlaylistSelector from "./playlist-selector";
import Sliders from "./sliders";
import axios from "axios";
import { useLocation } from "react-router-dom";
import CurrentSong from "./currentsong";
import { useEffect } from "react";
import { setAccessToken } from "../../state/reducers/songreducer";
import { setRefreshToken } from "../../state/reducers/songreducer";
import { useDispatch } from "react-redux";
import { getUserPlaylists } from "../../services/songservices";
import { updatePlaylists } from "../../state/reducers/songreducer";
import { setAccessTokenAPI } from "../../services/songservices";
import { getUserPlaylistsThunk } from "../../services/songthunks";
import WebPlayback from "./webplayback";

const Home = () => {

    const dispatcher = useDispatch();
    const location = useLocation().pathname;
    const access_start = location.indexOf('access_token')
    const access_end = location.indexOf('&');
    const access_token = location.substring(access_start + 'access_token='.length, access_end);
    const refresh_start = location.indexOf('refresh_token');
    const refresh_token = location.substring(refresh_start + 'refresh_token='.length, location.length);


    useEffect(() => {
        dispatcher(setAccessToken(access_token));
        dispatcher(setRefreshToken(refresh_token));
        dispatcher(getUserPlaylistsThunk());
    // also load songs here
    })


    return (
        <>
            <HeaderComponent/>
            <PlaylistSelector/>
            <Sliders/>
            <WebPlayback/>
        </>
    );
}
export default Home;
