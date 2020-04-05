import React,{useEffect,useState} from 'react'
import Navbar from '../navigation/Navbar'
import bg from '../../asset/1.png'
import Footer from '../layout/Footer'
import Booking from '../form/Booking'
import firebase from '../../firebase'

function Dashboard() {

  const[user,setUser]=useState('')

  useEffect(()=>{
    currentUser().then((data)=>{
      checkUser(data)

    })
  },[])


  const checkUser=(data)=>{
    const db=firebase.firestore()
    const getDoc= db.collection('user')
    getDoc.where('id', '==', data).get()
    .then(res=>{
        res.forEach((result)=>{
           setUser(result.data().user)



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
        <div style={{backgroundImage:`URL(${bg})`,height: "557px",
        backgroundSize: "",
        backgroundRepeat: "no-repeat",
        backgroundColor:'lightgrey'
        }}>

          <Navbar/>

          <h1 style={{color:'white',marginTop:'100px'}}>Book Your Parking Space!</h1>
          <section>
            <Booking/>
            
          </section>
         
          

          <Footer/>
          
        </div >
    )
}

export default Dashboard
