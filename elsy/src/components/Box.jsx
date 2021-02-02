import React from "react";

class Box extends React.Component {
  render() {
    return (
      <div className="box col-sm-3 col-6">
        <span
          style={{ fontSize: 100, color: this.props.color }}
          className="material-icons">
          {this.props.icon}
        </span>
        <p>
          {this.props.value}
          {this.props.unit}
        </p>
        {this.props.icon !== "local_drink" && this.props.icon !== "directions_walk" &&
          <input className="slider" type="range" min={this.props.min} max={this.props.max} value={this.props.value} onChange={this.props.onChange}/>
        }
        {this.props.icon === "directions_walk" &&
        <>
        <button className="btn btnMinus" onClick={this.props.minus}>-</button>
        <button className="btn btnPlus" onClick={this.props.plus}>+</button>
        </>
        }
      </div>
    );
  }
}

export default Box;
