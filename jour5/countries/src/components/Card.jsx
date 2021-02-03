import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <img className="card-img-top" src={this.props.img} alt="flag" />
          <div className="card-body">
            <h5 className="card-title"><strong>{this.props.pays}</strong></h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Capitale :<strong> {this.props.capitale}</strong></li>
            <li className="list-group-item">
              Popultation : <strong>{this.props.pop}</strong>
            </li>
            <li className="list-group-item">Continent : <strong>{this.props.continent}</strong></li>
          </ul>
        </div>
      </div>
    );
  }
}
