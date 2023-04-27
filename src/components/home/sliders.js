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
import { updateSliderEnabled } from "../../state/reducers/songreducer";
export let promise;

const Sliders = () => {

    const {sliderEnabled, loadingMetrics, maxDuration, minDuration, maxTempo, minTempo, currentPlaylist, loadingSongs, accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
    const dispatcher = useDispatch();

    return (
        <div className="row align-items-center justify-content-center ms-3 mt-4 me-3">
        <div className="col-sm-6 col-md-4 col-lg-3 m-2 p-2 slider-component-bg "> 
                <div className="row text-center">
                <span class="form-check form-switch">
                    <label for="acousticness-range">
                        <span className="slider-text-color me-2 ms-2 ">acousticness</span>
                        {sliderEnabled.acousticness && <span className="slider-text-color ">{sliders.acousticness}</span>}
                        <input onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, acousticness: !sliderEnabled.acousticness}))}  class="form-check-input " type="checkbox" role="switch" checked={sliderEnabled.acousticness}/>
                        <i class="m-2 fa fas fa-info-circle fg-white tt">
                            <span className="ttt">A confidence measure from 0 to 100 of whether the track is acoustic. 100 represents high confidence the track is acoustic</span>
                        </i>
                    </label>
                </span>
                </div>
                <div className="row if">
                    {sliderEnabled.acousticness && <input id="acousticness-range" className="form-range p-4" disabled={!sliderEnabled.acousticness} onChange={(e) => dispatcher(updateSliders({...sliders, acousticness: e.target.value}))} type='range' min='0' max='100' value={sliders.acousticness}></input>}
                </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-2 p-2 slider-component-bg">
            <div className="row text-center">
                <span class="form-check form-switch">
                <label for="danceability-range">
                        <input onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, danceability: !sliderEnabled.danceability}))}  class="form-check-input " type="checkbox" role="switch" checked={sliderEnabled.danceability}/>
                        <span className="slider-text-color me-2 ms-2 ">danceability</span>
                        {sliderEnabled.danceability && <span className="slider-text-color ">{sliders.danceability}</span>}
                        <i class="m-2 fa fas fa-info-circle fg-white tt">
                            <span className="ttt">Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0 is least danceable and 100 is most danceable.</span>
                        </i>
                </label>
                </span>
            </div>
            <div className="row if">
                {sliderEnabled.danceability && <input id="danceability-range" className="form-range p-4 " disabled={!sliderEnabled.danceability} onChange={(e) => dispatcher(updateSliders({...sliders, danceability: e.target.value}))} type='range' min='0' max='100' value={sliders.danceability}></input>}
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-2 p-2 slider-component-bg ">
            <div className="row text-center">
                <span class="form-check form-switch">
                <label for="duration-range">
                    <input onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, duration_ms: !sliderEnabled.duration_ms}))}  class="form-check-input " type="checkbox" role="switch" checked={sliderEnabled.duration_ms}/>
                    <span className="slider-text-color me-2 ms-2 ">duration</span>
                    {sliderEnabled.duration_ms && <span className="slider-text-color ">{sliders.duration_ms}</span>}
                        <i className="m-2 fa fas fa-info-circle fg-white tt">
                            <span className='ttt'>Represents the duration of tracks for a given playlist, where 100 is the longest track on the playlist and 0 is the shortest track on the playlist</span>
                        </i>
                </label>
                </span>
            </div> 
            <div className="row if">
                {sliderEnabled.duration_ms && <input id="duration-range" className="form-range p-4 " disabled={!sliderEnabled.duration_ms}onChange={(e) => dispatcher(updateSliders({...sliders, duration_ms: e.target.value}))} type='range' min='0' max='100' value={sliders.duration_ms}></input>}
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-2 p-2 slider-component-bg ">
            <div className="row text-center">
                <span class="form-check form-switch">
                <label for="energy-range">
                <span className="slider-text-color me-2 ms-2 ">energy</span>
                    {sliderEnabled.energy && <span className="slider-text-color ">{sliders.energy}</span>}
                    <input onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, energy: !sliderEnabled.energy}))}  class="form-check-input " type="checkbox" role="switch" checked={sliderEnabled.energy}/>
                        <i class="m-2 fa fas fa-info-circle fg-white tt">
                            <span className='ttt'>Energy is a measure from 0 to 100 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.</span>
                        </i>
                </label>
                </span>
            </div>
            <div className="row if">
                {sliderEnabled.energy && <input id="energy-range" className="form-range p-4"disabled={!sliderEnabled.energy} onChange={(e) => dispatcher(updateSliders({...sliders, energy: e.target.value}))} type='range' min='0' max='100' value={sliders.energy}></input>}
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-2 p-2 slider-component-bg ">
            <div className="row text-center">
            <span class="form-check form-switch">
            <label for="instrumental-range">
                <span className="slider-text-color me-2 ms-2 ms-2">instrumentalness</span>
                {sliderEnabled.instrumentalness && <span className="slider-text-color ">{sliders.instrumentalness}</span>}
                <input onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, instrumentalness: !sliderEnabled.instrumentalness}))}  class="form-check-input " type="checkbox" role="switch" checked={sliderEnabled.instrumentalness}/>
                        <i class="tt m-2 fa fas fa-info-circle fg-white">
                            <span className='ttt'>Predicts whether a track contains no vocals. 
                                                    "Ooh" and "aah" sounds are treated as instrumental. The closer the instrumentalness value is to 100, the less vocals.
                            </span>
                        </i>
            </label>
            </span>
            </div>
            <div className="row if">
                {sliderEnabled.instrumentalness && <input id="instrumental-range" className="form-range p-4 " disabled={!sliderEnabled.instrumentalness} onChange={(e) => dispatcher(updateSliders({...sliders, instrumentalness: e.target.value}))} type='range' min='0' max='100' value={sliders.instrumentalness}></input>}
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-2 p-2 slider-component-bg ">
            <div className="row text-center">
            <span class="form-check form-switch">
            <label for="liveness-range">
            <span className="slider-text-color me-2 ms-2 ">liveness</span>
                {sliderEnabled.liveness && <span className="slider-text-color ">{sliders.liveness}</span>}
                <input onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, liveness: !sliderEnabled.liveness}))}  class="form-check-input " type="checkbox" role="switch" checked={sliderEnabled.liveness}/>
                        <i class="m-2 fa fas fa-info-circle fg-white tt">
                            <span className='ttt'>Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 80 provides strong likelihood that the track is live.</span>
                        </i>
            </label>
            </span>
            </div>
            <div className="row if">
                {sliderEnabled.liveness && <input  id="liveness-range" className="form-range p-4 " disabled={!sliderEnabled.liveness} onChange={(e) => dispatcher(updateSliders({...sliders, liveness: e.target.value}))} type='range' min='0' max='100' value={sliders.liveness}></input>}
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-2 p-2 slider-component-bg ">
            <div className="row text-center">
            <span class="form-check form-switch">
            <label for="loudness-range">
                <span className="slider-text-color me-2 ms-2 ">loudness</span>
                {sliderEnabled.loudness && <span className="slider-text-color ">{sliders.loudness}</span>}
                <input onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, loudness: !sliderEnabled.loudness}))}  class="form-check-input " type="checkbox" role="switch" checked={sliderEnabled.loudness}/>
                        <i  class="m-2 fa fas fa-info-circle fg-white tt">
                            <span className='ttt'>How loud the song is. 100 is the loudest song on the track, and 0 is the quietest</span>
                        </i>
            </label>
            </span>
            </div>
            <div className="row  if">
                {sliderEnabled.loudness && <input id="loudness-range" className="form-range p-4 " disabled={!sliderEnabled.loudness} onChange={(e) => dispatcher(updateSliders({...sliders, loudness: e.target.value}))} type='range' min='0' max='100' value={sliders.loudness}></input>}
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-2 p-2 slider-component-bg ">
            <div className="row text-center">
            <span class="form-check form-switch">
            <label for="speechiness-range">
             <span className="slider-text-color me-2 ms-2 ">speechiness</span>
                {sliderEnabled.speechiness && <span className="slider-text-color ">{sliders.speechiness}</span>}
                <input onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, speechiness: !sliderEnabled.speechiness}))}  class="form-check-input " type="checkbox" role="switch" checked={sliderEnabled.speechiness}/>
                        <i class="m-2 fa fas fa-info-circle fg-white tt">
                            <span className='ttt'>Speechiness detects the presence of spoken words in a track. the more the audio is just speech the closer to 100 the attribute value</span> 
                        </i>
            </label>
            </span>
            </div>
            <div className="row if">
                {sliderEnabled.speechiness && <input id="speechiness-range" className="form-range p-4 " disabled={!sliderEnabled.speechiness} onChange={(e) => dispatcher(updateSliders({...sliders, speechiness: e.target.value}))} type='range' min='0' max='100' value={sliders.speechiness}></input>}
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-2 p-2 slider-component-bg  justify-content-center ">
            <div className="row text-center">
            <span class="form-check form-switch">
            <label for="tempo-range">
             <span className="slider-text-color me-2 ms-2 ">tempo</span>
                {sliderEnabled.tempo && <span className="slider-text-color  ">{sliders.tempo}</span>}
                <input onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, tempo: !sliderEnabled.tempo}))}  class="form-check-input " type="checkbox" role="switch" checked={sliderEnabled.tempo}/>
                        <i class="m-2 fa fas fa-info-circle fg-white tt">
                            <span className='ttt'>The overall beats per minute of a track. 100 represents the song with the highest tempo in the playlist, and 0 is the lowest</span>
                        </i>
            </label>
            </span>
            </div>
            <div className="row if">
                {sliderEnabled.tempo && <input  id="tempo-range" className="form-range p-4 " disabled={!sliderEnabled.tempo} onChange={(e) => dispatcher(updateSliders({...sliders, tempo: e.target.value}))} type='range' min='0' max='100' value={sliders.tempo}></input>}
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-2 p-2 slider-component-bg   justify-content-center ">
           <div className="row text-center">
            <span class="form-check form-switch">
           <label for="valence-range">
            <span className="slider-text-color me-2 ms-2 ">valence</span>
                {sliderEnabled.valence && <span className="slider-text-color  ">{sliders.valence}</span>}
                <input onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, valence: !sliderEnabled.valence}))}  class="form-check-input " type="checkbox" role="switch" checked={sliderEnabled.valence}/>
                        <i class="m-2 fa fas fa-info-circle fg-white tt">
                            <span className='ttt'>describes the musical positiveness conveyed by a track. The closer to 100, the more happy sounding the track, the closer to zero the more sad</span>
                        </i>
            </label>
            </span>
            </div>
            <div className="row if">
                {sliderEnabled.valence && <input id="valence-range" className="form-range p-4" disabled={!sliderEnabled.valence} onChange={(e) => dispatcher(updateSliders({...sliders, valence: e.target.value}))} type='range' min='0' max='100' value={sliders.valence}></input>}
            </div>
        </div>
            <button className={'btn btn-dark br-0 ms-2 mt-2 me-2'} disabled={loadingMetrics || loadingSongs || currentPlaylist == -1} onClick={() => { 
            dispatcher(setLoadingSongs(true));
                // when we are calling this, make sure to only include the metrics that are enabled on the website
            let slider_map = {}
            if (sliderEnabled.acousticness) {
                slider_map.acousticness = sliders.acousticness/100
            }
            if (sliderEnabled.danceability) {
                slider_map.danceability = sliders.danceability/100
            }
            if (sliderEnabled.duration_ms) {
                slider_map.duration_ms = ((sliders.duration_ms) / 100) * (maxDuration - minDuration) + minDuration
                console.log('duration is' + slider_map.duration_ms)
            }
            if (sliderEnabled.tempo) {
                slider_map.tempo = ((sliders.tempo) / 100) * (maxTempo - minTempo) + minTempo 
            }
            if (sliderEnabled.energy) {
                slider_map.energy = sliders.energy/100
            }
            if (sliderEnabled.loudness) {
                slider_map.loudness = ((sliders.loudness) / 100) * 60 + -60
            }
            if (sliderEnabled.instrumentalness) {
                slider_map.instrumentalness = sliders.instrumentalness/100
            }
            if (sliderEnabled.liveness) {
                slider_map.liveness = sliders.liveness/100
            }
            if (sliderEnabled.speechiness) {
                slider_map.speechiness = sliders.speechiness/100
            }
            if (sliderEnabled.valence) {
                slider_map.valence = sliders.valence/100
            }
            promise = dispatcher(getTracksFromPlaylistThunk({id: currentPlaylist, sliders: slider_map}));
            }
        } >Load Songs</button>
        </div>
    );
}
export default Sliders;