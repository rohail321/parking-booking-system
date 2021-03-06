import React,{useEffect,useState} from 'react'
import firebase from '../../../firebase'

const BookingTable = () => {

    const [booking, setBooking] = useState([])
    useEffect(() => {
        let array=[]
       getBooking().then((res)=>{
           res.docs.forEach((dt)=>{
            array.push(dt.data())
               setBooking(booking=>[...booking,dt.data()])
           })
       })
     
        
    },[])
    const getBooking=async ()=>{
        return new Promise((res,rej)=>{
            const db=firebase.firestore().collection('booking').get()
            
       
        if(db){
            res(db)
        }
        else{
            rej('fasle')
        }
        })
        
        
    }
    const changeHandler=(e,indexId,id)=>{
        let user =[...booking]
        let data=[]
        user.splice(indexId,1)
        setBooking(user)

        let promise =new Promise((res,rej)=>{
          const db=firebase.firestore()
          let userdb= db.collection("booking").get()
          if(userdb){
              res(userdb)
          }
          else{
              rej('false')
          }

        })
        
        promise.then((res)=>{
          res.forEach((doc)=>{
                
                       data.push({id:doc.id,
                          data:doc.data()})
                    })
                    data.filter((res,index)=>(index===indexId))
                    .forEach((res)=>{
                      const db=firebase.firestore()
                      db.collection('booking').doc(res.id).delete()
                      
                    })
                    
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
                <td>{data.from}</td>
                <td>{data.to}</td>
                <td>{data.area}</td>
                <td><button type="button"  onClick={(e)=>changeHandler(e,index,data.id)}><i className="fa fa-trash" aria-hidden="true"  style={{color:'red'}}></i>
</button></td>
                
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
        <div><h1>Pechs</h1>
        <div className="table-responsive">
        <table className="table table-bordered">
        <thead>
            <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Slot</th>
            <th>Date</th>
            <th>From</th>
            <th>To</th>
            <th>Area</th>

            
            
            </tr>
        </thead>
        <tbody>
            {table}
        </tbody>
        </table>
    </div></div>
        
    )
}

export default BookingTable
