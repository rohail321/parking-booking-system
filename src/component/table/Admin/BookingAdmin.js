import React from 'react'
import Navbar from '../../navigation/Navbar'
import BookingTable from './BookingTable'
import bg from '../../../asset/1.png'
import Gulshan from './Gulshan'
import Drigh from './Drigh'

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
            <section style={{marginTop:'80px'}}>
                <Gulshan/>
            </section><section style={{marginTop:'80px'}}>
                <Drigh/>
            </section>

            
            
        </div>
    )
}

export default BookingAdmin
