import "./Header.css";
import LogoPrincipal from "../../assets/img/logo_principal.svg";
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-box">
        <div className="box-img">
          <img alt="#" src={LogoPrincipal} />
        </div>
        <div className="about-works">
          <Link to="about-scroll" smooth={true} duration={1000}><p>About</p></Link>
          <Link to="projects-scroll" smooth={true} duration={1000}><p>Works</p></Link>
        </div>
      </div>
    </div>
  );
}
 
export default Header;