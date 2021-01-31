import {Display} from 'rot-js';

let options = {
	width: 80,
	height: 24
};

let display = new Display(options);
document.body.append(display.getContainer());