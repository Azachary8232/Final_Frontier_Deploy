import React, { useEffect, useState } from 'react'
import '../css/style.css';

import NavBar from "../components/NavBar";
import PlanetData from '../components/PlanetData';
import NasaData from '../components/NasaData';
import IssData from '../components/IssData';
import CraftData from '../components/CraftData';
import MainDisplay from '../components/MainDisplay';


const Main = (props) => {


    const [planet, setPlanet] = useState("TEST");
    const [isChanged, setIsChanged] = useState(false);

    const [displayData, setDisplayData] = useState();
    const [displayMode, setDisplayMode] = useState("");

    console.log(displayData);
    console.log(displayMode);






    return (
        <div className='container2'>
            <div className='navBar textAlign'>
                {/* NavBar Component */}
                <NavBar />
            </div>
            <div className="mainContainer flex spaceBetween py-3">
                {/* Container */}
                <div className="column">
                    {/* left column */}
                    <div className="box">
                        {/* Upper Box */}
                        <div>
                            {/* Carousel Component */}
                            <PlanetData setDisplayData={setDisplayData} displayData={displayData}  displayMode={displayMode} setDisplayMode={setDisplayMode} />
                        </div>
                    </div>
                    <div className="box my-5">
                        {/* Lower Box */}
                        <div>
                            {/* Carousel Component */}
                            <IssData setDisplayData={setDisplayData} displayData={displayData}  displayMode={displayMode} setDisplayMode={setDisplayMode} />
                        </div>
                    </div>
                </div>
                <div className="display mt-2">
                    {/* display */}
                    <MainDisplay displayData={displayData} setDisplayData={setDisplayData} displayMode={displayMode} setDisplayMode={setDisplayMode}/>
                </div>
                <div className="column">
                    {/* right column */}
                    <div className="box">
                        {/* Upper Box */}
                        <div>
                            {/* Carousel Component */}
                            <CraftData setDisplayData={setDisplayData} displayData={displayData}  displayMode={displayMode} setDisplayMode={setDisplayMode} />
                        </div>
                    </div>
                    <div className="box my-5">
                        {/* Lower Box */}
                        <div>
                            {/* Carousel Component */}
                            <NasaData setDisplayData={setDisplayData} displayData={displayData}  displayMode={displayMode} setDisplayMode={setDisplayMode} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default Main;