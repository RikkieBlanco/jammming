import React from "react";
import './PlayButton.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faPause} from '@fortawesome/free-solid-svg-icons';

export class PlayButton extends React.Component {
    constructor(props) {
        super(props);
        this.playMusic = this.playMusic.bind(this)
    }

    // const play = <FontAwesomeIcon icon={faPlay} />;
    // const pause = <FontAwesomeIcon icon={faPause} />;
    playMusic() {
        const previewUrl = this.props.audioFile + '.mp3';
        previewUrl.play();
    }

    render() {
        return (
            <div>
                <button className="playButton" onClick={this.playMusic} ><FontAwesomeIcon icon={faPlay} /></button>
            </div>
        )
    }
}