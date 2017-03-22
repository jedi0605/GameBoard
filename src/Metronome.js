import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Button, ButtonToolbar } from 'react-bootstrap';
import MetronomeDisplay from './MetronomeDisplay';

class Metronome extends React.Component {
    constructor() {
        super();
        this.state = {
            audio: new Audio('Click1.wav'),
            bpm: 100,
            active: false,
            intervalId: null,
            intervalAudio: null,
            count: 0, // for change button color
            node: 16 // all bit
        };
    }

    activate(s) {
        if (s === 1 && this.state.active === false) {
            this.setState({ active: true, count: 0 });
            this.soundRepWithInterval();
            // this.changeButtonColor();
            console.log("end of Rep");
        }
        else if (s === 0) {
            this.setState({ active: false });
            clearInterval(this.intervalAudio);
        }
    }

    getBPM() {
        return (60000 / this.state.bpm) / this.state.node * 8; //determins bpm
    }

    soundRepWithInterval()//plays and loops click sound
    {
        var self = this;
        var b = this.getBPM(); //gets bpm
        console.log("In sound Rep");
        this.intervalAudio = setInterval(function () {
            console.log(self.state.count);
            if (self.state.count == self.state.node)
            { self.setState({ count: 0 }) }
            self.setState({ count: self.state.count + 1 })
            self.state.audio.play();
        }, b);
    }

    changeButtonColor() {
        this.setState({ count: this.state.count + 1 });
    }

    // var intervalId; // keep the ret val from setTimeout()
    mousedownfunc(divid) {
        if (this.state.active === 1) { return; }
        var self = this;
        this.intervalId = setInterval(function () {
            self.funca(self, divid);
        }, 300);
    }

    mouseupfunc() {
        clearInterval(this.intervalId);
    }

    funca(self, divid) {
        console.log(divid);
        if (divid === 1) {
            if (self.state.bpm === 0) { return; }
            self.setState({ bpm: self.state.bpm - 1 });
        }
        else { self.setState({ bpm: self.state.bpm + 1 }); }
    }

    renderSetBPM(id, i) {
        return <Button id={id} bsStyle="primary" disabled={this.state.active} onMouseDown={() => this.mousedownfunc(i)} onMouseUp={() => this.mouseupfunc()}>{id}</Button>
    }

    renderDot(id) {
        if (this.state.count === id) {
            return <Button id={'dot' + id} bsStyle="danger">{id}</Button>
        }
        else {
            return <Button id={'dot' + id} >{id}</Button>
        }

    }

    render() {
        var startStopStyle = {
            marginTop: 10
        };
        return (
            <Grid>
                <h1>Metronome Demo</h1>
                <div className="SetBPM">
                    {this.renderSetBPM("Up", 0)}
                    <h1>{this.state.bpm}</h1>
                    {this.renderSetBPM("Down", 1)}
                </div>
                <div className="StartStop" style={startStopStyle} >
                    <h1>Active:{this.state.active.toString()}</h1>
                    <ButtonToolbar>
                        <Button id="start" bsStyle="success" onClick={() => this.activate(1)} disabled={this.state.active}>Start</Button>
                        <Button id="stop" bsStyle="danger" onClick={() => this.activate(0)}>Stop</Button>
                    </ButtonToolbar>
                </div>
                <div style={startStopStyle}>
                    {this.renderDot(1)}
                    {this.renderDot(2)}
                    {this.renderDot(3)}
                    {this.renderDot(4)}
                    {this.renderDot(5)}
                    {this.renderDot(6)}
                    {this.renderDot(7)}
                    {this.renderDot(8)}
                    {this.renderDot(9)}
                    {this.renderDot(10)}
                    {this.renderDot(11)}
                    {this.renderDot(12)}
                    {this.renderDot(13)}
                    {this.renderDot(14)}
                    {this.renderDot(15)}
                    {this.renderDot(16)}
                    {this.renderDot(17)}
                    {this.renderDot(18)}
                    {this.renderDot(19)}
                    {this.renderDot(20)}
                    {this.renderDot(21)}
                    {this.renderDot(22)}
                    {this.renderDot(23)}
                    {this.renderDot(24)}
                </div>
            </Grid>
        );
    }
}

// ========================================

ReactDOM.render(
    <Metronome />,
    document.getElementById('Metronome')
);

export default Metronome;