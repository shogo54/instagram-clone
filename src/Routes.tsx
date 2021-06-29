import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { AuthContext } from './containers/Auth';
import Home from './domain/Home';
import Login from './domain/Login';
import Profile from './domain/Profile';
import Signup from './domain/Signup';

const Routes: React.FC = () => {
  const { user } = useContext(AuthContext);
  return user ? (
    <Router>
      <Route exact path='/' component={Profile} />
      <Redirect to='/' />
    </Router>
  ) : (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/accounts/signup' component={Signup} />
      <Route exact path='/accounts/login' component={Login} />
      <Redirect to='/' />
    </Router>
  );
};

export default Routes;
