import React from 'react'
import './Footer.css'
import Feedback from '../form/Feedback'

const Footer = () => {
    
    return (
            <footer className="site-footer"  >
      <div className="container">
        <div className="row">
          
          <div className="col-md-6 col-md-12">
           
           <Feedback/>
          </div>
          

     </div>
     </div>
</footer>
            
    )
}

export default Footer
