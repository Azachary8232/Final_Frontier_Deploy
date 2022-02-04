import '../css/style.css';
import React, {useState} from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import {KaylaBarron, ThomasMarshburn,WangYaping2, YeGuangfu} from '../img/importImgs';


const IssData = (props) => {

    // DATA shared to and from MAIN
    const { setDisplayData, displayData, displayMode, setDisplayMode} = props;




    let items = [
        {
            id: "kayla_barron",
            name: "Kayla Barron",
            age: 34,
            from: "Pocatello, ID",
            spaceMissions : "SpaceX Crew-3",
            image : KaylaBarron
        },
        {
            id: "ye_guangfu",
            name: "Ye Guangfu",
            age : 41,
            from : "Chengdu, China", 
            spaceMissions : "Shenzhou 13",
            image : YeGuangfu
        },
        {
            id: "thomas_marshburn",
            name: "Thomas Marshburn",
            age : 61,
            from : "Statesville, NC", 
            spaceMissions : "SpaceX Crew-3, STS-127, Expedition 34, Expedition 35, Soyuz TMA-07M",
            image : ThomasMarshburn
        },
        {
            id: "wang_yaping",
            name: "Wang Yaping",
            age : 42,
            from : "Yanti, China", 
            spaceMissions : "Shenzhou 13, Shenzhou 10",
            image : WangYaping2
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

    const handleOption = (issAstro) => {
        const newData = items.filter((item) => item.id == issAstro);
        console.log(newData);
        setDisplayData(newData[0]);
        setDisplayMode("issAstro")
        

    }





    return (

        <div className="box mt-3">
            {/* Lower Left Box */}
            <div className="my-2">
                {/* Drop Down Component */}
                <select className="dropDown mt-4" onChange={(e) => handleOption(e.target.value)}>
                    <option className="carouselDescription" value="">Select ISS Astronaut</option>
                    <option className="carouselDescription" value="kayla_barron">Kayla Barron</option>
                    <option className="carouselDescription" value="thomas_marshburn">Thomas Marshburn</option>
                    <option className="carouselDescription" value="wang_yaping">Wang Yaping</option>
                    <option className="carouselDescription" value="ye_guangfu">Ye Guangfu</option>
                </select>
            </div>
            <div style={{ width: "auto", height: 200 }}>
                <Carousel interval={3200}>
                    {
                        items.map((item, i) => <Item key={i} item={item} />)
                    }
                </Carousel>
            </div>
        </div>
    )


}
export default IssData;