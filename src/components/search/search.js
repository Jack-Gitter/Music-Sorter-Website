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
            <div className="col-7 col-md-5 col-5 mt-3">
            <div class="input-group">
                 <input type="text" 
                 onKeyDown={(e) =>{ if (e.key === 'Enter') {dispatcher(searchSpotifyThunk(searchQuery))}}}
                 className='form-control bg-awhite shadow-none'value={searchQuery} onChange={(e) => updateSearchQuery(e.target.value)}></input>
                <button type="button" className="btn btn-dark" onClick={() => {dispatcher(searchSpotifyThunk(searchQuery));}}>
                    <i class="fa fas fa-search"></i>
                </button>
            </div>
            </div>
            <div className="col-3 col-md-2 col-1 text-center">
                <button className='btn mt-3 mb-3 btn-dark'onClick={() => {dispatcher(getUserPlaylistsThunk());}}>My Playlists</button>
            </div>
            <div className="col-3 col-md-2 col-1 text-center">
                <Link to={'/'}><button className={'btn mt-3 btn-dark'}>Logout</button></Link>
            </div>
        </>
    );
}
export default Search;
