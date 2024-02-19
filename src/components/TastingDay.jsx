import smell from "../assets/Pics Coffee/smell.png";
import "../maiwandCss/tasting_day.css";
export default function TastingDay() {
  return (
    <>
      <div className="fourth_row">
        <div className="yellow_left"></div>
        <div className="green_right">
          <div className="hero">
            <div className="main_pic">
              <img src={smell} />
            </div>
            <div className="hero_text">
              <h1>Tasting Day</h1>
              <h2>April 26 - 5pm </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                magnam doloribus iure modi maxime ullam libero cumque, ducimus
                natus eveniet, quasi atque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
