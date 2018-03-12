import { createElement } from '../utils/createElement.js';
import CanvasRender from '../reconciler/index.js';
import parse from '../parse/index.js';

export default function render (component, el) {
    const container = createElement('ROOT');
    const node = CanvasRender.createContainer(container);
    CanvasRender.updateContainer(component, node, null);

    CanvasRender.injectIntoDevTools({
        bundleType: 1, // 0 for PROD, 1 for DEV
        version: '0.1.0', // version for your renderer
        rendererPackageName: 'react-canvas-fiber', // package name
        findHostInstanceByFiber: CanvasRender.findHostInstance // host instance (root)
    })
    const output = parse(container, el);
    console.log(container)
}