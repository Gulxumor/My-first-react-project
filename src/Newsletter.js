import React from "react";
import "./Newsletter.css"

let Newsletter = () => {
    return (
        <section className='newsletter'>
            <div className='newsletter__wrapper'>
                <h1 className='header-1'>Sign Up For Our Newsletter</h1>
                <div className='newsletter__form'>
                    <input placeholder='Enter your email here...' className='input' />
                    <button className='btn'>Subscribe Now</button>
                </div>
            </div>
        </section>
 )
}

export default Newsletter