import { useState } from "react";
import { Link } from "react-router-dom";
import Sliders from "../home/sliders";
import { searchSpotifyThunk } from "../../services/songthunks";

const Search = () => {
    const [searchQuery, updateSearchQuery] = useState('')
    return (
        <div>
            <input value={searchQuery} onChange={(e) => updateSearchQuery(e.target.value)}></input>
            <button onClick={() => {
                searchSpotifyThunk(searchQuery);
            }}
            >Search</button>
        <button>Reload my playlists!</button>
        </div>
    );
}
export default Search;
