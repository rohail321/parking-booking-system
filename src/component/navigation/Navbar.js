import React,{useState,useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import firebase from '../../firebase'
import './Navbar.css'


const Navbar = () => {

  
  const[user,setUser]=useState('')

  useEffect(()=>{
    currentUser().then((data)=>{
      checkUser(data)

    })
  },[])


  const checkUser=(data)=>{
    const db=firebase.firestore()
    const getDoc= db.collection('user')
    getDoc.where('id', '==', data).get()
    .then(res=>{
        res.forEach((result)=>{
           setUser(result.data().user)
           



        })
    })
}

  const currentUser=()=>{
    return new Promise((res,rej)=>{
      firebase.auth().onAuthStateChanged((user)=>{
          if(user){
              res(user.uid)
          }
          else{
              rej('False')
          }
      })
  })
  }
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
              <NavLink className='nav-link font-bold' to='/dashboard'  style={nav}>
               Home
              </NavLink>
            </li>
            {user==='admin'?( <li className='nav-item'>
              <NavLink className='nav-link font-bold' to='/bookingtable'  style={nav}>
              Booking Table
              </NavLink>
            </li>):('')}
           
           {user==='admin'?(<li className='nav-item'>
              <NavLink className='nav-link font-bold' to='/feedbacktable'  style={nav}>
              Feedback Table
              </NavLink>
            </li>):('')}
            
            {user==='customer'?(<li className='nav-item'>
              <NavLink className='nav-link font-bold' to='/booking'  style={nav}>
               Booking
              </NavLink>
            </li>):('')}
            
            
            
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
  