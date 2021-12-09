import "./Footer.css";
import Linked from '../../assets/img/LINKEDIN.svg';
import GitLogo from '../../assets/img/github-logo.svg';


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-socials">
        <a href="https://www.google.com/"><img src={Linked} /></a>
        <img src={GitLogo} />
      </div>
    </div>
  );
}
 
export default Footer