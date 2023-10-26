import '../../styles/home-content.css'
import HomePic from '../../assets/home-component-pic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTeamspeak,  } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons/faMailBulk';
import { faSearchDollar } from '@fortawesome/free-solid-svg-icons/faSearchDollar';
import { faTty } from '@fortawesome/free-solid-svg-icons/faTty';
// import MainPic from '../../assets/home-content-pic.png'

const OurServices = () =>{
    const servicesIcon = (option: any) =>{
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
    const services = [
        {name:"Social Media Management",description:"SOCIAL MEDIA MANAGEMENT DESCRIPTION"},
        {name:"Website Development",description:"WEBSITE DEVELOPMENT DESCRIPTION"},
        {name:"Email Marketing",description:"EMAIL MARKETING DESCRIPTION"},
        {name:"Lead Generation",description:"LEAD GENERATION DESCRIPTION"},
        {name:"Virtual Assistant Services",description:"VIRTUAL ASSISTANCE DESCRIPTION"},
    ];
    console.log(services[0].name)
    return(
        <div className='our-services'>
            <h1 className='our-services-title'>Our Services</h1>
            <ul>
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
        </div>
    )
    
}

const OurBrand = () => {
    const content ="We are your one-stop destination for all things digital. Our mission is simple: to empower businesses and individuals to thrive in the ever-evolving online landscape. We combine cutting-edge technology, creative expertise, and unwavering commitment to help you achieve your digital goals."

    return(
        <div className='our-brand'>
            <img src={HomePic} className="background-pic"/>
            <div className='background-gradient-overlay'></div>
            <div className="tagline">
            <h2>Empowering Your Digital Presence with Virtual Assistance | <strong className='emphasis'>MG Web Crafters</strong></h2>
            <h5><q><i>{content}</i></q></h5>
            </div>
        
        </div>
    )
        
}

const HomeContent = () => {
    return (
        <div className="home-content">
            <OurBrand/>
            <OurServices/>
        </div>
    )
}

export default HomeContent;