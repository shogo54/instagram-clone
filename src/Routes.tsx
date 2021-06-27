import React, { useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../src/containers/Home';
import Login from '../src/containers/Login';
import Signup from '../src/containers/Signup';
import Profile from '../src/containers/Profile';
import { AuthContext } from './containers/Auth';

const Routes: React.FC = () => {
  const { user } = useContext(AuthContext);
  return user ? (
    <Profile />
  ) : (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/accounts/signup" component={Signup} />
      <Route exact path="/accounts/login" component={Login} />
    </Router>
  );
};

export default Routes;
