import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {

  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish(fish) {
      const fishes = {...this.state.fishes}; // copy the state that already exists
      const timestamp = Date.now(); // a key for the object to increment each added fish as it will be always unique
      fishes[`fish-${timestamp}`] = fish; // add new fish
      this.setState({ fishes: fishes }); // update the state
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh SeaFood Market"/>
          <ul className="list-of-fishes">
            { Object
              .keys(this.state.fishes)
              .map(key => <Fish key={key} details={this.state.fishes[key]} />)  }
          </ul>
        </div>
        <Order/>
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App;
