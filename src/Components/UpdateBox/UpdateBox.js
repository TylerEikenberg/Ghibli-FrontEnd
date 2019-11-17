import React, { Component } from "react";
import axios from "axios";
import "./UpdateBox.css";

class UpdateBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
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
      .put(
        `https://ghibli-api-tse.herokuapp.com/people/update/${this.state.id}`,
        this.state
      )
      .then(response => {
        console.log(response);
        this.props.closeHandler();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { id, name, gender } = this.state;
    return (
      <div className="create-box-container">
        <h2>Update a character</h2>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="id"
              placeholder="ID"
              value={id}
              onChange={this.changeHandler}
            />
          </div>
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

export default UpdateBox;
