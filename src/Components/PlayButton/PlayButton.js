import React from "react";
import './PlayButton.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faPause} from '@fortawesome/free-solid-svg-icons';

export class PlayButton extends React.Component {
    // const play = <FontAwesomeIcon icon={faPlay} />;
    // const pause = <FontAwesomeIcon icon={faPause} />;

    render() {
        return (
            <div>
                <button className="playButton"><FontAwesomeIcon icon={faPlay} /></button>
            </div>
        )
    }
}