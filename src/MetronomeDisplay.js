import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Button, ButtonToolbar } from 'react-bootstrap';

class MetronomeDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bpm: props.bpm,
            active: false
        };
        console.log("display:" + props.bpm);
    }

    render() {
        var displayStyle = {
            margin: 'auto'
        };
        return (
            <div style={displayStyle}>
                <h1>Metronome Display : {this.state.bpm} State:{this.state.active.toString()}</h1>
                <ButtonToolbar>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                    <Button>7</Button>
                    <Button>8</Button>
                </ButtonToolbar>
            </div>
        );
    }
}

// ========================================

// ReactDOM.render(
//     <MetronomeDisplay />,
//     document.getElementById('MetronomeDisplay')
// );

export default MetronomeDisplay;