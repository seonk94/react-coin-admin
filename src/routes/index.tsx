import React, { useContext } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { UserContext } from '../provider/UserProvider';
import SignIn from '../template/auth/SignIn';
import MainTemplate from '../template/main';
import AuthRoute from './AuthRoute';

function Root() {
  const { user } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <AuthRoute exact
          user={user}
          path="/"
          component={MainTemplate} />
        <Route exact
          path="/login"
          component={SignIn} />
        <Redirect path="*"
          to="/" />
      </Switch>
    </BrowserRouter>
  );
}
export default Root;
