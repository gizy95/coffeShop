import React from "react"
import '../styling/OpenHours.css'
import cupYellow from "../assets/Pics Coffee/cupYellow.png"


function OpenHours() {


    return (
        <div className="openHours">
            <div className="description">
                <h2>The art of coffe in your cup</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quo enim vel necessitatibus sint praesentium rerum veniam possimus hic a, repellendus laboriosam est quasi molestiae obcaecati tempora porro harum sunt!</p>
            </div>
            <div className="hours">
                <h3> Open Everyday From 7 AM to 8 AM</h3>
                <img src={cupYellow}></img>
            </div>
        </div>
    )
}

export default OpenHours
