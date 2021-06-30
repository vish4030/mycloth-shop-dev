
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';


import './App.css';

import { setCurrentUser } from './redux/users/user.action';
import { auth, createUserProfile } from './firebase/firebase.uitils';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import SigninSignup from './pages/sign-in-and-sign-up/signin-signup.component';
import Header from './components/header/header.component';


class App extends React.Component {
   
  

  unsubscribeFromAuth = null;

   componentDidMount() {
     const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapShot => {
         setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
         }) 
        })
         
      }

      setCurrentUser( userAuth );
   
    });
  }
  

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {

  return (
    <div>
      <Header  />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SigninSignup} />
      </Switch>
    </div>
  );
}
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
