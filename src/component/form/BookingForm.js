import React from 'react'

const BookingForm = ({enterName,setName,enterContact,setContact,enterArea,setArea,enterSubmit,setSubmit,enterDate,setDate,enterTime,setTime,enterDuration,setDuration}) => {
    const submitHandler=(e)=>{
        e.preventDefault()
        setSubmit(true)
      }



      
    return (
        <div>
            <div  style={container}>
        <form onSubmit={submitHandler} >
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstname" value={enterName} onChange={e=>setName(e.target.value)} placeholder="Your name.." required />
      
          <label htmlFor="lname">Contact</label>
          <input type="text" id="lname" name="contact" value={enterContact} onChange={e=>setContact(e.target.value)} placeholder="Your Contact.." required/>
          
          <label htmlFor="lname">Date</label>
          <input type="text" id="lname" name="date" value={enterDate} onChange={e=>setDate(e.target.value)} placeholder="Enter Date" required/>
          
          <label htmlFor="lname">Time</label>
          <input type="text" id="lname" name="time" value={enterTime} onChange={e=>setTime(e.target.value)} placeholder="Enter time ex:6:00pm" required/>
          
          <label htmlFor="lname">Duration</label>
          <input type="text" id="lname" name="duration" value={enterDuration} onChange={e=>setDuration(e.target.value)} placeholder="For How Long" required/>


          <label htmlFor="country">Area</label>
          <select id="country" name="country" value={enterArea} onChange={e=>setArea(e.target.value)} >
            <option value="gulshan">Gulshan</option>
            <option value="drigh">Drigh</option>
            <option value="pechs">Pechs</option>
          </select>
      
          
          <button className='btn btn-primary' type="submit" value="Submit">Submit</button>
        </form>
      </div>
        </div>
    )
}

export default BookingForm
const container ={
    backgroundColor: '#f2f2f2',
    marginTop:'350px'
  }