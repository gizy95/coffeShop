import  "../styleMathieu/Order.css";

export default function Order() {


    return (   
        <div className="containerOrder">
        
          <h1 className="titleOrder" style={{justifyContent: "center"}}>Now you can also buy our coffee and brew it at home</h1>   

<div className="insideOrder" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <img  className="pubOrder" src="./src/assets/Pics Coffee/10�.png" alt="" />
                
                <img className="bagsOrder" src="src/assets/Pics Coffee/bags.png" alt="cofee" />
                <button className="buttonMathieu">Order Now</button>
          </div>
         

        </div>
      );
    }
