import React, { Component } from "react";
import axios from "axios";
import "./CreateBox.css";

class CreateBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: ""
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post("https://ghibli-api-tse.herokuapp.com/people/create", this.state)
      .then(response => {
        console.log(response);
        this.props.closeHandler();
        this.props.afterCreate();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { name, gender } = this.state;
    return (
      <div className="create-box-container">
        <h2>Create a character</h2>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              value={gender}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateBox;
