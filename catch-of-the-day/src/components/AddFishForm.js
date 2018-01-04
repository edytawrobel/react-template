import React from 'react';

class AddFishForm extends React.Component {
  render() {
    return (
      <form className="fish-edit">
        <input type="text" placeholder="Name" ref={(input) => { this.storeInput = input }}/>
        <input type="text" placeholder="Price" ref={(input) => { this.storeInput = input }}/>
        <select>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea placeholder="Description" ref={(input) => { this.storeInput = input }}></textarea>
        <input type="text" placeholder="Fish Picture" />
        <button type="submit">+ Add Item</button>
      </form>
    )
  }
}

export default AddFishForm;
