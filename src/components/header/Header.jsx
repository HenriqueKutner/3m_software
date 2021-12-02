import "./Header.css";
import LogoPrincipal from "../../assets/img/LOGO 1.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-box">
        <img src={LogoPrincipal} />
        <p>About</p>
        <p>Works</p>
      </div>
    </div>
  );
}
 
export default Header;