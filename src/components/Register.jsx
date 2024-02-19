import  "../styleMathieu/Register.css";

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
                <p className="textOverlayGirl">Buy more stuff</p>
                <img className="registerGirl" src="src/assets/Pics Coffee/girl.png" alt="" />
            </div>
          
         
        </div>
      );
    }