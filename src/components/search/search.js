import { useState } from "react";
import { searchSpotify } from "../../services/songservices";
import { Link } from "react-router-dom";
import Sliders from "../home/sliders";

const Search = () => {
    const [searchQuery, updateSearchQuery] = useState('')
    return (
        <div>
            <input value={searchQuery} onChange={(e) => updateSearchQuery(e.target.value)}></input>
            <button onClick={() => {
                searchSpotify(searchQuery);
            }}
            >Search</button>
        <button>Reload my playlists!</button>
        </div>
    );
}
export default Search;
