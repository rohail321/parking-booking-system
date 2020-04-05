import React from 'react'
import Navbar from '../../navigation/Navbar'
import BookingTable from './BookingTable'
import bg from '../../../asset/1.png'

const BookingAdmin = () => {
    return (
        <div style={{backgroundImage:`URL(${bg})`,height: "557px",
        backgroundSize: "",
        backgroundRepeat: "no-repeat",
        backgroundColor:'lightgrey'
        }}>
            <Navbar/>
            <h1 style={{color:'white',marginTop:'100px'}}>Book Your Parking Space!</h1>
            <section style={{marginTop:'380px'}}>
                <BookingTable/>
            </section>

            
            
        </div>
    )
}

export default BookingAdmin
