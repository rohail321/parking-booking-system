import React,{useState,useEffect} from 'react'
import firebase from '../../../firebase'
const FeedbackTable = () => {
    const [feedback, setFeedback] = useState([])
    useEffect(() => {
        let array=[]
       getBooking().then((res)=>{
           res.docs.forEach((dt)=>{
            array.push(dt.data())
               console.log(dt.data())
               setFeedback(feedback=>[...feedback,dt.data()])
               console.log(array)
           })
       })
     
        
    },[])
    const getBooking=async ()=>{
        // let array=[]
        return new Promise((res,rej)=>{
            const db=firebase.firestore().collection('feedback').get()
            
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
    
    if(feedback)
    {
        feedback.map((data,index)=>{
            table=(  <tr key={index}>
                <td>{data.name}</td>
                <td>{data.contact}</td>
                <td>{data.email}</td>
                <td>{data.feedback}</td>
                
                </tr>)
        })

    }
    else{
        table=( 
            <tr>
            <td>No Data</td>
            <td>No Data</td>
            <td>No Data</td>
            <td>No Data</td>
            
            </tr>
       )
    }
    return (
        <React.Fragment>
           <div className="table-responsive">
            <table className="table table-bordered">
            <thead>
                <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Feedback</th>
                
                
                </tr>
            </thead>
            <tbody>
              {table}
            </tbody>
            </table>
        </div>
        </React.Fragment>
    )
}

export default FeedbackTable
