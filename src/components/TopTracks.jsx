import React, { Component, Fragment } from 'react';
import ListTrack from './ListTrack';
import '../styles/componentsStyles/TopTracks.scss';

export default class TopTracks extends Component {
    render() {
        return(
            <Fragment>
            <div className='TopTracks'>
                <p className='TopTracks__Title'>Top Tracks</p>
                <section className='TopTracks__Subtitle'>
                    <p className='TopTracks__Subtitle--id'>#</p>
                    <p className='TopTracks__Subtitle--Song'>Song</p>
                    <p className='TopTracks__Subtitle--Artist'>Artist</p>
                    <p className='TopTracks__Subtitle--Daily'>Daily Plays</p>
                    <p className='TopTracks__Subtitle--Time'>Time</p>
                    <p className='TopTracks__Subtitle--Options'>Options</p>
                </section>

                <ListTrack number='150' song='Conspiracy Generation' artist='Clayde Feat' reproductions='67,420' time='30:30' />
                <ListTrack number='20' song='Conspiracy Generation' artist='Clayde Feat' reproductions='67,420' time='30:30' />
                <ListTrack number='20' song='Conspiracy ' artist='Clayde ' reproductions='67,420' time='30:30' />
            </div>
            </Fragment>
        ) 
    }
}
