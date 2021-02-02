import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.counter}</h2>
        <button onClick={this.props.minus} style={{ backgroundColor: "green" }}>-</button>
        <button onClick={this.props.plus} style={{ backgroundColor: "red" }}>+</button>
      </div>
    );
  }
}

export default Counter;
