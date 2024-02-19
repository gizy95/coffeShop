import  "../styleMathieu/Footer.css";

export default function Footer() {


    return (   
        <div className="containerFooter">
          <div className="upFooter">
            <img className= "logoFooterBabe" src="src/assets/Pics Coffee/logo.png" alt="" />
          </div>
          <div className="downFooter">
            <div className="contactFooter">
                <h3 className="contactTitleFooter">Contact</h3>
                <p className="subcontactFooter">Glorious Street, 30 - City Fuck</p>
                <p className="subcontactFooter">(+555)555 555 555</p>
                <p className="subcontactFooter">Coffee.shop@buyWeed.com</p>
                <div className="logosFooter">
                  <img className="socialMediaFooter" src="/src/assets/Pics Coffee/twitter.png" alt="" />
                  <img className="socialMediaFooter" src="/src/assets/Pics Coffee/facebook.png" alt="" />
                  <img className="socialMediaFooter" src="/src/assets/Pics Coffee/instagram.png" alt="" />
                  <img className="socialMediaFooter" src="/src/assets/Pics Coffee/printerest.png" alt="" />
                </div>
                </div>
            <div className="openFooter">
                <h3 className="openFooterMiddle">Open Everyday</h3>
                <h3 className="openFooterMiddle">From 7AM to 8PM</h3>
            </div>
            <div className="menuFooter">
                <a className="menuWritten" href="">Home</a>
                <a className="menuWritten" href="">New</a>
                <a className="menuWritten" href="">Home</a>
                <a className="menuWritten" href="">Blog</a>
            </div>
            <div className="privacyFooter">
            <a className="menuWritten" href="">Privacy Policy</a>
            <a className="menuWritten" href="">Cookies</a>
            <a className="menuWritten" href="">Conditions</a>
            <a className="menuWritten" href="">Map Site</a>
            </div>

           
          </div>
        </div>
      );
    }