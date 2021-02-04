import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div className="row">
        <button
          className="btn btn-outline-primary"
          onClick={this.props.onClick}
        ></button>
      </div>
    );
  }
}
