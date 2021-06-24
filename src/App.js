import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';

const Hatpage = () => (
  <div>
    <img alt="gyu" src='https://i.ibb.co/c3XvV1b/hat.jpg'></img>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={Hatpage} />
      </Switch>
    </div>
  );
}

export default App;
