import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


export default class Card extends Component {
  render() {
    return (
      <div>
        {this.props.film.map((film) => {
          return (
            <div className="card">
            <Link to={`/${film.id}`}><img
                className="card-img-top"
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
