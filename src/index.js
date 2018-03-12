import React, { Component } from 'react';
import { Canvas, Image, Text, render } from './react-canvas/index.js';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            size: {
                w: 100,
                h: 50,
                x: 100
            },
            img: true,
            imgStyle: {
                content: {
                    img: 'http://p1.meituan.net/codeman/bb0abb3435a60c44d87e90ed4237b61039329.jpg'
                }
            },
            src: 'http://p1.meituan.net/codeman/bb0abb3435a60c44d87e90ed4237b61039329.jpg'
        }
    } 
    render () {
        return (
          <Canvas>
            <Image 
                src={this.state.src}
                tw={this.state.size.w}
                th={this.state.size.h}
                tx={this.state.size.x}
                onClick={this.onClickFn}>tree tree</Image>
            <Text color='red' ty='100'>yangshengfu</Text>
          </Canvas>
        );
    }

    onClickFn = () => {
        alert('it is a click.');
    }

    updateImageStyle () {
        window.setInterval(() => {
            let state = this.state
            state.size.x++;
            console.log('-state-', state.size)
            this.setState({
                size: state.size
            });
        }, 20);
    }

    componentDidMount () {
        this.setState({
            //size: {
                // w: 1000,
                // h: 400
            //}
        }, () => {
            console.log(this.state)
        })
        // this.updateImageStyle()
    }
}

function ImageComponent (props) {
    if (props.img) {
        return <Image name='img' rect={props.size} src={props.src}></Image>;
    }

    return <Image name='picture'></Image>
}

render(<App />, document.querySelector('#canvasRoot'));