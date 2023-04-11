import { useState } from "react";
import { Link } from "react-router-dom";
import Sliders from "../home/sliders";
import { getUserPlaylistsThunk, searchSpotifyThunk } from "../../services/songthunks";
import { useDispatch } from "react-redux";

const Search = () => {
    const dispatcher = useDispatch();
    const [searchQuery, updateSearchQuery] = useState('')
    return (
        <div className="form-group">
            <input className='left-shift ps-3 pt-1 pb-1 mb-2 form-control border border-secondary rounded-pill'value={searchQuery} onChange={(e) => updateSearchQuery(e.target.value)}></input>
            <button className='btn btn-success ms-2' onClick={() => {
                dispatcher(searchSpotifyThunk(searchQuery));
                // update the URL and add the current search query to it
            }}
            >Search</button>
        <button className='btn btn-success ms-2'onClick={() => {
            dispatcher(getUserPlaylistsThunk());
        }}>Reload my playlists!</button>
        </div>
    );
}
export default Search;
