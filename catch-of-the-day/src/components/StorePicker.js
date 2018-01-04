import React from 'react';
import { render } from 'react-dom';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

  // constructor() {
  //   super(); // calss React.Component that inherits from
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(event) {
    event.preventDefault();  //prevent form from submitting
    const storeId = this.storeInput.value;     //grab the data submitted
    this.context.router.transitionTo(`/store/${storeId}`);
    //change the url from '/' to '/store/dataSubmitted'
  }

  render() {
    return (
      <form className="store-selector" onSubmit={ (e) => this.goToStore(e) }>
        {/* <p>Hello</p> */}
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store name" defaultValue={ getFunName() } ref={(input) => { this.storeInput = input }}/>
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
