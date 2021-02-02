import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div className="container ">
          <div className="row d-flex justify-content-center">
          <h1>Login</h1>
          </div>
        <div className="row d-flex justify-content-center">
          <form className="col-6">
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className={this.props.emailClass}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange ={this.props.email}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className={this.props.passwordClass}
                id="exampleInputPassword1"
                placeholder="Password"
                onChange ={this.props.password}
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label">
                Remember me
              </label>
            </div>
            <button type="submit" className={this.props.buttonClass} >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
