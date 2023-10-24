import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../../styles/footer.css'
const Footer = () => {
    return (
      <footer className="footer">
        <div className="social-icons">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
          {/* Add more social media icons as needed */}
        </div>
      </footer>
    );
  };
  
  export default Footer;