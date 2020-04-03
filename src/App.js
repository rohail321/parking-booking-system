import React from 'react';
import './App.css';
import Signup from './component/auth/Signup'
import Login from './component/auth/Login'
import Dashboard from './component/dashboard/Dashboard'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Verify from './Verify'
import PrivateRoute from './PrivateRoute'
import{useDispatch,useSelector} from 'react-redux'
import ForgotPassword from './component/form/ForgotPassword'



function App() {
  const data=useSelector(state=>state)
  console.log(data.LoginReducer.isAuth)
  return (
    <Router>
    
      <Switch>
      <Route path='/' exact><Login/></Route>
      <Route path='/signup' exact ><Signup/></Route>
      <PrivateRoute path='/dashboard'  exact isAuth={data.LoginReducer.isAuth} component={Dashboard} />
      <Route path='/forgotpassword'><ForgotPassword/></Route>
      <Route path='/verify'><Verify/></Route>
      </Switch>
      
    </Router>
  );
}

export default App;
