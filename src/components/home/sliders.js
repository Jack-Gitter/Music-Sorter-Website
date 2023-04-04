import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { setLoadingSongs, updateSliders } from "../../state/reducers/songreducer";
import { useDispatch } from "react-redux";
import { getTracksFromPlaylist } from "../../services/songservices";
import { getBoundedVariablesThunk, getTracksFromPlaylistThunk } from "../../services/songthunks";
import { Slider, ThemeProvider } from "@mui/material";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";


const Sliders = () => {

    const {loadingMetrics, maxDuration, minDuration, maxTempo, minTempo, currentPlaylist, loadingSongs, accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
    const dispatcher = useDispatch();

    const [acousticness, acousticnessUpdater] = useState(sliders.acousticness);
    const [danceability, danceabilityUpdater] = useState(sliders.danceability);
    const [duration_ms, durationUpdater] = useState(sliders.duration_ms);
    const [energy, energyUpdater] = useState(sliders.energy);
    const [instrumentalness, instrumentalnessUpdater] = useState(sliders.instrumentalness);
    const [liveness, livenessUpdater] = useState(sliders.liveness);
    const [loudness, loudnessUpdater] = useState(sliders.loudness);
    const [speechiness, speechinessUpdater] = useState(sliders.speechiness);
    const [tempo, tempoUpdater] = useState(sliders.tempo);
    const [valence, valenceUpdater] = useState(sliders.valence);
    

    const [acousticnessEnabled, acousticnessStatus] = useState(true)
    const [danceabilityEnabled, danceabilityStatus] = useState(true)
    const [durationEnabled, durationStatus] = useState(true)
    const [energyEnabled, energyStatus] = useState(true)
    const [instrumentalnessEnabled, instrumentalnessStatus] = useState(true)
    const [livenessEnabled, livenessStatus] = useState(true)
    const [speechinessEnabled, speechinessStatus] = useState(true)
    const [tempoEnabled, tempoStatus] = useState(true)
    const [valenceEnabled, valenceStatus] = useState(true)
    const [loudnessEnabled, loudnessStatus] = useState(true)

    return (
        <div>
            <label>
                <input disabled={!acousticnessEnabled} onChange={(e) => acousticnessUpdater(e.target.value)} type='range' min='0' max='100' value={acousticness}></input>
                acousticness
                {acousticness}
            </label>
                {acousticnessEnabled && <button className={'btn btn-success'}onClick={() => acousticnessStatus(false)}>Disable</button>}
                {!acousticnessEnabled && <button className={'btn btn-secondary'}onClick={() => acousticnessStatus(true)}>Enable</button>}
            <br/>
            <label>
                <input disabled={!danceabilityEnabled} onChange={(e) => danceabilityUpdater(e.target.value)} type='range' min='0' max='100' value={danceability}></input>
                danceability
                {danceability}
            </label>
            {danceabilityEnabled && <button onClick={() => danceabilityStatus(false)}>Disable</button>}
            {!danceabilityEnabled && <button onClick={() => danceabilityStatus(true)}>Enable</button>}
            <br/>
            <label>
                <input disabled={!durationEnabled}onChange={(e) => durationUpdater(e.target.value)} type='range' min='0' max='100' value={duration_ms}></input>
                duration
                {duration_ms}
            </label>
            {durationEnabled && <button onClick={() => durationStatus(false)}>Disable</button>}
            {!durationEnabled && <button onClick={() => durationStatus(true)}>Enable</button>}
            <br/>
            <label>
                <input disabled={!energyEnabled} onChange={(e) => energyUpdater(e.target.value)} type='range' min='0' max='100' value={energy}></input>
                energy
                {energy}
            </label>
            {energyEnabled && <button onClick={() => energyStatus(false)}>Disable</button>}
            {!energyEnabled && <button onClick={() => energyStatus(true)}>Enable</button>}
            <br/>
            <label>
                <input disabled={!instrumentalnessEnabled} onChange={(e) => instrumentalnessUpdater(e.target.value)} type='range' min='0' max='100' value={instrumentalness}></input>
                instrumentalness
                {instrumentalness}
            </label>
            {instrumentalnessEnabled && <button onClick={() => instrumentalnessStatus(false)}>Disable</button>}
            {!instrumentalnessEnabled && <button onClick={() => instrumentalnessStatus(true)}>Enable</button>}
            <br/>
            <label>
                <input  disabled={!livenessEnabled} onChange={(e) => livenessUpdater(e.target.value)} type='range' min='0' max='100' value={liveness}></input>
                liveness
                {liveness}
            </label>
            {livenessEnabled && <button onClick={() => livenessStatus(false)}>Disable</button>}
            {!livenessEnabled && <button onClick={() => livenessStatus(true)}>Enable</button>}
            <br/>
            <label>
                <input  disabled={!loudnessEnabled} onChange={(e) => loudnessUpdater(e.target.value)} type='range' min='0' max='100' value={loudness}></input>
                loudness
                {loudness}
            </label>
            { loudnessEnabled && <button onClick={() => loudnessStatus(false)}>Disable</button>}
            {!loudnessEnabled && <button onClick={() => loudnessStatus(true)}>Enable</button>}
            <br/>
            <label>
                <input disabled={!speechinessEnabled} onChange={(e) => speechinessUpdater(e.target.value)} type='range' min='0' max='100' value={speechiness}></input>
                speechiness
                {speechiness}
            </label>
            {speechinessEnabled && <button onClick={() => speechinessStatus(false)}>Disable</button>}
            {!speechinessEnabled && <button onClick={() => speechinessStatus(true)}>Enable</button>}
            <br/>
            <label>
                <input disabled={!tempoEnabled} onChange={(e) => tempoUpdater(e.target.value)} type='range' min='0' max='100' value={tempo}></input>
                tempo
                {tempo}
            </label>
            {tempoEnabled && <button onClick={() => tempoStatus(false)}>Disable</button>}
            {!tempoEnabled && <button onClick={() => tempoStatus(true)}>Enable</button>}
            <br/>
            <label>
                <input disabled={!valenceEnabled} onChange={(e) => valenceUpdater(e.target.value)} type='range' min='0' max='100' value={valence}></input>
                valence
                {valence}
            </label>
            {valenceEnabled && <button onClick={() => valenceStatus(false)}>Disable</button>}
            {!valenceEnabled && <button onClick={() => valenceStatus(true)}>Enable</button>}
            <br/>
            <button disabled={loadingMetrics || loadingSongs || currentPlaylist == -1} onClick={() => { 
            dispatcher(updateSliders(
                {
                    acousticness: acousticness/100,
                    danceability: danceability/100,
                    duration_ms: duration_ms,
                    energy: energy/100,
                    instrumentalness: instrumentalness/100,
                    liveness: liveness/100,
                    loudness: loudness/100,
                    speechiness: speechiness/100,
                    tempo: tempo/100,
                    valence: valence/100,
                }
            ));
            dispatcher(setLoadingSongs(true));
                // when we are calling this, make sure to only include the metrics that are enabled on the website
            let slider_map = {}
            if (acousticnessEnabled) {
                slider_map.acousticness = acousticness/100
            }
            if (danceabilityEnabled) {
                slider_map.danceability = danceability/100
            }
            if (durationEnabled) {
                slider_map.duration_ms = ((duration_ms) / 100) * (maxDuration - minDuration) + minDuration
                console.log('duration is' + slider_map.duration_ms)
            }
            if (tempoEnabled) {
                slider_map.tempo = ((tempo) / 100) * (maxTempo - minTempo) + minTempo 
            }
            if (energyEnabled) {
                slider_map.energy = energy/100
            }
            if (loudnessEnabled) {
                slider_map.loudness = ((loudness) / 100) * 60 + -60
            }
            if (instrumentalnessEnabled) {
                slider_map.instrumentalness = instrumentalness/100
            }
            if (livenessEnabled) {
                slider_map.liveness = liveness/100
            }
            if (speechinessEnabled) {
                slider_map.speechiness = speechiness/100
            }
            if (valenceEnabled) {
                slider_map.valence = valence/100
            }
            dispatcher(getTracksFromPlaylistThunk({id: currentPlaylist, sliders: slider_map}));
            }
        } className='btn btn-primary'>Update</button>
        <Link to={'/'}><button>Logout</button></Link>
        </div>
    );
}
export default Sliders;
