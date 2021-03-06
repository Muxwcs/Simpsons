import React, { Component } from 'react';
import logo from './Simpsons_Donut.svg.png';
import './App.css';

import Quote from './Quote';
import Quotes from './Quotes';
import Lamp from './Lamp';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "working": true,
      logoAlt: "App-logo"
    };
  }
  handleClick = () => {
    this.setState({ "working": !this.state.working });
    this.state.working === true ? this.setState({ logoAlt: "App-logo" }) : this.setState({ logoAlt: "App-logo-alt" })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={this.state.logoAlt} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
          <button onClick={this.handleClick}>Alternate</button>
        </header>
        <div class='container'>
          <div class='row'>
            <Lamp on />
            <Lamp />
          </div>
        </div>
        <div class='container'>
          <div class='row'>
            <Quote
              quote="I believe the children are the future... Unless we stop them now!"
              character="Homer Simpson"
              image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
            />
            <Quote
              quote="Me fail English? That's unpossible"
              character="Ralph Wiggum"
              image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
            />
            <Quotes />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
