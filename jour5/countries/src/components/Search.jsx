import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className="row">
                <input type="text" placeholder="Rechercher un Pays" className="form-control-m" onChange={this.props.onChange}></input>
                <button class="btn btn-outline-primary" onClick={this.props.onClick}>Search</button>
            </div>
        )
    }
}
