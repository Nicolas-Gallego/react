import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import List from "./components/List";
import Pay from "./components/Pay";
import Add from "./components/Add";
import Button from "./components/Button"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 'Add',
      items: [],
    }
  }

  selectAdd = () => {
    this.setState({
      activeTab: "Add"
    })
  }

  selectList = () => {
    this.setState({
      activeTab: "List"
    })
  }

  selectPay = () => {
    this.setState({
      activeTab: "Pay"
    })
  }

  addItem = (name, price) => {
    const items = {
      name: name,
      price: price
    }
    const newItems = this.state.items;
    newItems.push(items)
    this.setState({
      items: newItems
    })
    console.log(this.state.items)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="row">
            <Button isSelected={this.state.activeTab === "Add" ? "form-control btn btn-primary" : "form-control btn btn-light"} onClick={this.selectAdd}>Add</Button>
            <Button isSelected={this.state.activeTab === "List" ? "form-control btn btn-primary" : "form-control btn btn-light"} onClick={this.selectList}>List</Button>
            <Button isSelected={this.state.activeTab === "Pay" ? "form-control btn btn-primary" : "form-control btn btn-light"} onClick={this.selectPay}>Pay</Button>
          </div>
          <div className="row">
            {this.state.activeTab === "Add" && <Add addItems={this.addItem}></Add>}
            {this.state.activeTab === "List" && <List items={this.state.items}></List>}
            {this.state.activeTab === "Pay" && <Pay></Pay>}
          </div>
        </header>
      </div>
    );
  }
}

export default App;