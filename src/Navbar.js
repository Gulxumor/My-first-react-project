import React from "react";
import logo from "./logo.png"
import "./Navbar.css"

let Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar__wrapper'>
                <img src={logo} alt="logo" />

                <ul className='navbar__items'>
                    <li className='navbar__item'>
                        <a href='#home'>Home</a>
                    </li>
                    <li className='navbar__item'>
                        <a href='#Tours'>Tours</a>
                    </li>
                    <li className='navbar__item'>
                        <a href='#hotel'>Hotel</a>
                    </li>
                    <li className='navbar__item'>
                        <a href='#gallery'>Gallery</a>
                    </li>
                    <li className='navbar__item'>
                        <a href='#pages'>Pages</a>
                    </li>
                    <li className='navbar__item'>
                        <a href='#blog'>Blog</a>
                    </li>
                    <li className='navbar__item'>
                        <a href='#contacr'>Contact</a>
                    </li>
                </ul>

                <div className='btns'>
                    <button className='btn login paragraph'>Login</button>
                    <button className='btn signUp paragraph'>Sign UP</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar 