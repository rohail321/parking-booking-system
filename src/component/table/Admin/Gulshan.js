import React,{useEffect,useState} from 'react'
import firebase from '../../../firebase'

const Gulshan = () => {

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
        // let array=[]
        return new Promise((res,rej)=>{
            const db=firebase.firestore().collection('gulshanbooking').get()
            
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
    const changeHandler=(e,indexId,id)=>{
        let user =[...booking]
        let data=[]
        user.splice(indexId,1)
        setBooking(user)

        let promise =new Promise((res,rej)=>{
          const db=firebase.firestore()
          let userdb= db.collection("gulshanbooking").get()
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
                      db.collection('gulshanbooking').doc(res.id).delete()
                      
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
        <div><h1>Gulshan</h1>
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

export default Gulshan
