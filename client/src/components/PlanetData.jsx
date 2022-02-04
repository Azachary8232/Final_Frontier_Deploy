
import '../css/style.css';
import React, {useEffect, useState} from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import axios from 'axios';

import {Neptune, Earth, Mercury, Saturn} from '../img/importImgs';




const PlanetData = (props) => {

    // DATA shared to and from MAIN
    const { setDisplayData, displayData, displayMode, setDisplayMode} = props;
    

    let items = [
        {
            name: "Earth",
            image : Earth
        },
        {
            name: "Neptune",
            image : Neptune
        },
        {
            name: "Mercury",
            image : Mercury
        },
        {
            name: "Saturn",
            image : Saturn
        }
    ]
    function Item(props) {
        return (
            <Paper>
                <img src={props.item.image}  style={{height: 200, width: "100%"}} alt="" />
                <p className="carouselDescription">{props.item.name}</p>
            </Paper>
        )
    }

    const handleOption = (planet) => {
        axios.get(`https://api.le-systeme-solaire.net/rest/bodies/${planet}`)
        .then(res => {
            const newData = {
                "name" : res.data.englishName,
                "moons" : res.data.moons,
                "milesAround" : res.data.equaRadius,
                "mostMileFromSun" : res.data.aphelion,
                "leastMilesFromSun" : res.data.perihelion
            }
            
            setDisplayData(newData);
            setDisplayMode("planets")
        })
        .catch(() => console.log("ERROR"));

    }





    return (

        <div className="box">
            {/* Upper Box */}
            <div className="my-2">
                {/* Drop Down Component */}
                <select className="dropDown" onChange={(e) => handleOption(e.target.value)}>
                    <option className="carouselDescription" value="">Select Planet</option>
                    <option className="carouselDescription" value="earth">Earth</option>
                    <option className="carouselDescription" value="mercury">Mercury</option>
                    <option className="carouselDescription" value="neptune">Neptune</option>
                    <option className="carouselDescription" value="saturn">Saturn</option>
                </select>
            </div>
            <div style={{ width: "auto", height: 200 }}>
                <Carousel interval={2700}>
                    {
                        items.map((item, i) => <Item key={i} item={item} />)
                    }
                </Carousel>
            </div>
        </div>
    )


}
export default PlanetData;