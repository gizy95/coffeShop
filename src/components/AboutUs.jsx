import handsCoffee from "../assets/Pics Coffee/handsCoffee.png";
import "../maiwandCss/aboutus_mai.css";
export default function AboutUs() {
  return (
    <>
      <div className="third_row">
        <div className="yellow_left"></div>
        <div className="green_right">
          <div className="hero">
            <div className="main_pic">
              <img src={handsCoffee} />
            </div>
            <div className="hero_text">
              <h1>With the finest selection of Coffee bean</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                magnam doloribus iure modi maxime ullam libero cumque, ducimus
                natus eveniet, quasi atque debitis quo provident laudantium
                itaque sed optio officiis? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Vero magnam doloribus iure modi
                maxime ullam libero cumque, ducimus natus eveniet, quasi atque
                debitis quo provident laudantium itaque sed optio officiis?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
