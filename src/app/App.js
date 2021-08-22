import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { DummyPage } from '../common/DummyPage';
import { LandingPage } from '../common/LandingPage';
import { NotFoundPage } from '../common/NotFoundPage';
import { AuthGuardedRoute } from '../features/signin/AuthGuardedRoute';
import  LoginPage  from '../features/signin/Login';

function App() {
  return (
    <div className="">
      <Switch>
        <AuthGuardedRoute exact path={['/', '/index']}>
          <LandingPage />
        </AuthGuardedRoute>
        <AuthGuardedRoute path={['/dummy', '/wtfk']}>
          <DummyPage />
        </AuthGuardedRoute>
        <AuthGuardedRoute path="/login">
          <LoginPage />
        </AuthGuardedRoute>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
