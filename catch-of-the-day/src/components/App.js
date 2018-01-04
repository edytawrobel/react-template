import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';


class App extends React.Component {

  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish(fish) {
      const fishes = {...this.state.fishes}; // copy the state that already exists
      const timestamp = Date.now(); // a key for the object to increment each added fish as it will be always unique
      fishes[`fish-${timestamp}`] = fish; // add new fish
      this.setState({ fishes }); // update the state
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh SeaFood Market"/>
        </div>
        <Order/>
        <Inventory addFish={this.addFish}/>
      </div>
    )
  }
}

export default App;
