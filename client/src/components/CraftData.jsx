import '../css/style.css';
import React, {useState} from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import {Atlantis, Columbia, ISS, SpaceX} from '../img/importImgs';




const CraftData = (props) => {

    // DATA shared to and from MAIN
    const { setDisplayData, displayData, displayMode, setDisplayMode} = props;



    let items = [
        {
            id: "columbia",
            name: "NASA Shuttle Columbia",
            description: "Space Shuttle Orbiter",
            firstFlight : "April 12th, 1981",
            lastFlight : "January 16th, 2003",
            missions : 28,
            image : Columbia
        },
        {
            id: "iss",
            name: "International Space Station",
            firstFlight : "November 20, 1998",
            lastFlight : "Still orbiting",
            description: "A multinational collaborative project involving five participating space agencies",
            missions : 1,
            image : ISS
        },
        {
            id: "atlantis",
            name: "NASA Shuttle Atlantis",
            description: "Space Shuttle Orbiter",
            firstFlight : "October 3rd, 1985",
            lastFlight : "July 8th, 2011",
            missions : 33,
            image : Atlantis
        },
        {
            id: "spaceX",
            name: "SpaceX Dragon",
            description: "Partially reusable cargo spacecraft",
            firstFlight : "October 8th, 2012",
            lastFlight : "December 21st, 2021",
            missions : 23,
            image : SpaceX
        }
    ]
    function Item(props) {
        return (
            <Paper>
                <img src={props.item.image} style={{height: 200, width: "100%"}} alt="" />
                <p className="carouselDescription">{props.item.name}</p>

            </Paper>
        )
    }

    const handleClick = (craft) => {
        const newData = items.filter((item) => item.id == craft);
        console.log(newData[0]);
        setDisplayData(newData[0]);
        setDisplayMode("craft")
    }





    return (

        <div className="box">
            {/* Upper Box */}
            <div className="my-2">
                {/* Drop Down Component */}
                <select className="dropDown" onChange={(e) => handleClick(e.target.value)}>
                    <option className="carouselDescription" value="">Select Space Craft</option>
                    <option className="carouselDescription" value="spaceX">SpaceX</option>
                    <option className="carouselDescription" value="atlantis">Atlantis</option>
                    <option className="carouselDescription" value="columbia">Columbia</option>
                    <option className="carouselDescription" value="iss">International Space Station</option>
                </select>
            </div>
            <div style={{ width: "auto", height: 200 }}>
                <Carousel interval={2850}>
                    {
                        items.map((item, i) => <Item key={i} item={item}/>)
                    }
                </Carousel>
            </div>
        </div>
    )


}
export default CraftData;