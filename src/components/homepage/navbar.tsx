import logo from '../../assets/logo1.png'
import '../../styles/navbar.css'
const Navbar = () =>
{
    return(
     <header>
           <img src ={logo} className="nav-logo"/>
           <nav>
                <ul>
                    <li><a href='#'>HOME</a></li> 
                    <li><a href='#'>SERVICES</a></li> 
                    <li><a href='#'>ABOUT</a></li>  
                    <li><a href='#'>CONTACT US</a></li>  
                </ul>
           </nav>
     </header>   
     
    )
}

export default Navbar

