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
            count: 1, // for change button color
        };
    }

    activate(s) {
        if (s === 1) {
            this.setState({ active: true });
            this.soundRep();
            //this.soundPlayer();
            console.log("end of Rep");
        }
        else {
            this.setState({ active: false });
            clearInterval(this.intervalAudio);
        }
    }

    getBPM() {
        return (60000 / this.state.bpm); //determins bpm
    }

    wait(ms) {
        var startTime = new Date().getTime();
        while ((new Date().getTime() - startTime) < ms) {
            console.log("waiting!!!");
        }
    }

    // soundPlayer() {
    //     var audio = new Audio('Click1.wav');
    //     audio.play();
    //     console.log("playing.");
    // }

    soundRep()//plays and loops click sound
    {
        var self = this;
        var b = this.getBPM(); //gets bpm
        console.log("In sound Rep");
        // for (var i = 0; i < 10000; i++) {
        //     setTimeout(function () { self.state.audio.play(); }, 3000);
        // }
        this.intervalAudio = setInterval(function () {
            self.state.count = self.state.count + 1;
            self.state.audio.play();

        }, b);
    }

    changeButtonColor()
    {
        
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
        return <Button id={'dot' + id} >{id}</Button>
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
                    <ButtonToolbar>
                        <Button id="start" bsStyle="success" onClick={() => this.activate(1)}>Start</Button>
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