import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import LogoSun from "../../../src/images/logoSun.png";

function Navbar() {
    return ( 
        <div className='Navbarcont'>

            <div className='navLogoLinkContainer'>
                <img src= {LogoSun} alt = "logo" className = "logoPicture" draggable="false" />

                <div className='LinkContainer'>
                    <Link to = "/" className='Link'>Home</Link>
                </div>
                


            </div>

        </div>
     );
}

export default Navbar;