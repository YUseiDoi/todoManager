import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';
import Top from './Top';

export default () => {
  return (
    <Router>
        <Switch>
          <Route path='/signin' exact>
            <SignIn />
          </Route>
          <Route path='/signup' exact>
            <SignUp />
          </Route>
          <Route path='/' exact>
            <Top />
          </Route>
          <Route path='' exact>
            <Top />
          </Route>
        </Switch>
        <Link to='/'>Top</Link>
        <Link to='/signin'>SignIn</Link>
        <Link to='/signup'>SignUp</Link>
    </Router>
  );
};
