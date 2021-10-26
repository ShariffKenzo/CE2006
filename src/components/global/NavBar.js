import React from 'react'
import { Navbar } from 'reactstrap'
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
    <ul className ="header">

        <li><Link to = "/Home">Home</Link></li>

       <li><Link to = "/NearbyAmenities">Nearby Amenties</Link></li>

       <li><Link to = "/PricingTrends">PricingTrends</Link></li>






    </ul>
    );
}

export default NavBar
