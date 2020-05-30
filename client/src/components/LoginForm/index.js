import React from "react";

export default function LoginForm() {

  //Setting component's initial state
  // state = {
  //   email: "",
  //   password: "",
  // };

  // handleInputChange = event => {

  //   // Getting the value and name of the input which triggered the change
  //   let value = event.target.value;
  //   const name = event.target.name;

  //   if (name === "password") {
  //     value = value.substring(0, 15);
  //   }
  //   // Updating the input's state
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   this.setState({
  //     email: "",
  //     password: "",
  //   });
  // };


    return (
      <div>
      <form className="logininfo">
        <label>
          First Name:
          <br></br>
          <input 
          type="text" 
          name="First Name"
          placeholder="First Name" />
        </label><br></br>
        <label>
          Last Name:
          <br></br>
          <input 
          type="text" 
          name="Last Name" 
          placeholder="Last Name"/>
        </label><br></br>
        <label>
          Email:
          <br></br>
        <input
          //value={this.state.email}
          name="email"
          //onChange={this.handleInputChange}
          type="text"
          placeholder="Email Address"
        />
        </label>
        <br></br>
        <label>
          Password
          <br></br>
        <input
          //value={this.state.password}
          name="password"
          //onChange={this.handleInputChange}
          type="password"
          placeholder="Password"
        />
        </label>
        <br></br>
        <button 
        //onClick={this.handleFormSubmit}
        >
          Submit</button>
      </form>
    </div>
    )

  };





