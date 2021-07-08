import React from "react";


const initialState = {
  name: "",
  email: "",
  contact: "",
  nameError: "",
  emailError: "",
  contactError: ""
};

export default class ValiationForm extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let contactError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }
    if (this.state.contact.length !== 10) {
      contactError = "contact should be of 10 digit";
    }
    if (emailError || nameError || contactError) {
      this.setState({ emailError, nameError, contactError });
      return false;
    }

    return true;
  };
  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="row ">
            <div className="col-3"></div>
            <div className="col-6 ">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" className="form-control" id="name" value={this.state.name} onChange={this.handleChange} placeholder="Type name here..." />
                <small className="errors">{this.state.nameError}</small>
              </div>
              <div className="form-group">
                <label htmlFor="mail">Email:</label>
                <input type="email" name="email" className="form-control" id="mail" value={this.state.email} onChange={this.handleChange} placeholder="Abc@gmail.com" />
                <small className="errors">{this.state.emailError}</small>
              </div>
              <div className="form-group">
                <label htmlFor="cont">Contact:</label>
                <input type="text" name="contact" maxLength="10" className="form-control" id="cont" value={this.state.contact} onChange={this.handleChange} placeholder="Phone Number..." />
                <small className="errors">{this.state.contactError}</small>
              </div>
              <address>Address:</address>
              <textarea name="add" id="" cols="70" rows="2"></textarea>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-3"></div>
            <div className="col-1">
              <button type="submit" className="btn btn-dark savebtn"> Save </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}