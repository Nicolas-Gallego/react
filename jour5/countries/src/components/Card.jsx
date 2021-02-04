import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <img className="card-img-top" src={this.props.img} alt="flag" />
          <div className="card-body">
            <h5 className="card-title mb-0"><strong>{this.props.pays}</strong></h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <i className="fas fa-landmark fa-lg"></i> Capitale :<strong> {this.props.capitale}</strong></li>
            <li className="list-group-item"> <i className="fas fa-users fa-lg"></i>  Popultation : <strong>{this.props.pop}</strong></li>
            <li className="list-group-item"><i className="fas fa-globe-europe fa-lg"></i>  Continent : <strong>{this.props.continent}</strong></li>
          </ul>
        </div>
      </div>
    );
  }
}
