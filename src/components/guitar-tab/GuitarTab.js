import MusicService from "../../services/MusicService";
import GuitarString from "../guitar-string/GuitarString";
import React from "react";
import './GuitarTab.css'
export default class GuitarTab extends React.Component {

    constructor(props) {
        super(props);
        this.musicService = new MusicService();
        this.state = {
            strings: {
                E: [, 0, , , , , , , , ,, , , , 0],
                A: [],
                D: [],
                G: [, , , , 0, , , , , , , , 0, , ,, 0, , ,, , ,,  , 0],
                B: [, , , , , , 0, , , , 0, , , , ,, ,, 0, ,, , 0],
                e: [, , , , , , , , 0, ,, , , , 0, , , , , ,  0,]
            },
            position: 0,
            started: false,
            intervalReference: undefined
        }
    }

    // TODO: enhance interval control
    play(started) {
        this.setState({ started });
        if (!this.musicService.started) {
            this.musicService.start();
        }

        if (started) {
            const ref = setInterval(() => {
                const toPlay = this.getNotesToPlayByPosition(this.state.position);
                this.musicService.playNote(toPlay);
                this.setState({ position: this.state.position + 1 });
            }, 300);
            this.setState({ intervalReference: ref });
        } else {
            clearInterval(this.state.intervalReference);
        }

    }

    getNotesToPlayByPosition(position) {
        const toPlay = [];
        Object.keys(this?.state?.strings).forEach(key => {
            if (this?.state?.strings[key][position] !== undefined) {
                toPlay.push(this.musicService.getNote(key, this?.state?.strings[key][position]));
            }
        });

        return toPlay;
    }


    render() {
        return (
            <div className="guitar_tab" onClick={() => this.play(!this.state.started)}>
                <div className="tab_line">
                    <GuitarString string="E" stringTab={this.state.strings.E} currentPosition={this.state.position} started={this.state.started} />
                    <GuitarString string="A" stringTab={this.state.strings.A} currentPosition={this.state.osition} started={this.state.started} />
                    <GuitarString string="D" stringTab={this.state.strings.D} currentPosition={this.state.position} started={this.state.started} />
                    <GuitarString string="G" stringTab={this.state.strings.G} currentPosition={this.state.position} started={this.state.started} />
                    <GuitarString string="B" stringTab={this.state.strings.B} currentPosition={this.state.position} started={this.state.started} />
                    <GuitarString string="e" stringTab={this.state.strings.e} currentPosition={this.state.osition} started={this.state.started} />
                </div>
            </div>
        );
    }
}