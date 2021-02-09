import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


export default class Card extends Component {
  render() {
    return (
      <div className="row">
        {this.props.film.map((film) => {
          return (
            <div className="col-3 affiche">
            <Link to={`/${film.id}`}><img
                className="card-img-top1"
                src={film.image}
                alt="Card image cap"
              /></Link>
            </div>
          );
        })}
      </div>
    );
  }
}
