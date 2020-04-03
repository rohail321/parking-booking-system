import React from 'react'
import firebase from '../../firebase'
import './Signup.css'
import {withRouter} from 'react-router'
const SignupForm = ({history,enterUser,SetUser,enterEmail,setEmail,enterName,setName,enterPassword,setPassword,enterPassword1,setPassword1}) => {
    
    const submitHandler=e=>{
        e.preventDefault()
        var actionCodeSettings = {
            url: 'http://localhost:3000',
            
            handleCodeInApp: true
          };
        firebase.auth().createUserWithEmailAndPassword(enterEmail,enterPassword)
            .then((res)=>{
                console.log(res.user.uid)
                const db=firebase.firestore()
                db.collection('user').doc(res.user.uid).set({
                    id:res.user.uid,
                    email:enterEmail,
                    name:enterName,
                    user:enterUser
                })
    
                firebase.auth().onAuthStateChanged((user)=>{
                    user.sendEmailVerification(actionCodeSettings)
                if(enterPassword!==enterPassword1){
                    alert('Password dont match')
                }
        
                else{
                    history.push('/verify')
                }
                })

            })
            .catch(err=>{
                alert(err)
            })
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
      
      <h1>Sign Up</h1>
      <fieldset>
        <legend><span className="number">1</span>Your basic info</legend>
        <label htmlFor="mail">Email:</label>
        <input type="email" id="mail" name="email" onChange={e=>setEmail(e.target.value)} value={enterEmail}   required  />
        <label htmlFor="mail">Name:</label>
        <input type="text" id="name" name="name" onChange={e=>setName(e.target.value)} value={enterName}  required  />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={e=>setPassword(e.target.value)} value={enterPassword}  required />
        <label htmlFor="password">Retype-Password:</label>
        <input type="password" id="password" name="password1" onChange={e=>setPassword1(e.target.value)} value={enterPassword1} required />
        <input type="radio" id="student" value="customer" checked={enterUser==='customer'} onChange={(e)=>SetUser(e.target.value)}  name="customer"  /><label htmlFor="customer" className="light">Customer</label><br/>
        <input type="radio" id="company" value="admin" checked={enterUser==='admin'} onChange={(e)=>SetUser(e.target.value)} name="admin" /><label htmlFor="admin" className="light">Admin</label><br/>
        
        


      </fieldset>
      <button type="submit" className='btn btn-success' style={{height:'50px',fontSize:'20px'}}>Sign Up</button>
    </form>
            
        </div>
    )
}

export default withRouter(SignupForm) 
