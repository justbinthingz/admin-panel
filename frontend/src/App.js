import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import './bootstrap.min.css';

function App() {
  return (

    <>
      <Switch>
        <Route exact path={["/login", "/", "**"]} component={Login} ></Route>
        <Route exact path='/dashboard/*' component={Dashboard} ></Route>
      </Switch>
    </>
  )
}


export default App;
