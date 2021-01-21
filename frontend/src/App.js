import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import './bootstrap.min.css';

function App() {
  return (

    <>
      <Switch>
        <Route exact path={["/login", "/"]} component={Login} ></Route>
        <Route exact path='/dashboard/*' component={Dashboard} ></Route>
        <Route path='*' exact={true} component={Login} ></Route>
      </Switch>
    </>
  )
}


export default App;
