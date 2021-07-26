import * as Tone from 'tone'


export default class MusicService {
    started = false;

    start() {
        Tone.start();
        this.started = true;
    }

    getNote(string, position) {
        const noteMapper = {
            E: { 0: 'E2' },
            B: { 0: 'B3' },
            G: { 0: 'G3' },
            D: { 0: 'D3' },
            A: { 0: 'A2' },
            e: { 0: 'E4' },
        }

        return noteMapper[string][position];
    }

    playNote(notes) {
        const synth = new Tone.PolySynth(Tone.Synth).toDestination();
        synth.triggerAttackRelease(notes, [0.3]);
    }
}