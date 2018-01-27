import React, { Component } from 'react';
import Home from './Home';
import AboutMain from './About/AboutMain';
import Work from './Work/Work';
import Contact from './Contact/Contact';
import WorkHome from './Work/WorkHome';

import { Switch, Route } from 'react-router';
import { Router } from 'react-router-dom';
import { useRouterHistory } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

const location = {
  pathname: '/',
}

class App extends Component { 
  constructor() {
    super();
    this.state = {
      showMain: false
    }
  }

  handleOnClick(newState) {
    this.setState({showMain: newState})
  }

  render() {
    return(
      <div>
        <Router history={history}>
            <Switch>   
              <Route 
                exact path='/' 
                render={()=><Home/>}
              />
              <Route exact path='/about' component={AboutMain}/>
              <Route exact path='/work' component={Work}/>
              <Route exact path='/contact' component={Contact}/>
            </Switch> 
        </Router>
        {this.state.showMain ?
          <WorkHome handleOnClick={this.handleOnClick.bind(this)}/>
        : null }
      </div>
    )
  }
}

export default App;