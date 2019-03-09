import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Calendar openModal={this.openModal}/>
      </div>
    );
  }
}

export default App;
