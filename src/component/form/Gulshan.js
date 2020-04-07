import React,{useEffect,useState} from 'react'
import './Parking.css'
import firebase from 'firebase'

const Gulshan = ({ name,contact,area,date,from,to}) => {
  const [enterUser,setUser]=useState([])
  const[enterSlot,setSlot]=useState()

  const click=(e)=>{
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
          
            db.collection('gulshanbooking').add({id:data,name,contact,area,date,from,to,slot:slotId})
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
  

  useEffect(()=>{
    getData().then((result)=>{
      result.forEach((doc)=>{
        setUser(enterUser=>[...enterUser,doc.data()])
        
      })
    })
    
  },[])
  
  const getData= async ()=>{
    
      const snapshot = await firebase.firestore().collection('gulshanbooking').get()
      return (snapshot.docs)
   
   
    
    
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
// let slot
let usr
// console.log(enterSlot)
//   if(enterUser){
//     slot=enterUser.filter((data)=>( data.slot!==enterSlot))
//     console.log(slot)
//   }

  usr=enterUser.map((res)=>(res.slot ))
  console.log(usr)
  
  

    return (
        <div>
           <div class="container" style={{ marginTop:'400px'}}>
  <div class="card" style={{boxShadow: '5px 5px 5px 5px #888888'}}>

<div class="card-columns" style={{display:'flex',flexdirection:'row'}}>
 
<div class="card " style={{border: 'none'}}>
    <div class="card-body text-center">
<i class="fa fa-car" id='1' style={{fontSize:'70p',color:`${usr.includes('1')||enterSlot==='1'?'yellow':'black'}`,padding:'20px'}} onClick={click} ></i>
    </div>
  </div> 

   
<div class="card " style={{border: 'none'}}>
    <div class="card-body text-center">
<i class="fa fa-car" id='2' style={{fontSize:'70p',color:`${usr.includes('2')||enterSlot==='2'?'yellow':'black'}`,padding:'20px'}} onClick={click} ></i>
    </div>
  </div> 

   
<div class="card " style={{border: 'none'}}>
    <div class="card-body text-center">
<i class="fa fa-car" id='3' style={{fontSize:'70p',color:`${usr.includes('3')||enterSlot==='3'?'yellow':'black'}`,padding:'20px'}} onClick={click} ></i>
    </div>
  </div> 
   
<div class="card " style={{border: 'none'}}>
    <div class="card-body text-center">
<i class="fa fa-car" id='4' style={{fontSize:'70p',color:`${usr.includes('4')||enterSlot==='4'?'yellow':'black'}`,padding:'20px'}} onClick={click} ></i>
    </div>
  </div> 
  
  
  
  
    
  
  
  
  
  <div class="card-body text-center">
<i class="fa fa-car" id='5' style={{fontSize:'30p',color:`${usr.includes('5')||enterSlot==='5'?'yellow':'black'}`,padding:'20px'}} onClick={click} ></i>
    </div>
  
</div>
<div class="card-columns" style={{display:'flex', flexDirection:"row",marginTop: '70px'}}>
   
<div class="card " style={{border: 'none'}}>
    <div class="card-body text-center">
<i class="fa fa-car" id='6' style={{fontSize:'70p',color:`${usr.includes('6')||enterSlot==='6'?'yellow':'black'}`,padding:'20px'}} onClick={click} ></i>
    </div>
  </div> 
   
<div class="card " style={{border: 'none'}}>
    <div class="card-body text-center">
<i class="fa fa-car" id='7' style={{fontSize:'70p',color:`${usr.includes('7')||enterSlot==='7'?'yellow':'black'}`,padding:'20px'}} onClick={click} ></i>
    </div>
  </div> 
   
<div class="card " style={{border: 'none'}}>
    <div class="card-body text-center">
<i class="fa fa-car" id='8' style={{fontSize:'70p',color:`${usr.includes('8')||enterSlot==='8'?'yellow':'black'}`,padding:'20px'}} onClick={click} ></i>
    </div>
  </div> 

  
  
 
  <div class="card " style={{border: 'none'}}>
    <div class="card-body text-center">
<i class="fa fa-car" id='9' style={{fontSize:'30p',color:`${usr.includes('9')||enterSlot==='9'?'yellow':'black'}`,padding:'20px'}} onClick={click}></i>
    </div>
  </div> 
  <div class="card " style={{border: 'none'}}>
    <div class="card-body text-center">
<i class="fa fa-car" id='10' style={{fontSize:'30p',color:`${usr.includes('10')||enterSlot==='10'?'yellow':'black'}`,padding:'20px'}} onClick={click}></i>
    </div>
  </div> 
  
  
</div>
</div>
</div>
            
        </div>
    )
}

export default Gulshan
