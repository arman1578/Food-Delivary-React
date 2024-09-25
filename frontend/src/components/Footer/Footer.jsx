import { assets } from "../../assets/assets";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium maiores saepe, quia laboriosam ut molestias corporis nam aliquid ratione quos nemo dolorum voluptatibus. Pariatur sit vero natus officia labore quae.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+1 123 456 789</li>
            <li>quickbite@example.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        All rights reserved. © QuickBite
      </p>
    </div>
  );
};

export default Footer;