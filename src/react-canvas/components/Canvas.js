class Canvas {
    children = [];

    constructor (root, props) {
        this.root = root;
        this.props = props;

        this.$canvas = new this.root.Easycanvas.painter();
        this.$canvas.register(document.querySelector('#canvasRoot'));
        //this.$canvas.start();
    }

    appendChild (child) {
        child.$canvas = this.$canvas.add(child.$sprite);
        this.children.push(child);
    }

    removeChild (child) {
        this.$canvas.remove(child.$canvas);
        console.log('remove')
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
        this.renderChildNode();
    }
}

export default Canvas;