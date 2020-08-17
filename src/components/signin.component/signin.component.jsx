import React from "react";

import "./signin.styles.scss";
import FormInput from "../forminput/frominput.component";
import CustomButton from "../custombutton/custombutton.component";
import { auth , signInWithGoogle } from "../firebase/firebase.file";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",

      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { email,password} = this.state;
    try{
       auth.signInWithEmailAndPassword(email,password);

      this.setState({ email: "", password: "" });
    }
   catch (error){
     console.log("try one more time");
   }
  };
  HandleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I have already account </h2>
        <span>Sign in with your Email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            value={this.state.email}
            
            name="email"
            HandleChange={this.HandleChange}

            label='email'
          />
         
          <FormInput
            type="password"
            value={this.state.password}
            name="password"
            HandleChange={this.HandleChange}

            label ='password'
          />
          
          <CustomButton type="submit">Sign In</CustomButton>
          <br />
    <CustomButton onClick={signInWithGoogle}  >Sign In with Google</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignIn;
