import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: ""
    }
  }

  componentDidMount{
  fetch("https://restcountries.eu/rest/v2/name/france")
    .then(res => res.json())

}

render() {
  return (
    <div>
      {this.state.name}
      {this.state.capital}
      {this.state.flag}
      {this.state.population}
      {this.state.region}
    </div>
  );
}
}

export default App;
