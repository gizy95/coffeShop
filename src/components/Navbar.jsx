import "../maiwandCss/navbar.css";
import logo from "../assets/Pics Coffee/logo.png";
import coffeeBeans from "../assets/Pics Coffee/coffeeBeans.png";
export default function NavBar() {
  return (
    <>
      <div className="navbar_container">
        <img className="logo" src={logo} />

        <ul className="navbar">
          <li>Home</li>
          <li>News</li>
          <li>Menu</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>

        <div className="second_row">
          <div className="yellow_left"></div>
          <div className="green_right">
            <div className="hero">
              <div className="main_pic">
                <img src={coffeeBeans} />
              </div>
              <div className="hero_text">
                <h1>Come check its perfect taste</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  rerum provident aperiam sit ipsa perferendis, assumenda iusto
                  tempore perspiciatis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
