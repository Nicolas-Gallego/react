import React from "react";
import './App.css';
import Box from "./components/Box"
import "./styles/global.css"

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000



export class App extends React.Component {
  water = { icon: "local_drink", color: "#3A85FF", value: 1.5, unit: " L" }
  steps = { icon: "directions_walk", color: "black", value: 3000, unit: " steps" }
  heart = { icon: "favorite", color: "red", value: 120, unit: " btm" }
  temperature = { icon: "wb_sunny", color: "yellow", value: -10, unit: "°C" }

  constructor(props) {
    super(props);
    this.state = {
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000,
      onHeartChange: (value) => { this.setState({ heart: value.target.value }); this.calculateWater() },
      onStepsChange: (value) => { this.setState({ steps: value.target.value }); this.calculateWater() },
      onTemperatureChange: (value) => { this.setState({ temperature: value.target.value }); this.calculateWater() },
    };
  }
  calculateWater = () => {
    let quantity = 1.5
    if (this.state.temperature > 20) {
      quantity += 0.02 * this.state.temperature
    }
    else if (this.state.heart > 120) {
      quantity += 0.0008 * this.state.heart
    }
    else if (this.state.steps > 10000) {
      quantity += 0.00002 * this.state.steps
    }
    quantity = Math.round(quantity * 100) / 100
    this.setState({ water: quantity })
  }

  decrementSteps = () => {
    if (this.state.steps === 0) {
      return
    } else {
      this.setState({ steps: this.state.steps - 1000 });
      this.calculateWater()
    }
  };

  incrementSteps = () => {
    if (this.state.steps < 50000) {
      this.setState({ steps: this.state.steps + 1000 });
      this.calculateWater()
    } else {
      return
    }
  }

  calculateWater = () => {
    let quantity = 1.5
    if (this.state.temperature > 20) {
      quantity += 0.02 * this.state.temperature
    }
    else if (this.state.heart > 120) {
      quantity += 0.0008 * this.state.heart
    }
    else if (this.state.steps > 10000) {
      quantity += 0.00002 * this.state.steps
    }
    quantity = Math.round(quantity * 100) / 100
    this.setState({ water: quantity })
  }



  render() {
    return (

      <div className="container-fluid">
        <div className="row">
          <Box {...this.water} value={this.state.water} /> {/* Water */}
          <Box {...this.steps} onChange={this.state.onStepsChange} value={this.state.steps} minus={this.decrementSteps} plus={this.incrementSteps} min={stepsMin} max={stepsMax} /> {/* Steps */}
          <Box {...this.heart} onChange={this.state.onHeartChange} value={this.state.heart} min={heartMin} max={heartMax} /> {/* Heart */}
          <Box {...this.temperature} onChange={this.state.onTemperatureChange} value={this.state.temperature} min={tempMin} max={tempMax} /> {/* Temperature */}
        </div>
      </div>
    );
  }
}

export default App;


