import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

export default class Infos extends Component {
  render() {
    return (
      <div>
        {this.props.film.filter((film) =>{
          return (film.id == this.props.match.params.id )}).map((film) => { 
          return (
            <div>
              <div className="cardInfos">
                <img className="card-img-top" src={film.image} alt="Card image cap" />
                <div className="card-body">
                  <h3 className="card-title">{film.title} </h3>
                  <p className="card-text">
                    {film.description}
                  </p>
                </div>
                <div className="list-group list-group-flush">
                  <p className="list-group-item"> <strong>Director:</strong> {film.director} </p>
                  <p className="list-group-item"><strong>Casting: </strong>{film.stars.join(", ")} </p>
                </div>
                <div className="card-body">
                  <Link to="/" className="card-link">
                    Home
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      // <div>
      //   {this.props.film.map(film, index)}
      // </div>
    );
  }
}
