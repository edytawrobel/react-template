import  React from 'react';
import { render } from 'react-dom';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render() {
    return (
      <div>
        <h2>Inventory</h2>
        <AddFishForm addFish={this.props.addFish}/>  {/* * addFish passed down from Inventory props (originally coming crom Apps)  */}
      </div>
    )
  }
}

export default Inventory;
