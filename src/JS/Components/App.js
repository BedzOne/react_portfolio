import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Work from './Work/Work';
import Contact from './Contact';

import { Switch, Route } from 'react-router';
import { Router } from 'react-router-dom';
import { useRouterHistory } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class App extends Component { 
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <Router history={history}>
          <Switch>   
            <Route exact path='/' render={() => <Home/>} />
            <Route exact path='/about' component={About}/>
            <Route exact path='/work' component={Work}/>
            <Route exact path='/contact' component={Contact}/>
          </Switch> 
        </Router>
      </div>
    )
  }
}

export default App;