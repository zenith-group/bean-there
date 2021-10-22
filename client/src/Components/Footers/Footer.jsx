import React from "react";
import ReactDOM from "react-dom";
import './Footer.css';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <footer className="footer-distributed">
          <div className="footer-left">
          <img src={'./img/Bean_There.png'} alt='logo' width='50px' height='50px'/>
            <p className="footer-links">
              <Link to="/" className="link-1">Home</Link>

              <Link to="/">About</Link>

              <a href="#">Pricing</a>

              <a href="#">Faq</a>

              <a href="#">Contact</a>
            </p>

            <p className="footer-company-about">Bean_There © 2021</p>
          </div>

          <div className="footer-center">
            <div>
              <a href='https://www.google.com/maps/place/Squid+St,+Portsmouth,+NH+03801/@43.021721,-70.79349,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2c1cae2b65501:0xee600e9cbfdee808!8m2!3d43.021721!4d-70.791296' target="_blank"><i className="fa fa-map-marker"></i></a>
              <p>
                <p>456 Squid St</p> <br></br>Portsmouth, NH
              </p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p>+1.800.456.BEANS</p>
            </div>

            <div>
              <i className="fa fa-envelope"></i>
              <p>
                <a href="mailto:support@beans.com">support@beans.com</a>
              </p>
            </div>
          </div>

          <div className="footer-right">
            <p className="footer-company-about">
              <span>About Bean There</span>
              Established in 2021, Bean There is a no-nonsense website helping the modern caf<i style={{margin: "0px"}}>fiend</i> find their favorite blend. Search for shops by location and compare reviews based on coffee-type alone. Backed by an industry-leading no-tea-guarantee.
            </p>

            <div className="footer-icons">
              <a href="https://www.facebook.com/facebook/" target="_blank">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://twitter.com/" target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/zenith-group/bean-there" target="_blank">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;
