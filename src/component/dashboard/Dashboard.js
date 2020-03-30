import React from 'react'
import {NavLink} from 'react-router-dom'
import firebase from '../../firebase'

function Dashboard() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to='/dashboard'>  
</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to='/dashboard'>Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to='/dashboard/vacancy'>Vacancy</NavLink>
      </li>
     
      
     
      
    
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to='' id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Welcome 
        </NavLink>
        <div className="dropdown-menu"  style={{backgroundColor:'white'}}aria-labelledby="navbarDropdownMenuLink">
          <NavLink className="dropdown-item" to='' style={{color:'black',backgroundColor:'white'}} onClick={()=>(firebase.auth().signOut())}>signOut</NavLink>
        </div>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Dashboard
