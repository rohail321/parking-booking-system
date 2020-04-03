import React,{useEffect,useState} from 'react'
import firebase from '../../../firebase'

const BookingTable = () => {

    const [booking, setBooking] = useState([])
    useEffect(() => {
        let array=[]
       getBooking().then((res)=>{
           res.docs.forEach((dt)=>{
            array.push(dt.data())
               console.log(dt.data())
               setBooking(booking=>[...booking,dt.data()])
               console.log(array)
           })
       })
     
        
    },[])
    const getBooking=async ()=>{
        // let array=[]
        return new Promise((res,rej)=>{
            const db=firebase.firestore().collection('booking').get()
            
        // db.docs.forEach((doc)=>{
        //     array.push(doc.data())
        //     setBooking(array)
        //     console.log(booking)
        // })
        if(db){
            res(db)
        }
        else{
            rej('fasle')
        }
        })
        
        
    }
   
    let table
    if(booking)
    {
        
        table=booking.map((data,index)=>
            (<tr key={index}>
                <td>{data.name}</td>
                <td>{data.contact}</td>
                <td>{data.slot}</td>
                <td>{data.date}</td>
                <td>{data.duration}</td>
                <td>{data.time}</td>
                <td>{data.area}</td>
                
                </tr>)
        )

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
        <div className="table-responsive">
        <table className="table table-bordered">
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
    )
}

export default BookingTable
