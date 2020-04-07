import React from 'react';
import './App.css';
import Signup from './component/auth/Signup'
import Login from './component/auth/Login'
import Dashboard from './component/dashboard/Dashboard'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Verify from './Verify'
import PrivateRoute from './PrivateRoute'
import{useSelector} from 'react-redux'
import ForgotPassword from './component/form/ForgotPassword'
import Booking from './component/table/user/Booking'
import BookingAdmin from './component/table/Admin/BookingAdmin'
import Feedback from './component/table/Admin/Feedback'



function App() {
  const data=useSelector(state=>state)

 

  return (
    <Router>
    
      <Switch>
      <Route path='/' exact><Login/></Route>
      <Route path='/signup' exact ><Signup/></Route>
      <PrivateRoute path='/dashboard'  exact isAuth={data.LoginReducer.isAuth} component={Dashboard} />
      <PrivateRoute path='/booking'  exact isAuth={data.LoginReducer.isAuth} component={Booking} />
      <PrivateRoute path='/bookingtable'  exact isAuth={data.LoginReducer.isAuth} component={BookingAdmin} />
      <PrivateRoute path='/feedbacktable'  exact isAuth={data.LoginReducer.isAuth} component={Feedback} />
      <Route path='/forgotpassword'><ForgotPassword/></Route>
      <Route path='/verify'><Verify/></Route>
      </Switch>
      
    </Router>
  );
}

export default App;
