import React from 'react';

class AddFishForm extends React.Component {

  createFish(event) { // creating fish object with properties
    event.preventDefault();
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      description: this.description.value,
      image: this.image.value,
    }
    this.props.addFish(fish);
    this.fishForm.reset(); // clears up the form we used to add the fish
  }

  render() {
    return (
      <form ref={ (input) => this.fishForm = input } className="fish-edit" onSubmit={ (e) => this.createFish(e) }>
        <input ref={ (input) => this.name = input } type="text" placeholder="Name" />
        <input ref={(input) => this.price = input } type="text" placeholder="Price" />
        <select ref={(input) => this.status = input }>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea ref={ (input) => this.description = input } placeholder="Description" ></textarea>
        <input ref={ (input) => this.image = input } type="text" placeholder="Fish Picture" />
        <button type="submit">+ Add Item</button>
      </form>
    )
  }
}

export default AddFishForm;
