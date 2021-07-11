import { useEffect, useState } from "react";
import MusicService from "../../services/MusicService";
import GuitarString from "../guitar-string/GuitarString";
import './GuitarTab.css'
export default function GuitarTab() {

    const EString = [,0,,,,,,,,,,,,0];
    const aString = [];
    const dString = [];
    const gString = [,,,,0,,,,,,,,0,,,0,,,,,,,,0];
    const bString = [,,,,,,0,,,,0,,,,,,,0,,,,0];
    const eString = [,,,,,,,,0,,,,,0,,,,,,0];

    const [position, setPosition] = useState(0  );
    const [started, setStarted] = useState(false);
    const [counterReference, setCounterReference] = useState();

    // TODO: enhance interval control
    function play (started) {
        new MusicService().start();
        setStarted(started);
        if(started) {
            setCounterReference(ref => {
                clearInterval(ref);
                return setInterval(() => {
                    setPosition(pos => pos + 1);
                }, 500)
            })
        } else {
            clearInterval(counterReference);
        }
    }


    return (
        <div className="guitar_tab" onClick={() => play(!started)}>
            <div className="tab_line">
                <GuitarString string="E" stringTab={ EString } currentPosition={ position } started={ started }/>
                <GuitarString string="A" stringTab={ aString } currentPosition={ position } started={ started }/>
                <GuitarString string="D" stringTab={ dString } currentPosition={ position } started={ started }/>
                <GuitarString string="G" stringTab={ gString } currentPosition={ position } started={ started }/>
                <GuitarString string="B" stringTab={ bString } currentPosition={ position } started={ started }/>
                <GuitarString string="e" stringTab={ eString } currentPosition={ position } started={ started }/>
            </div>
        </div>
    );
}