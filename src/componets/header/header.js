import "./header.css"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="logo">
                <h3>MIMILLY ANIMES</h3>
            </div>
            <nav className="nav-bar">
                <ul>
                    <Link to={'/'}><li>HOME</li></Link>
                    <Link to={'/search'}><li>SEARCH</li></Link>
                </ul>
            </nav>
        </div>
    );
}

export default Header;