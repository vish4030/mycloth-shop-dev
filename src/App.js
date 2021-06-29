
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';


import { auth, createUserProfile } from './firebase/firebase.uitils';
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
    this.unsubscribeFromAuth =  auth.onAuthStateChanged( async (userAuth) => {
      if(userAuth) {
        const userRef = await createUserProfile(userAuth);
        
        userRef.onSnapshot( snapShot => {

          this.setState (
            {
              currentUser: {
                id:snapShot.id,
                ...snapShot.data()
              }
        });
        console.log(this.state);

        } );
      }
      this.setState({ currentUser:userAuth })
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
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
