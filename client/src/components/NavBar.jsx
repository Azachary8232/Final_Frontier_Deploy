import React from 'react';
import {Link} from "react-router-dom";


const NavBar = () => {

    return(
        <div className="flex spaceBetween">
            <div className="mt-3">
                <Link to="/">Space Info</Link>
                <Link to="/solarsystem" className="mx-5">Solar System</Link>
            </div>
            <div>
                <h1>The Final Frontier</h1>
            </div>
            <div  className="mt-3">
                <Link to="/messageboard">Click Here To Share Your Thoughts</Link>
            </div>

        </div>
    )


}

export default NavBar;