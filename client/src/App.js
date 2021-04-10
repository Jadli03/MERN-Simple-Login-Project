import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile  from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import Error from './components/Error';
import {Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
    <Navbar />
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route  path="/profile" component={Profile}/>
    <Route path="/login" component={Login}/>
    <Route  path="/signup" component={Signup}/>
    <Route   component={Error}/>
   </Switch> 
   </div>
   )
}
export default App;
