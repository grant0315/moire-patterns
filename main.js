import * as p5 from './p5.js';

let s = (sk) => {
    sk.setup = () => {
        sk.createCanvas(window.innerWidth, window.innerHeight);
        sk.background(40);
    }

    sk.draw = () => {

    }
}

const P5 = new p5();