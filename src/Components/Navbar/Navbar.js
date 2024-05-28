import './Navbar.css'

const Navbar = (props) => {

    const {active} = props;

    return ( 
        <div className="nav-container">
            <nav className="navbar">
                <div className="nav-background">
                    <ul className="nav-list">
                        <li className={ active === "home"
										? "nav-item active"
										: "nav-item" }>
                            Home
                        </li>
                        <li className={ active === "about"
										? "nav-item active"
										: "nav-item" }>
                            About
                        </li>
                        <li className={ active === "projects"
										? "nav-item active"
										: "nav-item" }>
                            Projects
                        </li>
                        <li className={ active === "experience"
										? "nav-item active"
										: "nav-item" }>
                            Experience
                        </li>
                        <li className={ active === "contact"
										? "nav-item active"
										: "nav-item" }>
                            Contact
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;
<navbar className="navabr">

</navbar>