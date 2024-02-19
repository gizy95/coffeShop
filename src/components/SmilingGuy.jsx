import React from "react"
import '../styling/SmilingGuy.css'
import smile from "../assets/Pics Coffee/smile.png"


function SmilingGuy() {


    return (
        <div className="sustainable_section">
            <div className="sustainable">
                <h2>Take away sustainable</h2>

            </div>
            <div className="sustainable_cup">
                <h2>Bring your cup and pay 0,30 less</h2>
                <img src={smile}></img>

            </div>
            <div className="sustainable_lorem">
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit delectus adipisci neque. Obcaecati earum aperiam, facilis consectetur suscipit quod beatae ut</p>
            </div>
        </div>
    )
}

export default SmilingGuy
