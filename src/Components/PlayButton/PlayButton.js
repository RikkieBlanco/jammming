import React from "react";
import './PlayButton.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

export class PlayButton extends React.Component {
    constructor(props) {
        super(props);
        this.playMusic = this.playMusic.bind(this)
    }

    // const play = <FontAwesomeIcon icon={faPlay} />;
    // const pause = <FontAwesomeIcon icon={faPause} />;
    playMusic() {
        const player = document.getElementsByClassName('previewPlayer');
        player.play();
      }

    render() {
        return (
            <div className="PlayButton" >
                <audio controls className='previewPlayer'>
                    <source src={this.props.audioFile + '.mp3'} type="audio/mpeg" />
                </audio>
            </div>
        )
    }
}