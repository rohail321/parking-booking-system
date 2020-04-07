import React,{useState,useEffect} from 'react'
import './Booking.css'
import firebase from '../../firebase'
import BookingForm from './BookingForm'
import Parking from '../layout/Parking'
import ParkingForm from '../form/ParkingForm'
import {withRouter} from 'react-router'
import Drigh from './Drigh'
import Gulshan from './Gulshan'
const Booking = ({history}) => {
  const[enterName,setName]=useState('')
  const[enterContact,setContact]=useState('')
  const[enterArea,setArea]=useState('')
  const[enterSubmit,setSubmit]=useState(false)
  const[enterDate,setDate]=useState('')
  const[enterTime,setTime]=useState('')
  const[enterDuration,setDuration]=useState('')
  






let panel
  if(!enterSubmit){
   
    panel=(<BookingForm enterName={enterName}  setName={setName} enterContact={enterContact} 
      setContact={setContact} enterArea={enterArea} setArea={setArea}
      enterSubmit={enterSubmit} setSubmit={setSubmit}  enterDate={enterDate} setDate={setDate} enterTime={enterTime}
       setTime={setTime}
      enterDuration={enterDuration} setDuration={setDuration} />)
  }
  if(enterSubmit){
    if(enterArea==='gulshan'){
     panel=(<Gulshan name={enterName} contact={enterContact} area={enterArea} date={enterDate} from={enterTime} to={enterDate}   />)
    }
    else if(enterArea==='pechs'){ 
      panel=(<ParkingForm name={enterName} contact={enterContact} area={enterArea} date={enterDate} from={enterTime} to={enterDate} />)}
    else if(enterArea==='drigh'){
      panel=(<Drigh name={enterName} contact={enterContact} area={enterArea} date={enterDate} from={enterTime} to={enterDate} />)
    }
    
  }


 



    return (
        <div>
          
            {panel}
        </div>
    )
}

export default withRouter(Booking) 
