import React,{useEffect,useState} from 'react'
import './Parking.css'
import firebase from 'firebase'

const ParkingForm = ({click,enterSlot,enterUser}) => {
 
// let slot
let usr
// console.log(enterSlot)
//   if(enterUser){
//     slot=enterUser.filter((data)=>( data.slot!==enterSlot))
//     console.log(slot)
//   }
console.log(enterUser)
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

export default ParkingForm
