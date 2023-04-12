import { useState } from "react";
import { Link } from "react-router-dom";
import Sliders from "../home/sliders";
import { getUserPlaylistsThunk, searchSpotifyThunk } from "../../services/songthunks";
import { useDispatch } from "react-redux";

const Search = () => {
    const dispatcher = useDispatch();
    const [searchQuery, updateSearchQuery] = useState('')
    return (
        <>
            <div className="col-8 pt-2">
            <div class="input-group">
                 <input type="text" className='form-control'value={searchQuery} onChange={(e) => updateSearchQuery(e.target.value)}></input>
                <button type="button" class="btn btn-dark" onClick={() => {dispatcher(searchSpotifyThunk(searchQuery));}}>
                    <i class="fa fas fa-search"></i>
                </button>
            </div>
            </div>

            <div className="col-2">
                <button className='btn btn-large btn-dark m-2'onClick={() => {dispatcher(getUserPlaylistsThunk());}}>My Playlists</button>
            </div>
        </>
    );
}
export default Search;
