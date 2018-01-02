import React from 'react';
import { render } from 'react-dom';

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        {/* <p>Hello</p> */}
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store name"/>
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;
