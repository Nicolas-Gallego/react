import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary"
          isSelected={this.props.isSelected}
          onClick={this.props.onClick}
          children={this.props.children}
        ></button>
      </div>
    );
  }
}
