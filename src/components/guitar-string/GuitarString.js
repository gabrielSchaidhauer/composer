import { useEffect } from "react";
import MusicService from "../../services/MusicService";
import './GuitarString.css';

export default function GuitarString({ string, stringTab = [], currentPosition = 0, started = false }) {

    const lineMargin = 15;
    const fontSize = '12pt';
    const fontName = 'Arial'
    const lineWidth = 2;

    const playNote = (note) => {
        const musicService = new MusicService();
        musicService.playNote(note)
    }

    useEffect(() => {
        console.log(currentPosition)
        if(currentPosition < stringTab.length && stringTab[currentPosition] !== undefined && started) {
            console.log('deu')
            playNote(string);
        }
    }, [currentPosition, started])

    useEffect(() => {
        const parentDiv = document.querySelector(`.stringContainer`);
        const canvas = document.querySelector(`#${string}`);
        const ctx = canvas.getContext('2d');

        canvas.width = parentDiv.offsetWidth;
        const x = canvas.width - lineMargin;
        const y = canvas.height / 2;

        ctx.font = `${fontSize} ${fontName}`;
        ctx.lineWidth = lineWidth;
        let countTimes = 0;

        for (let i = lineMargin; i < x; i += 15) {
            if (countTimes < stringTab.length && stringTab[countTimes] !== undefined) {
                ctx.beginPath();
                ctx.moveTo(i, y);
                ctx.fillText(stringTab[countTimes], i, y + 5.5);
                ctx.closePath();
            } else {
                ctx.beginPath();
                ctx.moveTo(i, y);
                ctx.lineTo(i + 10, y);
                ctx.stroke();
                ctx.closePath();
            }
            countTimes++;
        }
    }, [string, stringTab]);

    return (
        <div className="stringContainer">
            <label>{string} </label>
            <canvas id={string} height="20" width="0"></canvas>
        </div>
    )
}