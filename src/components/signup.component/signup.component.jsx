import React from "react";
import "./signup.styles.scss";
import CustomButton from "../custombutton/custombutton.component";
import {auth , createUserProfileDocument } from "../firebase/firebase.file";
import FormInput from "../forminput/frominput.component";


class Signup extends React.Component {

 constructor(){
    super();

    this.state ={
        displayName : '',
        email : '' ,
        password : '' ,
        confirmpassword : ''
    }

 }
 
 submithandler = async event =>
 {
    event.preventDefault();
const {displayName , email , password , confirmpassword } = this.state;

 if(password !== confirmpassword){
     alert("password dont match");
     return ; 

 }
 try {
const { user } = await auth.createUserWithEmailAndPassword(email,password);
await createUserProfileDocument(user,{displayName});


this.setState({
    displayName : '',
    email : '' ,
    password : '' ,
    confirmpassword : ''


});

 }
 catch(error){
     console.error(error);
 }

 

 };
 
 handleChange = event =>{
     const { name , value} = event.target;
     this.setState({ [name]:value });
 };

 render() {

    const {displayName , email , password , confirmpassword } = this.state;
     return (
         <div className="sign-up">
        <h2 className="title">I dont have a account</h2>
        <span>Sign Up wth Your email</span>
        <form className="sign-up-form" onSubmit={this.submithandler}>
         <FormInput 
         type ="text"
         value ={displayName}
         onChange ={this.handleChange}
         name = "displayName"
         label ='Dispaly Name'
         required

         
         
         
         />
         <FormInput 
         type ="email"
         value ={email}
         onChange ={this.handleChange}
         name = "email"
         label ='email'
         required

         
         
         
         />
         <FormInput 
         type ="password"
         value ={ password }
         onChange ={this.handleChange}
         name = "password"
         label ='Password'
         required

         
         
         
         />
         <FormInput 
         type ="password"
         value ={ confirmpassword }
         onChange ={this.handleChange}
         name = "confirmpassword"
         label ='Confirm Password'
         required

         
         
         
         />
         <CustomButton type="submit">Sign UP</CustomButton>

        </form>

         </div>

     )}}
 


 export  default Signup ;