import React,{useState} from 'react'
import firebase from '../../firebase'
import './Signup.css'




function Signup(props) {
    const [enterEmail,setEmail]=useState('')
    const [enterName,setName]=useState('')
    const [enterPassword,setPassword]=useState('')
    const [enterPassword1,setPassword1]=useState('')

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
                })
    
                firebase.auth().onAuthStateChanged((user)=>{
                    user.sendEmailVerification(actionCodeSettings)
                if(enterPassword!==enterPassword1){
                    alert('Password dont match')
                }
        
                else{
                    
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
        
        
        


      </fieldset>
      <button type="submit" className='btn btn-success' style={{height:'50px',fontSize:'20px'}}>Sign Up</button>
    </form>
        </div>
    )
}

export default Signup
