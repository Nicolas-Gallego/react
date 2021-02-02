import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./components/Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      classEmail: "form-control is-invalid",
      classPassword: "form-control is-invalid",
      buttonClass: "btn btn-primary disabled",
      emailValid: false,
      passwordValid: false,
      onEmailChange: (e) => {
        this.setState({ email: e.target.value })
        let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (reg.test(this.state.email)) {
          this.setState ({classEmail: "form-control is-valid"})
          this.setState({emailValid: true})
        } else {
          this.setState ({classEmail: "form-control is-invalid"})
        }
        this.isValid()
      },
      onPasswordChange: (e) => {
        this.setState({ password: e.target.value})
        if (this.state.password.length >= 7){
          this.setState ({classPassword: "form-control is-valid"})
          this.setState({passwordValid: true})
        } else {
          this.setState ({classPassword: "form-control is-invalid"})
        }
        this.isValid()
      }
    };
  }

  isValid = () => {
    if (this.state.passwordValid === true && this.state.emailValid === true){
      this.setState({buttonClass: "btn btn-primary"})
    } else {
      this.setState({buttonClass: "btn btn-primary disabled"})
    }
  }
  

  render() {
    return (
      <Form email={this.state.onEmailChange} emailClass={this.state.classEmail} password={this.state.onPasswordChange} passwordClass={this.state.classPassword} buttonClass={this.state.buttonClass} />
    );
  }


}
export default App;
