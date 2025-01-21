import { Link } from 'react-router-dom';
import '../../CSS/Navbar.css';
const Navbar = () => {
    var styling = { 
        textDecoration: "none", 
        listStyleType: "none", 
        textAlign: "center"
    };
    return (
        <header>
            <nav>   
                <ol style={styling}>
                <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/sign-up">Sign Up</Link></li>
      </ol>
            </nav>
        </header>
    );
};
export default Navbar;