import React, { Component } from "react";
import axios from "axios";
import "./DeleteBox.css";

class DeleteBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: ""
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    console.log(this.state);
    axios
      .delete(
        `http://localhost:4000/people/delete/${this.state.id}`,
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
    const { id } = this.state;
    return (
      <div className="create-box-container">
        <h2>Input a characters id to delete them</h2>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default DeleteBox;
