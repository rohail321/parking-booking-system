import React,{useEffect,useState} from 'react'
import './Feedback.css'
import firebase from '../../firebase'

const Feedback = () => {
  const[enterName,setName]=useState('')
  const[enterEmail,setEmail]=useState('')
  const[enterContact,setContact]=useState('')
  const[enterFeedback,setFeedback]=useState('')

  const submitHandler=(e)=>{
    e.preventDefault()
    currentUser().then((data)=>{
      const db=firebase.firestore()
      db.collection('feedback').add({id:data,name:enterName,email:enterEmail,contact:enterContact,feedback:enterFeedback})
    .catch(err=>{
        alert(err)
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
            <div className="container" >  
  <form id="contact" onSubmit={submitHandler} >
    <h3>Feedback</h3>
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" name='name' value={enterName} onChange={e=>setName(e.target.value)} required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" name='email' value={enterEmail} onChange={e=>setEmail(e.target.value)} required />
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number" type="tel" tabindex="3" name='contact' value={enterContact} onChange={e=>setContact(e.target.value)}  required/>
    </fieldset>
    
    <fieldset>
      <textarea placeholder="Type your Message Here...." tabindex="5" name="feedback"value={enterFeedback} onChange={e=>setFeedback(e.target.value)} required/>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
 
  
</div>
        
    )
}

export default Feedback