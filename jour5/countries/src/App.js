import React from "react";
import Button from "./components/Button"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Card from "./components/Card"
import Search from "./components/Search"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
      searchValue: "",
    }
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/name/france")
      .then(res => res.json())
      .then(countries => {
        this.setState({
          name: countries[0].name,
          capital: countries[0].capital,
          flag: countries[0].flag,
          population: countries[0].population,
          region: countries[0].region,
        })
      })
  }

  onSearch = (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }

  onClickSearch = () => {
    this.getCountry(this.state.searchValue)
  }

  getCountry = (country) => {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      .then(res => res.json())
      .then(countries => {
        this.setState({
          name: countries[0].name,
          capital: countries[0].capital,
          flag: countries[0].flag,
          population: countries[0].population,
          region: countries[0].region,
        })
      })
      .catch(error => alert("Pays non reconnu"))
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Country Selector</h1>
          <div className="row search">
          <Search onChange={this.onSearch} onClick={this.onClickSearch}></Search>
          </div>
          <Card img={this.state.flag} pays={this.state.name} capitale={this.state.capital} pop={this.state.population} continent={this.state.region} />
        </header>
      </div>
    );
  }
}

export default App;
