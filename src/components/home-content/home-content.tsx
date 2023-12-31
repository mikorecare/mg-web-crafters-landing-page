import '../../styles/home-content.css'
// import HomePic from '../../assets/home-component-pic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTeamspeak,  } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons/faMailBulk';
import { faSearchDollar } from '@fortawesome/free-solid-svg-icons/faSearchDollar';
import { faTty } from '@fortawesome/free-solid-svg-icons/faTty';
import WhyUsPic from '../../assets/Animated-logo.png'
import ContactUsPic from '../../assets/contact-us-graphics.png'

const OurBrand = () => {
    let content ="MGWebCrafters was founded by a group of forward-thinkers who recognized the transformative power of the internet. We've seen the web evolve from a simple communication tool to a dynamic marketplace, and we've been a part of this evolution every step of the way. Our journey is marked by continuous learning, adaptability, and an unwavering commitment to innovation."

    return(
        <section className='our-brand'>
            <div className='background-gradient-overlay'></div>
            <div className="tagline">
            <h2>Empowering Your Digital Presence with Virtual Assistance | <strong className='emphasis'>MG Web Crafters</strong></h2>
            <h5><q><i>{content}</i></q></h5>
            </div>
        
        </section>
    )
        
}

const OurServices = () =>{
    let servicesIcon = (option: any) =>{
        switch (option) {
            case 'Social Media Management':
              return <FontAwesomeIcon icon={faTeamspeak}/>;
            case 'Website Development':
              return <FontAwesomeIcon icon={faCode}/>;
            case 'Email Marketing':
              return <FontAwesomeIcon icon={faMailBulk}/>;
            case 'Lead Generation':
              return <FontAwesomeIcon icon={faSearchDollar}/>;
            case 'Virtual Assistant Services':
              return <FontAwesomeIcon icon={faTty}/>;
            default:
              return <></>;
          }
    }
    let services = [
        {name:"Social Media Management",description:"SOCIAL MEDIA MANAGEMENT DESCRIPTION"},
        {name:"Website Development",description:"WEBSITE DEVELOPMENT DESCRIPTION"},
        {name:"Email Marketing",description:"EMAIL MARKETING DESCRIPTION"},
        {name:"Lead Generation",description:"LEAD GENERATION DESCRIPTION"},
        {name:"Virtual Assistant Services",description:"VIRTUAL ASSISTANCE DESCRIPTION"},
    ];

    return(
        <section className='our-services'>
            <h1 className='our-services-title' id="our-services">Our Services</h1>
            <ul >
                {services.map((list,index)=>(
                    <li key={index}>
                        <div className='service-info'>
                            <span className='service-info-icon'>{servicesIcon(list.name)}</span>
                            <p>{list.name}</p>
                            <p className='service-info-description'>{list.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
    
}

const WhyUs = () =>{
    let whyUs = "At MGWebCrafters, we're more than just a digital services company. We are a passionate team of creators, strategists, and problem solvers dedicated to helping businesses and individuals succeed in the digital world."
    return(
        <section className='why-us' id="about">
            <div className='why-us-content'>
                <div>
                    <h1 className='why-us-title'>Why Us?</h1>
                    <p className='why-us-text'>{whyUs}</p>
                </div>

     
                <img src={WhyUsPic}/>
            </div>
            
        </section>
    )
}

const ContactUs = () =>{
    let contact = {email:
    "mgwebcraftersva@gmail.com",
    phone_1:
    "+63 916-965-3845",
    phone_2:"+63 976-386-0567"}
    return(
        <section className='contact-us' id="about">
            <div className='contact-us-content' id="contact-us">
                <img src={ContactUsPic}/>
                <div>
                    <h1 className='contact-us-title'>Contact Us</h1>
                    <p className='contact-us-email'>Email: <span className='contact-us-info'>{contact.email}</span></p>
                    <p className='contact-us-phone'>Phone: <span className='contact-us-info'>{contact.phone_1} <br/> {contact.phone_2}</span></p>
                </div>

     
                
            </div>
            
        </section>
    )
}

const HomeContent = () => {
    return (
        <div className="home-content">
            <OurBrand/>
            <OurServices/>
            <WhyUs/>
            <ContactUs/>
        </div>
    )
}

export default HomeContent;