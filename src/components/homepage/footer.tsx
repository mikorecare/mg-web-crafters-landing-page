import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../../styles/footer.css'

const SocialIcons = () =>{
  return(
    <div className="social-icons">
      <FontAwesomeIcon icon={faFacebook} className='icon' />
      <FontAwesomeIcon icon={faTwitter} className='icon'/>
      <FontAwesomeIcon icon={faLinkedin} className='icon'/>
      <FontAwesomeIcon icon={faGoogle} className='icon'/>
      <FontAwesomeIcon icon={faInstagram} className='icon'/>
    </div>
  )

}

const Copyright = () =>{
  return(
    <div className="copyright">&copy; 2010 - 2023 MGWebCrafters-VA. All Rights Reserved.</div>
  )
}

const Footer = () => {
    return (
      <footer className="footer">
        <SocialIcons/>
        <Copyright/>
      </footer>
    );
  };
  
  export default Footer;