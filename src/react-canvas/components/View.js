import { processProps } from '../utils/easyCanvasHandler.js';

class View {
    children = [];

    constructor (root, props) {
        this.root = root;
        this.props = props;

        this.$canvas = null;
        this.$sprite = Object.create(null);

        this._init();
    }

    appendChild (child) {
        this.children.push(child);
    }

    removeChild (child) {
        const index = this.children.indexOf(child);
        this.children.splice(index, 1);
    }

    renderChildNode () {
        for (let i = 0; i < this.children.length; i++) {
            if (typeof this.children[i] === 'object') {
                this.children[i].render();
            }
        }
    }

    render () {
        this._rerenderSprite();
        this.renderChildNode();

    }

    /**
     * @private
     */
    _init () {
        this._initSprite();
    }

    _initSprite () {
        this.$sprite = new this.root.Easycanvas.class.sprite({
            style: this.props.style
        });

        this._rerenderSprite();
    }

    _rerenderSprite () {
        if ( typeof this.props.children === 'string') {
            this.$sprite.content.text = this.props.children;
        } else {

        }
        
        this.$sprite.style = this.props.style || this.$sprite.style;

        // style attrs
        processProps(this.$sprite, this.props);
        if (this.props.onClick) {
            this.$sprite.events.click = (e) => {
                this.props.onClick(e);
            }
        }
    }
}

export default View;