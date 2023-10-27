import logo from '../../assets/logo1.png'
import '../../styles/navbar.css'
const Navbar = () =>
{
    return(
     <header>
            <div className='logo-container'>
            <img src ={logo} className="nav-logo"/>
            <p><i>MG Web Crafters VA</i></p>
            </div>
          
                <nav>
                    <ul>
                        <li><a href='#'>HOME</a></li> 
                        <li><a href='#our-services'>SERVICES</a></li> 
                        <li><a href='#about'>ABOUT</a></li>  
                        <li><a href='#contact-us'>CONTACT US</a></li>  
                    </ul>
                </nav>  
     </header>   
     
    )
}

export default Navbar

