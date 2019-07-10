import React, { Component } from 'react';
import './App.css';


var clocks = {
  10:'🕛',
  9:'🕐',
  8:'🕑',
  7:'🕓',
  6:'🕔',
  5:'🕕',
  4:'🕖',
  3:'🕗',
  2:'🕙',
  1:'🕚',
  0:'🕛'
}
// 🕛🕐🕑🕓🕔🕕🕖🕗🕙🕚🕛

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 10,
      started: false,
      id: 0
    }
    this.startTimer = this.startTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer = () => {
    if (!this.state.started) {
      const interval = setInterval(() => {
        let newTime = this.state.time - 1;
        this.setState({ time: newTime }, () => {
          if (this.state.time === 0) {
            clearInterval(this.state.id);
            let output = document.getElementById('output');
            output.innerText = 'All done!';
          }
        })
      }, 1000)
      this.setState({
        id: interval,
        started: true
      })
    }
  }

  resetTimer = () => {
    if (this.state.started) {
      clearInterval(this.state.id);
      this.setState({
        time: 10,
        started: false,
        id: 0
      })
      let output = document.getElementById('output');
      output.innerText = '';
    }
  }

  render = () => {
    return (
      <div className="App">
        <h1> timer </h1>
        <div id="timer">
          {clocks[this.state.time]}:{this.state.time}
        </div>
        <div id="buttons">
          <button onClick={this.startTimer}>start timer</button>
          <button onClick={this.resetTimer}>reset timer</button>
        </div>
        <div id="output">
        </div>
      </div>
    );
  }
}

export default App;
