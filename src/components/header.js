import React from "react";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
    const {songs, sliders} = useSelector((store) => store.songInfoReducer);
    console.log("sliders are");
    console.log(sliders);
    return (
        <div>
            <h1>
                Curated Shuffle
            </h1>
            <h1>{sliders.acousticness}</h1>
            <h1>{sliders.danceability}</h1>
            <h1>{sliders.duration}</h1>
            <h1>{sliders.energy}</h1>
            <h1>{sliders.instrumentalness}</h1>
            <h1>{sliders.liveness}</h1>
            <h1>{sliders.loudness}</h1>
            <h1>{sliders.speechiness}</h1>
            <h1>{sliders.tempo}</h1>
            <h1>{sliders.valence}</h1>
        </div>
    );
}
export default HeaderComponent;
