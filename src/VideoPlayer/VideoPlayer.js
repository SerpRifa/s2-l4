import React, {Component} from 'react';
import './VideoPlayer.css';

class VideoPlayer extends Component{

    handleClickStart = event => {
        this.video.play();
    }

    handleClickStop = event => {
        this.video.pause();
    }

    render(){
        return <div className="video-player">      

            <video  ref={video => this.video = video} className="video-player__source"><source src="http://5a6f85acefbe5d025c141c9f.peaceful-dubinsky-11edb4.netlify.com/static/media/Video.24ff39b5.mp4" type="video/mp4"/></video>
            <div>
                <button onClick={this.handleClickStart}>Play</button>
                <button onClick={this.handleClickStop}>Stop</button>
            </div>
        </div>
    }
}

export default VideoPlayer;