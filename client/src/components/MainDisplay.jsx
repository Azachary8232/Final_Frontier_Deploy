import React, {useState} from 'react';

import { Atlantis2, Columbia2, ISS2, SpaceX2, Neptune2, Earth2, Mercury2,Saturn2, AlanShepard2, BuzzAldrin2, NeilArmstrong2, SallyRide2, KaylaBarron2, ThomasMarshburn2, WangYaping, YeGuangfu2, SpaceCat } from '../img/importImgs';



const MainDisplay = (props) => {

    // DATA shared to and from MAIN
    const { displayData, setDisplayData, displayMode, setDisplayMode} = props;
    

    const selections = () => {  
        console.log(displayData.name)
        if( displayMode == "planets"){
            if(displayData.name == "Neptune"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={Neptune2} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            {displayData.moons ? <h6>Number of Moons: {displayData.moons.length}</h6>: <h6>Number of Moons: 0</h6>}
                            <h6>Distance around equator: {displayData.milesAround}(km)</h6>
                            <h6>Furthest distance from the Sun: {displayData.mostMileFromSun} (km)</h6>
                            <h6>Closest distance from the Sun: {displayData.leastMilesFromSun} (km)</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "Earth"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={Earth2} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            {displayData.moons ? <h6>Number of Moons: {displayData.moons.length}</h6>: <h6>Number of Moons: 0</h6>}
                            <h6>Distance around equator: {displayData.milesAround}(km)</h6>
                            <h6>Furthest distance from the Sun: {displayData.mostMileFromSun} (km)</h6>
                            <h6>Closest distance from the Sun: {displayData.leastMilesFromSun} (km)</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "Saturn"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={Saturn2} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            {displayData.moons ? <h6>Number of Moons: {displayData.moons.length}</h6>: <h6>Number of Moons: 0</h6>}
                            <h6>Distance around equator: {displayData.milesAround}(km)</h6>
                            <h6>Furthest distance from the Sun: {displayData.mostMileFromSun} (km)</h6>
                            <h6>Closest distance from the Sun: {displayData.leastMilesFromSun} (km)</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "Mercury"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={Mercury2} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            {displayData.moons ? <h6>Number of Moons: {displayData.moons.length}</h6>: <h6>Number of Moons: 0</h6>}
                            <h6>Distance around equator: {displayData.milesAround}(km)</h6>
                            <h6>Furthest distance from the Sun: {displayData.mostMileFromSun} (km)</h6>
                            <h6>Closest distance from the Sun: {displayData.leastMilesFromSun} (km)</h6>
                        </div>
                    </div>)} 
        }
        else if( displayMode == "issAstro"){
            if(displayData.name == "Kayla Barron"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={KaylaBarron2} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            <h6>Age: {displayData.age}</h6>
                            <h6>From: {displayData.from}</h6>
                            <h6>Missions to Space: {displayData.spaceMissions}</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "Ye Guangfu"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={YeGuangfu2} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            <h6>Age: {displayData.age}</h6>
                            <h6>From: {displayData.from}</h6>
                            <h6>Missions to Space: {displayData.spaceMissions}</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "Thomas Marshburn"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={ThomasMarshburn2} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            <h6>Age: {displayData.age}</h6>
                            <h6>From: {displayData.from}</h6>
                            <h6>Missions to Space: {displayData.spaceMissions}</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "Wang Yaping"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={WangYaping} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            <h6>Age: {displayData.age}</h6>
                            <h6>From: {displayData.from}</h6>
                            <h6>Missions to Space: {displayData.spaceMissions}</h6>
                        </div>
                    </div>)}
        }
        else if( displayMode == "craft"){
            if(displayData.name == "NASA Shuttle Columbia"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={Columbia2} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            <h6>Description: {displayData.description}</h6>
                            <h6>First Flight: {displayData.firstFlight}</h6>
                            <h6>Last Flight: {displayData.lastFlight}</h6>
                            <h6>Missions Flown: {displayData.missions}</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "International Space Station"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={ISS2} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            <h6>Description: {displayData.description}</h6>
                            <h6>First Flight: {displayData.firstFlight}</h6>
                            <h6>Last Flight: {displayData.lastFlight}</h6>
                            <h6>Missions Flown: {displayData.missions}</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "NASA Shuttle Atlantis"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={Atlantis2} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            <h6>Description: {displayData.description}</h6>
                            <h6>First Flight: {displayData.firstFlight}</h6>
                            <h6>Last Flight: {displayData.lastFlight}</h6>
                            <h6>Missions Flown: {displayData.missions}</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "SpaceX Dragon"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={SpaceX2} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            <h6>Description: {displayData.description}</h6>
                            <h6>First Flight: {displayData.firstFlight}</h6>
                            <h6>Last Flight: {displayData.lastFlight}</h6>
                            <h6>Missions Flown: {displayData.missions}</h6>
                        </div>
                    </div>)}
        }
        else if( displayMode == "nasaAstro"){
            if(displayData.name == "Alan Shepard"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={AlanShepard2} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            <h6>Born: {displayData.born}</h6>
                            <h6>From: {displayData.from}</h6>
                            <h6>Mission to Space: {displayData.spaceMissions}</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "Buzz Aldrin"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={BuzzAldrin2} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            <h6>Born: {displayData.born}</h6>
                            <h6>From: {displayData.from}</h6>
                            <h6>Mission to Space: {displayData.spaceMissions}</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "Neil Armstrong"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={NeilArmstrong2} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            <h6>Born: {displayData.born}</h6>
                            <h6>From: {displayData.from}</h6>
                            <h6>Mission to Space: {displayData.spaceMissions}</h6>
                        </div>
                    </div>)}
            else if(displayData.name == "Sally Ride"){
                return(
                    <div>
                        <div><h1 className="displayName">{displayData.name}</h1></div>
                        <div className="mt-3">
                            <img src={SallyRide2} style={{height: "auto", width: "100%"}} alt="" />
                        </div>
                        <div className="displayName mt-3">
                            <h6>Born: {displayData.born}</h6>
                            <h6>From: {displayData.from}</h6>
                            <h6>Mission to Space: {displayData.spaceMissions}</h6>
                        </div>
                    </div>)}
        }
    else{
        return(
            <h1>NOT PLANETS</h1>)}
    }

    return(
        <div>
            {displayData 
            ? 
                selections()
            : 
            <img src={SpaceCat} style={{height: "auto", width: "100%"}} alt="" />
        }
        </div>
    )




}
export default MainDisplay;