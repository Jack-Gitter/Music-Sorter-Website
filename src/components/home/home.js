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
import { getUserPlaylistsThunk, searchSpotifyThunk } from "../../services/songthunks";
import { setPlaylistIMG } from "../../state/reducers/songreducer";
import { useSelector } from "react-redux";
import WebPlayback from "./webplayback";

const Home = () => {

    const dispatcher = useDispatch();
    const location = useLocation().pathname;
    const access_start = location.indexOf('access_token')
    const access_end = location.indexOf('&');
    const access_token = location.substring(access_start + 'access_token='.length, access_end);
    const refresh_start = location.indexOf('refresh_token');
    const refresh_token = location.substring(refresh_start + 'refresh_token='.length, location.length);

    const {loadingMetrics, currentPlaylist,loadingSongs, accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
    const {search} = useParams()

    useEffect(() => {
        dispatcher(setAccessToken(access_token));
        dispatcher(setRefreshToken(refresh_token));
        if (playlists.length < 1) {
            dispatcher(getUserPlaylistsThunk());
        }
        dispatcher(setPlaylistIMG('none'))
    })


    return (
        <div className="container">
        <div className="row">
            <div className="col">
                <HeaderComponent/>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <PlaylistSelector/>
            </div>
        </div>
        </div>
    );
}
export default Home;
