import { Route, Switch } from 'react-router-dom';
import './App.css';



import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import SigninSignup from './pages/sign-in-and-sign-up/signin-signup.component';
import HeaderPage from './pages/header/header.component';

function App() {
  return (
    <div>
      <HeaderPage />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SigninSignup} />
      </Switch>
    </div>
  );
}

export default App;
