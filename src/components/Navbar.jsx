
import {Link} from 'react-router-dom';
import "../components/navbar.css";
import Logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
        {/* <div>
            <img src='https://cdn.pixabay.com/photo/2016/03/17/07/02/starbucks-1262392_640.jpg' alt='' className='logoimage' />  
        </div> */}
      <div className='navbar-logo'>
        <img src={Logo} alt='logo'/>
      </div>
        
        <div className="navbar-links">
      
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Tours</Link>
      </div>
    </nav>
  );
};

export default Navbar;

 
