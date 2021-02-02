import React from "react";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      price: 1,
    };
  }

  updateProductName = (e) => {
    this.setState({productName: e.target.value})
}

updatePrice = (e) => {
    this.setState({price: e.target.value})
}

// updateItemName = () => {
//     this.settate
// }

  render() {
    return (
      <div>
        <input type="text" onChange={this.updateProductName}/>
        <input type="range" min="1" max="10" onChange={this.updatePrice} value={this.state.price}/>
        <p>{this.state.price}€</p>
        <button onclick>Add Product</button>
      </div>
    );
  }
}

export default Add;
