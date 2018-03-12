import { EasyCanvas, Canvas, Image, Text, View } from '../components/index.js';
import config from '../config.js';

let ROOT_NODE_INSTANCE = null;

export function getHostContextNode (rootNode) {
    if (typeof rootNode !== undefined) {
        return ROOT_NODE_INSTANCE = rootNode;
    } else {
        return ROOT_NODE_INSTANCE = new EasyCanvas();
    }
}

export function createElement (type, props) {
    const COMPONENTS = {
        [config.types.root]: () => new EasyCanvas(),
        [config.types.image]: () => new Image(ROOT_NODE_INSTANCE, props),
        [config.types.text]: () => new Text(ROOT_NODE_INSTANCE, props),
        [config.types.view]: () => new View(ROOT_NODE_INSTANCE, props),
        [config.types.canvas]: () => new Canvas(ROOT_NODE_INSTANCE, props),
        default: undefined 
    };

    return COMPONENTS[type]() || COMPONENTS.default;
}