import React from 'react';
import '../css/style.css';

import NavBar from "../components/NavBar";
import Sphere from "../threejs/sphere"


const SolarSystem = (props) => {


    return(
        <div>
            <div className='navBar textAlign'>
                <NavBar />
            </div>
            <div>
                <Sphere />
            </div>
        </div>
    )




}
export default SolarSystem;