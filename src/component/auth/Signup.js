import React,{useState} from 'react'
import SignupForm from './SignupForm'



function Signup(props) {
    const [enterEmail,setEmail]=useState('')
    const [enterName,setName]=useState('')
    const [enterPassword,setPassword]=useState('')
    const [enterPassword1,setPassword1]=useState('')
    const [enterUser,SetUser]=useState('')

   

    return (
        <div>
            <SignupForm  enterUser={enterUser} SetUser={SetUser} enterEmail={enterEmail} setEmail={setEmail} enterName={enterName} setName={setName}
             enterPassword={enterPassword} setPassword={setPassword} enterPassword1={enterPassword1} setPassword1={setPassword1} />
        </div>
    )
}

export default Signup
