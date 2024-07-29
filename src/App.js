
import NavBar from './Navbar';
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import Blogdetails from './Blogdetails';
import Notfound from './Notfound';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route  path='/create'>
              <Create/>
            </Route>
            <Route  path='/blogs/:id'>
              <Blogdetails />
            </Route>
            <Route path='*'>
              <Notfound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
