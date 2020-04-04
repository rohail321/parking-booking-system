import React,{useState,useEffect} from 'react'
import './Booking.css'
import firebase from '../../firebase'
import BookingForm from './BookingForm'
import Parking from '../layout/Parking'
import ParkingForm from '../form/ParkingForm'
import {withRouter} from 'react-router'
const Booking = ({history}) => {
  const[enterName,setName]=useState('')
  const[enterContact,setContact]=useState('')
  const[enterArea,setArea]=useState('')
  const[enterSubmit,setSubmit]=useState(false)
  const[enterDate,setDate]=useState('')
  const[enterTime,setTime]=useState('')
  const[enterDuration,setDuration]=useState('')
  const[enterSlot,setSlot]=useState()
  const [enterUser,setUser]=useState([])
  
  
  
  useEffect(()=>{
    getData()
    
  },[])
  let array=[]
  
  const getData= async ()=>{
    const snapshot = await firebase.firestore().collection('booking').get()
    snapshot.docs.forEach((res=>{
      array.push(res.data())
      setUser(array)

      

      
    }))
    
    
}
const clickHandler=(e)=>{
  let slt=[]
  enterUser.forEach((res)=>{
    slt.push(res.slot)
  })
  if(slt.includes(e.target.id)){
    alert('booked')
    window.location.reload()
  }
  else if(!slt.includes(e.target.id)){
    const slotId=e.target.id
      setSlot(e.target.id)
      
      currentUser().then((data)=>{
        const db=firebase.firestore()
            db.collection('booking').add({id:data,name:enterName,contact:enterContact,area:enterArea,
              date:enterDate,time:enterTime,duration:enterDuration,slot:slotId})
            .then((res)=>{
              
               
               if(res.slot===slotId)alert('already booked')
               alert('Parking Space Book')
               window.location.reload()
              
            })
            .catch(err=>{
                alert(err)
            })
                })

  }

  

  
  
 
 

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



let panel
  if(!enterSubmit){
    panel=(<BookingForm enterName={enterName}  setName={setName} enterContact={enterContact} 
      setContact={setContact} enterArea={enterArea} setArea={setArea}
      enterSubmit={enterSubmit} setSubmit={setSubmit}  enterDate={enterDate} setDate={setDate} enterTime={enterTime}
       setTime={setTime}
      enterDuration={enterDuration} setDuration={setDuration} />)
  }
  if(enterSubmit){
    panel=(<ParkingForm click={e=>clickHandler(e)} enterSlot={enterSlot} enterUser={enterUser} />)
  }


 



    return (
        <div>
          
            {panel}
        </div>
    )
}

export default withRouter(Booking) 
