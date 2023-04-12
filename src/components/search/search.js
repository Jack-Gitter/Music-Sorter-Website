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
            <div className="col-6 pt-2">
                    <input type="text" className='ps-3 pt-1 pb-1 mb-2 form-control border border-secondary rounded-pill'value={searchQuery} onChange={(e) => updateSearchQuery(e.target.value)}></input>
            </div>
            <div className="col-4">
                <button className='btn btn-large btn-dark m-2' onClick={() => {dispatcher(searchSpotifyThunk(searchQuery));}}>Search</button>
                <button className='btn btn-large btn-dark m-2'onClick={() => {dispatcher(getUserPlaylistsThunk());}}>My Playlists</button>
            </div>
        </>
    );
}
export default Search;
