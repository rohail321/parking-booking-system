import React,{useState,useEffect} from 'react'
import firebase from '../../../firebase'

const BookingTable = () => {
    const [id,setId] =useState('')
    const [booking,setBooking] =useState([])

    useEffect(()=>{
        currentUser().then((data)=>{
            console.log(data)
            setId(data)
            console.log(id)
            checkBooking(data)
        })

    },[])
    
    const checkBooking=async (userId)=>{
        const db=await firebase.firestore()
        
            const getDoc=await db.collection('booking')
        const doc=await getDoc.where('id', '==', userId).get()
        doc.forEach((res)=>{
            setBooking(booking=>[...booking,res.data()])
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

      const changeHandler=(e,indexId,id)=>{
          const deleteUser=booking.filter((user)=>(id!==user.id))
          setBooking([...deleteUser])
          const db=firebase.firestore()
          let userdb= db.collection("booking").where('id', '==', id)
          userdb.get().then((res)=>{
              res.forEach((doc)=>{
                  doc.ref.delete()
              })
          })
        
          
      }

      let table
      if(booking){
          table=booking.map((data,index)=>(
            <tr key={index}>
            <td>{data.name}</td>
                <td>{data.contact}</td>
                <td>{data.slot}</td>
                <td>{data.date}</td>
                <td>{data.duration}</td>
                <td>{data.time}</td>
                <td>{data.area}</td>
                <td><button type="button" class="" onClick={(e)=>changeHandler(e,index,data.id)}><i class="fa fa-trash" aria-hidden="true"  style={{color:'red'}}></i>
</button></td>
          
          </tr>
          ))
      }
      
      else{
        table=( 
            <tr>
            <td>No Data</td>
            <td>No Data</td>
            <td>No Data</td>
            <td>No Data</td>
            <td>No Data</td>
            <td>No Data</td>
            <td>No Data</td>
            
            </tr>
       
   )
    }
    return (
        <div>
             <div class="table-responsive">
    <table class="table table-bordered">
      <thead>
        <tr>
        <th>Name</th>
            <th>Contact</th>
            <th>Slot</th>
            <th>Date</th>
            <th>Duration</th>
            <th>Time</th>
            <th>Area</th>
          
        </tr>
      </thead>
      <tbody>
        
        {table}
      </tbody>
    </table>
  </div>
</div>

            
                )
}

export default BookingTable
