import { useEffect, useState } from "react";
import MusicService from "../../services/MusicService";
import './GuitarString.css';

export default function GuitarString({ string }) {

    const playNote = (note) => {
        const musicService = new MusicService();
        musicService.playNote(note)
    }

    useEffect(() => {
        const canvas = document.querySelector(`#${string}`);
        const ctx = canvas.getContext('2d');
        const x = canvas.width - 15;
        const y = canvas.height / 2;
        ctx.lineWidth = 50;
        ctx.lineCap = 'square';
        ctx.beginPath();
        ctx.moveTo(15, y);
        ctx.lineTo(x, y);
        ctx.stroke();
    })

    return (
        <div>
            <label>{string} </label>
            <canvas id={string} onClick={() => playNote(string)}></canvas>
        </div>
    )
}