import { assets } from "../../assets/assets";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" />
      <p className="admin">Admin Panel</p>
      <img className="profile" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;