import * as Tone from 'tone'

export default class MusicService {
    playNote(note) {
        console.log('invoked')
        const noteMapper = {
            'e': 'E4',
            'B': 'B3',
            'G': 'G3',
            'D': 'D3',
            'A': 'A2',
            'E': 'E2'
        }

        const synth = new Tone.PolySynth(Tone.Synth).toDestination();
        synth.triggerAttackRelease(noteMapper[note], 1)
    }
}