import * as Tone from 'tone'


export default class MusicService {

    start() {
        Tone.start();
    }

    playNote(note) {
        const noteMapper = {
            'e': 'E4',
            'B': 'B3',
            'G': 'G3',
            'D': 'D3',
            'A': 'A2',
            'E': 'E2'
        }

        Tone.start();
        const synth = new Tone.PolySynth(Tone.Synth).toDestination();
        synth.triggerAttackRelease(noteMapper[note], 0.3);
    }
}