import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Add from "./components/Add"
import List from "./components/List"
import Pay from "./components/Pay"
import Button from "./components/Button"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "add",
      items: []
    }
  }

  render() {
    return (
      <>
        <Button isSelected={this.state.activeTab} onClick="">Add</Button>
        <Button isSelected={this.state.activeTab} onClick="">List</Button>
        <Button isSelected={this.state.activeTab} onClick="">Pay</Button>
      </>
    );
  }
}

export default App;