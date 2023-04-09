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
        <div className="row">
        <div className="col-4 m-1">
            <label>
                <input disabled={!acousticnessEnabled} onChange={(e) => acousticnessUpdater(e.target.value)} type='range' min='0' max='100' value={acousticness}></input>
                <span className="fg-green p-1">acousticness</span>
                <span className="fg-green p-1">{acousticness}</span>
            </label>
                {acousticnessEnabled && <button className={'btn btn-success'} onClick={() => acousticnessStatus(false)}>Disable</button>}
                {!acousticnessEnabled && <button className={'btn btn-success'} onClick={() => acousticnessStatus(true)}>Enable</button>}
        </div>
        <div className="col-4 m-1">
            <label>
                <input disabled={!danceabilityEnabled} onChange={(e) => danceabilityUpdater(e.target.value)} type='range' min='0' max='100' value={danceability}></input>
                <span className="fg-green p-1">danceability</span>
                <span className="fg-green p-1">{danceability}</span>
            </label>
            {danceabilityEnabled && <button className={'btn btn-success'} onClick={() => danceabilityStatus(false)}>Disable</button>}
            {!danceabilityEnabled && <button className={'btn btn-success'} onClick={() => danceabilityStatus(true)}>Enable</button>}
        </div>
        <div className="col-4 m-1">
            <label>
                <input disabled={!durationEnabled}onChange={(e) => durationUpdater(e.target.value)} type='range' min='0' max='100' value={duration_ms}></input>
                <span className="fg-green p-1">duration</span>
                <span className="fg-green p-1">{duration_ms}</span>
            </label>
            {durationEnabled && <button className={'btn btn-success'} onClick={() => durationStatus(false)}>Disable</button>}
            {!durationEnabled && <button className={'btn btn-success'} onClick={() => durationStatus(true)}>Enable</button>}
        </div>
        <div className="col-4 m-1">
            <label>
                <input disabled={!energyEnabled} onChange={(e) => energyUpdater(e.target.value)} type='range' min='0' max='100' value={energy}></input>
                <span className="fg-green p-1">energy</span>
                <span className="fg-green p-1">{energy}</span>
            </label>
            {energyEnabled && <button className={'btn btn-success'} onClick={() => energyStatus(false)}>Disable</button>}
            {!energyEnabled && <button className={'btn btn-success'} onClick={() => energyStatus(true)}>Enable</button>}
        </div>
        <div className="col-4 m-1">
            <label>
                <input disabled={!instrumentalnessEnabled} onChange={(e) => instrumentalnessUpdater(e.target.value)} type='range' min='0' max='100' value={instrumentalness}></input>
                <span className="fg-green p-1">instrumentalness</span>
                <span className="fg-green p-1">{instrumentalness}</span>
            </label>
            {instrumentalnessEnabled && <button className={'btn btn-success'} onClick={() => instrumentalnessStatus(false)}>Disable</button>}
            {!instrumentalnessEnabled && <button className={'btn btn-success'} onClick={() => instrumentalnessStatus(true)}>Enable</button>}
        </div>
        <div className="col-4 m-1">
            <label>
                <input  disabled={!livenessEnabled} onChange={(e) => livenessUpdater(e.target.value)} type='range' min='0' max='100' value={liveness}></input>
                <span className="fg-green p-1">liveness</span>
                <span className="fg-green p-1">{liveness}</span>
            </label>
            {livenessEnabled && <button className={'btn btn-success'} onClick={() => livenessStatus(false)}>Disable</button>}
            {!livenessEnabled && <button className={'btn btn-success'} onClick={() => livenessStatus(true)}>Enable</button>}
        </div>
        <div className="col-4 m-1">
            <label>
                <input  disabled={!loudnessEnabled} onChange={(e) => loudnessUpdater(e.target.value)} type='range' min='0' max='100' value={loudness}></input>
                <span className="fg-green p-1">loudness</span>
                <span className="fg-green p-1">{loudness}</span>
            </label>
            { loudnessEnabled && <button className={'btn btn-success'} onClick={() => loudnessStatus(false)}>Disable</button>}
            {!loudnessEnabled && <button className={'btn btn-success'} onClick={() => loudnessStatus(true)}>Enable</button>}
        </div>
        <div className="col-4 m-1">
            <label>
                <input disabled={!speechinessEnabled} onChange={(e) => speechinessUpdater(e.target.value)} type='range' min='0' max='100' value={speechiness}></input>
                <span className="fg-green p-1">speechiness</span>
                <span className="fg-green p-1">{speechiness}</span>
            </label>
            {speechinessEnabled && <button className={'btn btn-success'} onClick={() => speechinessStatus(false)}>Disable</button>}
            {!speechinessEnabled && <button className={'btn btn-success'} onClick={() => speechinessStatus(true)}>Enable</button>}
        </div>
        <div className="col-4 m-1">
            <label>
                <input disabled={!tempoEnabled} onChange={(e) => tempoUpdater(e.target.value)} type='range' min='0' max='100' value={tempo}></input>
                <span className="fg-green p-1">tempo</span>
                <span className="fg-green p-1">{tempo}</span>
            </label>
            {tempoEnabled && <button className={'btn btn-success'} onClick={() => tempoStatus(false)}>Disable</button>}
            {!tempoEnabled && <button className={'btn btn-success'} onClick={() => tempoStatus(true)}>Enable</button>}
        </div>
        <div className="col-4 m-1">
            <label>
                <input disabled={!valenceEnabled} onChange={(e) => valenceUpdater(e.target.value)} type='range' min='0' max='100' value={valence}></input>
                <span className="fg-green p-1">valence</span>
                <span className="fg-green p-1">{valence}</span>
            </label>
            {valenceEnabled && <button className={'btn btn-success'} onClick={() => valenceStatus(false)}>Disable</button>}
            {!valenceEnabled && <button className={'btn btn-success'} onClick={() => valenceStatus(true)}>Enable</button>}
        </div>
            <button className={'btn btn-success'} disabled={loadingMetrics || loadingSongs || currentPlaylist == -1} onClick={() => { 
            dispatcher(updateSliders(
                {
                    acousticness: acousticness,
                    danceability: danceability,
                    duration_ms: duration_ms,
                    energy: energy,
                    instrumentalness: instrumentalness,
                    liveness: liveness,
                    loudness: loudness,
                    speechiness: speechiness,
                    tempo: tempo,
                    valence: valence
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
        } >Update</button>
        <Link to={'/'}><button className={'btn btn-success'}>Logout</button></Link>
        </div>
    );
}
export default Sliders;
