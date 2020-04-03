import React, {
    useState
} from 'react'
import firebase from '../../firebase'
import {
    NavLink
} from 'react-router-dom'
import './Login.css'
import{useDispatch,useSelector} from 'react-redux'
import LoginForm from'./LoginForm'

function Login() {
    
    const data=useSelector((state)=>state)
    const dispatch=useDispatch()
    const [enterName, setName] = useState('')
    const [enterPassword, setPassword] = useState('')
    console.log(data.LoginReducer)
    return (
            <div>
			   <LoginForm enterName={enterName} setName={setName}
			    enterPassword={enterPassword} setPassword={setPassword} dispatch={dispatch}  />
            </div>
    )
}

export default Login