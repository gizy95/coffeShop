import "../styleMathieu/Register.css";
import girl from "../assets/Pics Coffee/girl.png"

export default function Register() {


    return (
        <div className="containerRegister">

            <div className="registerLeft">
                <h1 className="registerTitle
                ">Receive our bloody offers every week</h1>
                <br />
                <button className="buttonMathieu">Order Now</button>
            </div>
            <div className="registerRight">
                <img className="registerGirl" src={girl} alt="" />
            </div>


        </div>
    );
}