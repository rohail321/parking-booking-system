import React from 'react';
import './App.css';
import Signup from './component/auth/Signup'
import Login from './component/auth/Login'
import Dashboard from './component/dashboard/Dashboard'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    
      <Switch>
      <Route path='/' exact><Login/></Route>
      <Route path='/signup' exact ><Signup/></Route>
      <Route path='/dashboard' exact ><Dashboard/></Route>
      </Switch>
      
    </Router>
  );
}

export default App;
