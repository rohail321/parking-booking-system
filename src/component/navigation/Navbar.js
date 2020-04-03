import React from 'react'
import {NavLink} from 'react-router-dom'
import firebase from '../../firebase'
import './Navbar.css'


const Navbar = () => {
    return (
        <nav
        className='mb-4 navbar navbar-expand-lg navbar-light pink lighten-4  '
        style={{
          background: "#f3f3f5",
          marginBottom: "0 !important",
          border: "0 !important"
        }}
      >
        <a className='navbar-brand font-bold' href='#'>
          
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto' style={{ marginRight: "150px" }}>
            
            
            
            <li className='nav-item'>
              <NavLink className='nav-link font-bold' to='' onClick={()=>(firebase.auth().signOut())} style={nav}>
                Signout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar
const nav = {
    fontFamily: "Josefin Sans",
    fontSize: "16px",
    color: "black",
    marginLeft: "10px"
  };
  