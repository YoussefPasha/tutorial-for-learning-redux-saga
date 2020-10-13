import React, { Component } from "react";
import { Form } from "reactstrap";
class NewUserForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return <Form onSubmit={this.handleSubmit}></Form>;
  }
}

export default NewUserForm;
