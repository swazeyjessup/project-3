import React from "react";
import history from "../History/index"


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
      <div className="container">
      <div className="form-control">
      <form className="logininfo">
        <div className="form-group">
        <label>
          Email:
          <br></br>
             </label>
        <input
          //value={this.state.email}
          name="email"
          //onChange={this.handleInputChange}
          type="text"
          placeholder="Email Address"
          className="form-control items"/>
     
        
        <br></br>
        </div>
        <div className="form-group">
        <label>
          Password
          <br></br>
            </label>
        <input
          //value={this.state.password}
          name="password"
          //onChange={this.handleInputChange}
          type="password"
          placeholder="Password"
          className="form-control items"/>
      
        
        <br></br>
        </div>
        <button className="btn" 
        onClick={() => history.push('/Habits')}
        //onClick={this.handleFormSubmit}
        >
          Login</button>
      </form>
    </div>
    </div>
    )

  };





