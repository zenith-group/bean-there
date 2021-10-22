import React from "react";
import ReactDOM from "react-dom";
import './Footer.css';

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
              <a href="#" className="link-1">
                Home
              </a>

              <a href="#">Pricing</a>

              <a href="#">About</a>

              <a href="#">Faq</a>

              <a href="#">Contact</a>
            </p>

            <p className="footer-company-name">Bean_There © 2021</p>
          </div>

          <div className="footer-center">
            <div>
              <a href='https://www.google.com/maps/place/Squid+St,+Portsmouth,+NH+03801/@43.021721,-70.79349,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2c1cae2b65501:0xee600e9cbfdee808!8m2!3d43.021721!4d-70.791296' target="_blank"><i className="fa fa-map-marker"></i></a>
              <p>
                <span>456 Squid St</span> Portsmouth, NH
              </p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p>+1.555.555.5555</p>
            </div>

            <div>
              <i className="fa fa-envelope"></i>
              <p>
                <a href="mailto:support@company.com">support@company.com</a>
              </p>
            </div>
          </div>

          <div className="footer-right">
            <p className="footer-company-about">
              <span>About the company</span>
              Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
              euismod convallis velit, eu auctor lacus vehicula sit amet.
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
