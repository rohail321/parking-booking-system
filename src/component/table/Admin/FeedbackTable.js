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
    const changeHandler=(e,indexId,id)=>{
        let user =[...feedback]
        let data=[]
        user.splice(indexId,1)
        setFeedback(user)

        let promise =new Promise((res,rej)=>{
          const db=firebase.firestore()
          let userdb= db.collection("feedback").get()
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
                      db.collection('feedback').doc(res.id).delete()
                      
                    })
                    
        })
  
    }
    let table
    
    if(feedback)
    {
        table=feedback.map((data,index)=>
           (  <tr key={index}>
                <td>{data.name}</td>
                <td>{data.contact}</td>
                <td>{data.email}</td>
                <td>{data.feedback}</td>
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
