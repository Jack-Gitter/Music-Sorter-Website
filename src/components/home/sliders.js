import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { updateSliders } from "../../state/reducers/songreducer";
import { useDispatch } from "react-redux";

const Sliders = () => {

    const {accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
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
            <label>
                <input onChange={(e) => acousticnessUpdater(e.target.value)} type='range' min='1' max='100' value={acousticness}></input>
                acousticness
                {acousticness}
            </label>
            <br/>
            <label>
                <input onChange={(e) => danceabilityUpdater(e.target.value)} type='range' min='1' max='100' value={danceability}></input>
                danceability
                {danceability}
            </label>
            <br/>
            <label>
                <input onChange={(e) => durationUpdater(e.target.value)} type='range' min='1' max='100' value={duration}></input>
                duration
                {duration}
            </label>
            <br/>
            <label>
                <input onChange={(e) => energyUpdater(e.target.value)} type='range' min='1' max='100' value={energy}></input>
                energy
                {energy}
            </label>
            <br/>
            <label>
                <input onChange={(e) => instrumentalnessUpdater(e.target.value)} type='range' min='1' max='100' value={instrumentalness}></input>
                instrumentalness
                {instrumentalness}
            </label>
            <br/>
            <label>
                <input onChange={(e) => livenessUpdater(e.target.value)} type='range' min='1' max='100' value={liveness}></input>
                liveness
                {liveness}
            </label>
            <br/>
            <label>
                <input onChange={(e) => loudnessUpdater(e.target.value)} type='range' min='1' max='100' value={loudness}></input>
                loudness
                {loudness}
            </label>
            <br/>
            <label>
                <input onChange={(e) => speechinessUpdater(e.target.value)} type='range' min='1' max='100' value={speechiness}></input>
                speechiness
                {speechiness}
            </label>
            <br/>
            <label>
                <input onChange={(e) => tempoUpdater(e.target.value)} type='range' min='1' max='100' value={tempo}></input>
                tempo
                {tempo}
            </label>
            <br/>
            <label>
                <input onChange={(e) => valenceUpdater(e.target.value)} type='range' min='1' max='100' value={valence}></input>
                valence
                {valence}
            </label>
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
