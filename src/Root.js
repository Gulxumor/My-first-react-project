import React from 'react'
import './Root.css'
import Navbar from './Navbar.js'
import Header from './Header.js'
import Newsletter from './Newsletter.js'
import Card from './Card'



function Root() {
    return (
    <div>
        <Navbar />
        <Header />
        <Card />
        <Newsletter />
    </div>
    )
}

export default Root 