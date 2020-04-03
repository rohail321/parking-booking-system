import React,{useState} from 'react'
import firebase from '../../firebase'
const ForgotPassword = () => {
    const[email,setEmail]=useState('')

   const onSubmit=(e)=>{
        e.preventDefault()
        let auth = firebase.auth();
        auth.sendPasswordResetEmail(this.state.email).then(function() {
            alert('Email Send')
          }).catch(function(error) {
            alert(error)
          });

    }

    return (
        <div>
            <div style={formGap}></div>
<div className="container" style={{marginLeft:'250px'}}>
	<div className="row">
		<div className="col-md-12 col-md-offset-4">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="text-center">
                  <h3><i className="fa fa-lock fa-4x"></i></h3>
                  <h2 className="text-center">Forgot Password?</h2>
                  <p>You can reset your password here.</p>
                  <div className="panel-body">
    
                    <form id="register-form" role="form" autocomplete="off" className="form" onSubmit={onSubmit}>
    
                      <div className="form-group">
                        <div className="input-group">
                          <input id="email" name="email" placeholder="email address" className="form-control" value={email}  
                          onChange={e=>setEmail(e.target.value)} type="email"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <input name="recover-submit" className="btn btn-lg btn-primary btn-block" value="Reset Password" type="submit"/>
                      </div>
                      
                    </form>
    
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div></div>
        </div>
    )
}

export default ForgotPassword
const formGap ={
    paddingTop: '90px'
}