import "./Header.css";
import LogoPrincipal from "../../assets/img/logo_principal.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-box">
        <div className="box-img">
          <img alt="#" src={LogoPrincipal} />
        </div>
        <p>About</p>
        <p>Works</p>
      </div>
    </div>
  );
}
 
export default Header;