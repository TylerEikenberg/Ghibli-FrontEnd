import React, { useState } from "react";
import axios from "axios";
import "./CreateBox.css";

/**
 * recreate createBox for state to be handled by hooks
 */

function CreateBox(props) {
  // this.state = {
  //   name: "",
  //   gender: ""
  // };

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const changeHandler = event => {
    if (event.target.name === "gender") {
      console.log(event.target.value);
      setGender({ [event.target.name]: event.target.value });
    }
    if (event.target.name === "name") {
      console.log(event.target.value);
      setName({ [event.target.name]: event.target.value });
    }
  };

  const submitHandler = event => {
    event.preventDefault();

    axios
      .post("https://ghibli-api-tse.herokuapp.com/people/create", {
        name: name.name,
        gender: gender.gender
      })
      .then(response => {
        console.log(response);
        props.closeHandler();
        props.afterCreate();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="create-box-container">
      <h2>Create a character</h2>
      <form className="create-box-form" onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={changeHandler}
          />
        </div>
        <div>
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            onChange={changeHandler}
          />
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateBox;
