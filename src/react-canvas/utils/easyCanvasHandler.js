/**
 * easycanvas props handler
 */
const attrKeys = [
    'tx',
    'ty',
    'tw',
    'th',
    'sx',
    'sy',
    'locate',
    'opacity',
    'visible',
    'rotate',
    'scale',
    'zIndex'
];

const textKeys = [
    'color',
    'textAlign',
    'textFont',
    'textVerticalAlign',
    'lineHeight'
];

export function processProps (canvasInstance, props) {
    if (typeof props.style === 'object') {
        attrKeys.forEach((attr) => {
            canvasInstance.style[attr] = props.style[attr] || canvasInstance.style[attr];
        });

        if (canvasInstance.content.text) {
            textKeys.forEach((attr) => {
                canvasInstance.style[attr] = props.style[attr] || canvasInstance.style[attr];
            });
        }
    }

    attrKeys.forEach((attr) => {
        canvasInstance.style[attr] = props[attr] || canvasInstance.style[attr];
    });

    if (canvasInstance.content.text) {
        textKeys.forEach((attr) => {
            canvasInstance.style[attr] = props[attr] || canvasInstance.style[attr];
        });
    }
}