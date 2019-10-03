import React, { Component } from 'react';
import YouTube from 'react-youtube';

export default class Learning extends Component {
    render() {
        const opts = {
            height: '468',
            width: '786',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 1
            }
        };
        return (
            <div style={{textAlign: 'center', paddingTop: '30px'}}>
                <YouTube
                    videoId="dQw4w9WgXcQ"
                    opts={opts}
                    onReady={this._onReady}
                />
            </div>
        )
    }
}
