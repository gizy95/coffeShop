import React from "react"
import '../styling/Menu.css'
import cupWhite from "../assets/Pics Coffee/cupWhite.png"
import cupGreen from "../assets/Pics Coffee/cupGreen.png"
import milk from "../assets/Pics Coffee/milk.png"
import cake from "../assets/Pics Coffee/cake.png"

function Menu() {


    return (
        <div className="menu-section">
            <h2 className="menu">Menu</h2>
            <div className="headers">




            </div>
            <div className="coffes">
                <div className="coffe-select">
                    <h3>OUR BASIC</h3>
                    <div className="coffe_price">

                        <p>Expresso</p><p className="bold_price">1</p></div>
                    <div className="coffe_price">
                        <p>Expresso</p><p className="bold_price">1</p></div>
                    <div className="coffe_price">
                        <p>Expresso</p><p className="bold_price">1</p></div>
                    <div className="coffe_price">
                        <p>Expresso</p><p className="bold_price">1</p></div>
                    <div className="coffe_price">
                        <p>Expresso</p><p className="bold_price">1</p></div>
                    <div className="coffe_price">
                        <p>Expresso</p><p className="bold_price">1</p></div>
                    <div className="coffe_price">
                        <p>Expresso</p><p className="bold_price">1</p></div>

                </div>
                <div className="coffe-select">
                    <h3>OUR SPECIALS</h3>
                    <div className="coffe_price">
                        <p>Expresso</p><p className="bold_price">1</p></div>
                    <div className="coffe_price">
                        <p>Expresso</p><p className="bold_price">1</p></div>
                    <div className="coffe_price">
                        <p>Expresso</p><p className="bold_price">1</p></div>
                    <div className="coffe_price">
                        <p>Expresso</p><p className="bold_price">1</p></div>
                    <div className="coffe_price">
                        <p>Expresso</p><p className="bold_price">1</p></div>
                    <div className="coffe_price">
                        <p>Expresso</p><p className="bold_price">1</p></div>

                </div>
                <div className="coffe-select">
                    <h3>OUR DAIRY FREE MILKS</h3>
                    <div className="coffe_price">
                        <p>Expresso</p><p className="bold_price">1</p></div>
                    <div className="coffe_price">
                        <p>Expresso</p><p className="bold_price">1</p></div>
                    <div className="coffe_price">
                        <p>Expresso</p><p className="bold_price">1</p></div>
                    <div className="coffe_price">
                        <p>Expresso</p><p className="bold_price">1</p></div>
                    <div className="coffe_price">
                        <p>Expresso</p><p className="bold_price">1</p></div>

                </div>
                <div className="coffe-select">
                    <h3>TOO PAIR WITH...</h3>
                    <div className="coffe_price">
                        <p>Expresso</p><p className="bold_price">1</p></div>
                    <div className="coffe_price">
                        <p>Expresso</p><p className="bold_price">1</p></div>
                    <div className="coffe_price">
                        <p>Expresso</p><p className="bold_price">1</p></div>
                    <div className="coffe_price">
                        <p>Expresso</p><p className="bold_price">1</p></div>

                </div>
            </div>
            <div className="images">
                <img src={cupWhite}></img>
                <img src={cupGreen}></img>
                <img src={milk}></img>
                <img src={cake}></img>
            </div>
        </div>
    )
}

export default Menu
