import React, {
    useState
} from 'react'
import firebase from '../../firebase'
import {
    NavLink
} from 'react-router-dom'
import './Login.css'
import{useDispatch,useSelector} from 'react-redux'

function Login() {
    const onSubmit = e => {
        e.preventDefault()
      
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() => {
                return firebase.auth().signInWithEmailAndPassword(enterName,enterPassword)
                    .then(res => {

                        firebase.auth().onAuthStateChanged((users) => {
                            if (!users.emailVerified) {
                                // history.push('/verifyemail')
                                

                            } else {
                                // history.push('/dashboard')
                                dispatch({
                                    type:"Login",
                                    email:users.email,
                                    id:users.uid
                                })
                            }
                        })

                    })
                    .catch(err => {
                        alert(err)
                    })
            })
    }
    const data=useSelector((state)=>state)
    const dispatch=useDispatch()
    const [enterName, setName] = useState('')
    const [enterPassword, setPassword] = useState('')
    console.log(data.LoginReducer)
    return (
            <div>
                <div className="limiter">
        	<div className="container-login100">
        		<div className="wrap-login100">
        			<form className="login100-form validate-form p-l-55 p-r-55 p-t-178" onSubmit={onSubmit}>
        				<span className="login100-form-title">
        					Sign In
        				</span>

        				<div className="wrap-input100 validate-input m-b-16" data-validate="Please enter emai">
        					<input className="input100" type="email" name="email" onChange={e=>setName(e.target.value)} value={enterName}  placeholder="Email" required/>
        					<span className="focus-input100"></span>
        				</div>

        				<div className="wrap-input100 validate-input" data-validate = "Please enter password">
        					<input className="input100" type="password" name="password" onChange={e=>setPassword(e.target.value)} value={enterPassword} placeholder="Password" required/>
        					<span className="focus-input100"></span>
        				</div>

        				<div className="text-right p-t-13 p-b-23">
        					<span className="txt1">
        						Forgot
        					</span>

        					<NavLink to='/forgotpassword' className="txt2">
        						Username / Password?
        					</NavLink>
        				</div>

        				<div className="container-login100-form-btn">
        					<button className="login100-form-btn">
        						Sign in
        					</button>
        				</div>

        				<div className="flex-col-c p-t-170 p-b-40">
        					<span className="txt1 p-b-9">
        						Don’t have an account?
        					</span>

        					<NavLink to='/signup' className="txt3">
        						Sign up now
        					</NavLink>
        				</div>
        			</form>
        		</div>
        	</div>
        </div>

            </div>
    )
}

export default Login