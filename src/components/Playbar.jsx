import React, { Fragment } from 'react';

import '../styles/componentsStyles/Playbar.scss';
import '../styles/componentsStyles/CircleAlbum.scss'

import { BackIcon, BackwardIcon, LoadingIcon, LouderIcon, OptionsIcon, PlayIcon, WindowIcon, ForwardIcon, HomeIcon, SongsIcon, TvIcon, RadioIcon, BellIcon, DownloadItemsIcon, PauseIcon } from './Icons';
import PlaybarControl from './PlaybarControl';
import PlaypauseControl from './PlayPauseControl';
import CircleTrack from '../components/CircleTrack';

import Album from '../Assets/RollingCover.jpeg';

function getTime(time) {
    if(!isNaN(time)) {
        return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    }
}

class Playbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { play: false };
      };
    
    componentWillReceiveProps() {
        this.setState({ play: true });
    };

    componentDidMount() {
        this.audio.addEventListener("timeupdate", () => {
            this.setState({
                currentTime: this.audio.currentTime,
                duration:  this.audio.duration
              });
            let ratio = this.audio.currentTime / this.audio.duration;
            let position = (this.timeline.offsetWidth * ratio) + this.timeline.offsetLeft;
            this.positionHandle(position);
        });
    };

    componentWillUnmount() {
        this.audio.removeEventListener("timeupdate", () => {});
    }
        
    positionHandle = (position) => {
        let timelineWidth = this.timeline.offsetWidth;
        let handleLeft = position - this.timeline.offsetLeft;
        if (handleLeft >= 0 && handleLeft <= timelineWidth) {
            this.handle.style.width = handleLeft + "px";
        }
        if (handleLeft < 0) {
            this.handle.style.offsetWidth = "0px";
        }
        if (handleLeft > timelineWidth) {
            this.handle.style.offsetWidth = timelineWidth + "px";
        }
    };
    
    mouseMove = (e) => {
        this.positionHandle(e.pageX);
        this.audio.currentTime = ((e.pageX - this.timeline.offsetLeft) / this.timeline.offsetWidth) * this.audio.duration;
    };
    
    mouseUp = (e) => {
        window.removeEventListener('mousemove', this.mouseMove);
        window.removeEventListener('mouseup', this.mouseUp);
    };

    mouseDown = (e) => {
        window.addEventListener('mousemove', this.mouseMove);
        window.addEventListener('mouseup', this.mouseUp);
    };

    play = () => {
        if (this.state.play) {
            this.setState({ play: false });
            this.audio.pause();
        } else {
            this.setState({ play: true });
            this.audio.play();
        }
    };

    render(){
        const currentTime = getTime(this.state.currentTime)
        const duration = getTime(this.state.duration)
    return(
        <Fragment>
            <div className="playbar">
                <div className="playbar__left">
                    <img className="playbar__album" src={Album} alt=""/>
                    <div className="playbar__track">
                        <h4>Arabella</h4>
                        <p>Artic Monkeys</p>
                    </div>
                </div>
                <div className="playbar__center">
                    <PlaybarControl icon={<LoadingIcon />} classname='playbar__btn' />
                    <PlaybarControl icon={<OptionsIcon />} classname='playbar__btn' />
                    <div className="playbar__center-controls">
                        <PlaybarControl icon={<BackwardIcon />} classname='playbar__btn' />
                        <PlaypauseControl icon={!this.state.play ? <PlayIcon/>: <PauseIcon/>} event={this.play} classname='play-pause__btn' />
                        <PlaybarControl icon={<ForwardIcon />} classname='playbar__btn' />
                    </div>
                    <div className="playbar__center-progress">
                        <p>{currentTime}</p>
                        <div onClick={this.mouseMove} ref={(timeline) => { this.timeline = timeline }} className="playbar__center-progress--bar">
                            <div onMouseDown={this.mouseDown} ref={(handle) => { this.handle = handle }} className="playbar__center-progress--meter" />
                        </div>
                        <p>{duration}</p>
                    </div>
                </div>
                <div className="playbar__right">
                    <PlaybarControl icon={<LouderIcon />} classname='playbar__btn' />
                    <PlaybarControl icon={<WindowIcon />} classname='playbar__btn' />
                </div>
            </div>
            <div className="playbar__nav">
                <PlaybarControl icon={<HomeIcon />} classname='playbar__nav-btn' />
                <PlaybarControl icon={<TvIcon />} classname='playbar__nav-btn' />
                <PlaypauseControl icon={<SongsIcon />} event={()=>{document.getElementById('navbar').style.height = "80%";}} classname='play-pause__btn'/>
                <PlaybarControl icon={<RadioIcon />} classname='playbar__nav-btn' />
                <PlaybarControl icon={<BellIcon />} classname='playbar__nav-btn' />
            </div>            
            <div id='navbar' className="playbar__overlay">
                <div className="playbar__overlay-content">
                    <audio ref={(audio) => { this.audio = audio }} className="Player__Style" controls hidden={true}>
                        <source src="https://p.scdn.co/mp3-preview/9a19a5cf5a03b4b67708275560965f9162913e10?cid=aba92b636b61480c992f35aa022405f7" type="audio/ogg" />
                    </audio>
                    <div className="playbar__overlay-content--btn">
                        <PlaybarControl icon={<BackIcon />} event={()=>{document.getElementById('navbar').style.height = "0%";}} classname='playbar__btn' />
                    </div>
                    <div className="playbar__overlay-track">  
                        <CircleTrack artist='Artic Monkeys' image={Album} song='Arabella' />                      
                    </div>
                    <div className="playbar__overlay-controls">                        
                        <PlaybarControl icon={<OptionsIcon />} classname='playbar__btn' />
                        <PlaybarControl icon={<DownloadItemsIcon />} classname='playbar__btn' />
                        <PlaybarControl icon={<LoadingIcon />} classname='playbar__btn' />
                        <PlaybarControl icon={<LouderIcon />} classname='playbar__btn' />
                    </div>
                    <div className="playbar__overlay-controls">
                        <PlaybarControl icon={<BackwardIcon />} classname='playbar__btn' />
                        <PlaypauseControl icon={!this.state.play ? <PlayIcon/>: <PauseIcon/>} event={this.play} classname='play-pause__btn' />
                        <PlaybarControl icon={<ForwardIcon />} classname='playbar__btn' />
                    </div>                        
                    <div className="playbar__center-progress">
                        <p>{currentTime}</p>
                        <div id="timeline" onClick={this.mouseMove} ref={(timeline) => { this.timeline = timeline }} className="playbar__center-progress--bar">
                            <div id="handle" onMouseDown={this.mouseDown} ref={(handle) => { this.handle = handle }} className="playbar__center-progress--meter" />
                        </div>
                        <p>{duration}</p>
                    </div>  
                </div>
            </div>
            
            {/*()=>{         
                let audioPlayer; 
                let trackList; 
                let currentTrack = 0;     
                const init = (playerElement) => {
                    trackList = JSON.parse(playerElement.textContent);
                    audioPlayer = new Audio();
                    audioPlayer.addEventListener('ended', ()=>{
                        currentTrack++;
                        playCurrentTrack();
                    })
                }
                const playCurrentTrack = () =>{
                    audioPlayer.pause();
                    audioPlayer.src  = trackList[currentTrack].src;
                    audioPlayer.load();
                    audioPlayer.play();
                }
                const play = () =>{
                    audioPlayer.play();
                }
                const pause = () =>{
                    audioPlayer.pause();
                }
                return {
                    init: init
                };
            }*/}
        </Fragment>
    )}
};


export default Playbar;