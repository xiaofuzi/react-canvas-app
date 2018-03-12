import render from './render/index.js';
import config from './config.js';

// Aliases for createElement method
const Image = config.types.image;
const Canvas = config.types.canvas;
const Text = config.types.text;
const View = config.types.view;

export { 
    render, 
    Image, 
    Canvas,
    Text,
    View
};
