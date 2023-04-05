import { useState } from "react";
import { Link } from "react-router-dom";
import Sliders from "../home/sliders";
import { getUserPlaylistsThunk, searchSpotifyThunk } from "../../services/songthunks";
import { useDispatch } from "react-redux";

const Search = () => {
    const dispatcher = useDispatch();
    const [searchQuery, updateSearchQuery] = useState('')
    return (
        <div>
            <input value={searchQuery} onChange={(e) => updateSearchQuery(e.target.value)}></input>
            <button onClick={() => {
                dispatcher(searchSpotifyThunk(searchQuery));
            }}
            >Search</button>
        <button onClick={() => {
            dispatcher(getUserPlaylistsThunk());
        }}>Reload my playlists!</button>
        </div>
    );
}
export default Search;
