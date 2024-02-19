import "../styleMathieu/Order.css";
import bags from "../assets/Pics Coffee/bags.png"
import ten from "../assets/Pics Coffee/10�.png"

export default function Order() {


  return (
    <div className="containerOrder">
      <h1 className="titleOrder" style={{ justifyContent: "center" }}>Now you can also buy our coffee and brew it at home</h1>
      <div className="insideOrder" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <img className="pubOrder" src={ten} alt="" />
        <img className="bagsOrder" src={bags} alt="cofee" />
        <button className="buttonMathieu">Order Now</button>
      </div>


    </div>
  );
}

