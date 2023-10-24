import '../../styles/home-content.css'
import HomePic from '../../assets/home-content-main-pic.png'
const OurBrand = () => {

const content ="We are your one-stop destination for all things digital. Our mission is simple: to empower businesses and individuals to thrive in the ever-evolving online landscape. We combine cutting-edge technology, creative expertise, and unwavering commitment to help you achieve your digital goals."

return(
    <div className='our-brand'>
        <img src={HomePic}/>
        <div className='background-gradient-overlay'></div>
        <h4>{content}</h4>
    </div>
)
    
}

const HomeContent = () => {
    return (
        <div className="home-content">
            <OurBrand/>
        </div>
    )
}

export default HomeContent;