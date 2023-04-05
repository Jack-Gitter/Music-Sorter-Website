import { useState } from "react";
import { searchSpotify } from "../../services/songservices";
import { Link } from "react-router-dom";

const Search = () => {
    const [searchQuery, updateSearchQuery] = useState('')
    return (
        <div>
            <input value={searchQuery} onChange={(e) => updateSearchQuery(e.target.value)}></input>
            <button onClick={() => {
                searchSpotify(searchQuery);
            }}
            >Search</button>
            <Link to={'/home'}><button>Back</button></Link>
        </div>
    );
}
export default Search;
