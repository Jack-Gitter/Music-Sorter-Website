import { useState } from "react";
import { Link } from "react-router-dom";
import Sliders from "../home/sliders";
import { getUserPlaylistsThunk, searchSpotifyThunk } from "../../services/songthunks";
import { useDispatch } from "react-redux";

const Search = () => {
    const dispatcher = useDispatch();
    const [searchQuery, updateSearchQuery] = useState('')
    return (
        <div className="input-group">
                <input type="text" className='ps-3 pt-1 pb-1 mb-2 form-control border border-secondary rounded-pill'value={searchQuery} onChange={(e) => updateSearchQuery(e.target.value)}></input>
                <div className="search-buttons">
                    <button className='btn btn-large btn-dark m-2' onClick={() => {dispatcher(searchSpotifyThunk(searchQuery));}}>Search</button>
                    <button className='btn btn-large btn-dark m-2'onClick={() => {dispatcher(getUserPlaylistsThunk());}}>Reload my playlists!</button>
                </div>
        </div>
    );
}
export default Search;
