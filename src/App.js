
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';


import { auth } from './firebase/firebase.uitils';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import SigninSignup from './pages/sign-in-and-sign-up/signin-signup.component';
import HeaderPage from './pages/header/header.component';


class App extends React.Component {
   
  constructor() {
    super()

    this.state = {
      crentUser :null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth =  auth.onAuthStateChanged( user => {
      this.setState({ crentUser:user})

      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth(console.log('hi'));
  }

  render () {

  return (
    <div>
      <HeaderPage currentUser= {this.state.crentUser} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SigninSignup} />
      </Switch>
    </div>
  );
}
}

export default App;
