import logo from '../../assets/logo.png'
import '../../styles/navbar.css'
const Navbar = () =>
{
    return(
     <header>
           <img src ={logo} className="nav-logo"/>
           <nav>
                <ul>
                    <li><a href='#'>Home</a></li> 
                    <li><a href='#'>Services</a></li> 
                    <li><a href='#'>About</a></li>  
                    <li><a href='#'>Contact Us</a></li>  
                </ul>
           </nav>
     </header>   
     
    )
}

export default Navbar

