import React from "react";
import "./App.css";
import Counter from "./Components/Counter.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }
  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <>
        <h1>Counter</h1>
        <Counter counter={this.state.count} minus={this.decrementCount} plus={this.incrementCount}/>
      </>
    );
  }
}

export default App;
