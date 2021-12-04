import "./Footer.css";
import Linked from '../../assets/img/LINKEDIN.svg';
import Insta from '../../assets/img/INSTAGRAM.svg';
import Face from '../../assets/img/FACEBOOK.svg';


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-socials">
        <img src={Linked} />
        <img src={Insta} />
        <img src={Face} />
      </div>
    </div>
  );
}
 
export default Footer