import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../../styles/footer.css'

const SocialIcons = () =>{
  return(
    <div className="social-icons">
      <a href="#" target='_blank'><FontAwesomeIcon icon={faFacebook} className='icon' /></a>
      <a href="#" target='_blank'><FontAwesomeIcon icon={faTwitter} className='icon'/></a>
      <a href="#" target='_blank'><FontAwesomeIcon icon={faLinkedin} className='icon'/></a>
      <a href="#" target='_blank'><FontAwesomeIcon icon={faGoogle} className='icon'/></a>
      <a href="#" target='_blank'><FontAwesomeIcon icon={faInstagram} className='icon'/></a>
    </div>
  )

}

const Copyright = () =>{
  return(
    <div className="copyright">&copy; 2023 <strong>MG Web Crafters-VA</strong>. All Rights Reserved.</div>
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