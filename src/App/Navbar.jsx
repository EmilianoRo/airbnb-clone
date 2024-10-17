import logo from "../assets/airbnb.svg"
import "../page.css"
function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="airbnb logo"/> 
            <h4>airbnb</h4>
        </nav>
    )
}

export default Navbar