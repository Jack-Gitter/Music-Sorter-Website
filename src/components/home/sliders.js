import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { updateSliders } from "../../state/reducers/songreducer";
import { useDispatch } from "react-redux";

const Sliders = () => {

    const {playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
    const dispatcher = useDispatch();

    const [acousticness, acousticnessUpdater] = useState(sliders.acousticness);
    const [danceability, danceabilityUpdater] = useState(sliders.danceability);
    const [duration, durationUpdater] = useState(sliders.duration);
    const [energy, energyUpdater] = useState(sliders.energy);
    const [instrumentalness, instrumentalnessUpdater] = useState(sliders.instrumentalness);
    const [liveness, livenessUpdater] = useState(sliders.liveness);
    const [loudness, loudnessUpdater] = useState(sliders.loudness);
    const [speechiness, speechinessUpdater] = useState(sliders.speechiness);
    const [tempo, tempoUpdater] = useState(sliders.tempo);
    const [valence, valenceUpdater] = useState(sliders.valence);

    return (
        <div>
            <input onChange={(e) => {acousticnessUpdater(e.target.value); console.log(e)}} type='range' min='1' max='100' value={acousticness}></input>
            <br/>
            <input onChange={(e) => danceabilityUpdater(e.target.value)} type='range' min='1' max='100' value={danceability}></input>
            <br/>
            <input onChange={(e) => durationUpdater(e.target.value)} type='range' min='1' max='100' value={duration}></input>
            <br/>
            <input onChange={(e) => energyUpdater(e.target.value)} type='range' min='1' max='100' value={energy}></input>
            <br/>
            <input onChange={(e) => instrumentalnessUpdater(e.target.value)} type='range' min='1' max='100' value={instrumentalness}></input>
            <br/>
            <input onChange={(e) => livenessUpdater(e.target.value)} type='range' min='1' max='100' value={liveness}></input>
            <br/>
            <input onChange={(e) => loudnessUpdater(e.target.value)} type='range' min='1' max='100' value={loudness}></input>
            <br/>
            <input onChange={(e) => speechinessUpdater(e.target.value)} type='range' min='1' max='100' value={speechiness}></input>
            <br/>
            <input onChange={(e) => tempoUpdater(e.target.value)} type='range' min='1' max='100' value={tempo}></input>
            <br/>
            <input onChange={(e) => valenceUpdater(e.target.value)} type='range' min='1' max='100' value={valence}></input>
            <br/>
            <button onClick={() => 
            dispatcher(updateSliders(
                {
                    acousticness,
                    danceability,
                    duration,
                    energy,
                    instrumentalness,
                    liveness,
                    loudness,
                    speechiness,
                    tempo,
                    valence,
                }
            )
        )} className='btn btn-primary'>Update</button>
        </div>
    );
}
export default Sliders;
