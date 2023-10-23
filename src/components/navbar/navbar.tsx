import logo from '../../assets/logo.png'

const Navbar = () =>
{
    return(
     <header>
           <img src ={logo}/>
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

