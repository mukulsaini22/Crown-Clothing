import React from "react";
import "./App.css";
import Homepage from "./pagecomponent/homepage/homepage.component";
import { Route, Switch,Redirect } from "react-router-dom";
import ShopPage from "./pagecomponent/shoppage/ShopPage.component"
import {connect }from "react-redux";
import Header from "./components/headercomponent/header.component"
import Signpage from "./pagecomponent/signinpage/signin-signup.page";
import { setCurrentUser } from "../src/redux/user/actionuser";
import { auth  , createUserProfileDocument } from "./components/firebase/firebase.file";
import {createStructuredSelector} from 'reselect';
import {UserCurrentStateSelect} from "./redux/user/user.selector";
import CheckoutPage from "../src/pagecomponent/checkout/checkout"
class App extends React.Component {

unsubscribeFromAuth = null;
componentDidMount()
{

  

  {/* check the userauth sign in if true then call the object for initialize in 
  firebase*/}

  this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
  
    if(userAuth)
    {
      
    const userRef = await createUserProfileDocument(userAuth);
    userRef.onSnapshot(snapShot => {
      this.props.setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
  
        });
  
      });
console.log(this.state)
  

    

  }

    this.props.setCurrentUser(userAuth);
  })

}

componentWillUnmount(){

  this.unsubscribeFromAuth();
}


      render(){
        
        
        return (
        <div>
              <Header />
              <Switch>
              <Route  exact path = '/' component = {Homepage} />
              <Route   path = '/shop' component = {ShopPage} />
              <Route  exact path = '/checkout' component = {CheckoutPage} />

              <Route  exact path = '/signin' render = { ()=>
             this.props.currentState ? (<Redirect to ='/'/> ):(<Signpage/>) 
              }/>
        
              </Switch>
            </div>
          );
        
        
        }



}
const mapStateToProps = createStructuredSelector({

  currentState : UserCurrentStateSelect
})
 
const mapDispatchtoProps =dispatch =>({


setCurrentUser:user =>dispatch(setCurrentUser(user))


});

export default connect(mapStateToProps,mapDispatchtoProps)(App);


