import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbWorldCode } from "react-icons/tb";
import './Navbar.css'

const Navbar = () => {

    const [colorTheme, setColorTheme] = useState('light');
    const [showMenu, setShowMenu] = useState(false);

    const handleClickScroll = (componentId) => {
        const component = document.getElementById(componentId);
        if(component){
            component.scrollIntoView({
                behavior: 'smooth',
                duration: 2000,
                block: 'start',
                inline: 'nearest'
            })
        }
    }

    const handleWindowResize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth > 640 && showMenu) {
            setShowMenu(false);
        }
    };

    // Handle window resize for mobile view
    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [showMenu]);

    return ( 
        <div className="navbar-container">
            <TbWorldCode alt="logo" className={`navbar-logo ${colorTheme==='dark' ? 'navbar-logo-dark' : ''}`} />
            {!showMenu &&
            (<ul className="navbar-menu tm:block sm:block md:flex">
                <a className="navbar-link" onClick={() => handleClickScroll('experience')}>
                    Experience
                </a>
                <a className="navbar-link" onClick={() => handleClickScroll('projects')}>
                    Projects
                </a>
                <a className="navbar-link" onClick={() => handleClickScroll('contact')}>
                    Contact
                </a>
            </ul>)}
            <div className="flex">
                <div className="tm:hidden sm:hidden absolute top-[2rem] right-[3.5rem]">
                    <GiHamburgerMenu className="hamburger-icon" onClick={() => setShowMenu(!showMenu)}/>
                </div>
                {showMenu && (
                    <ul className="hamburger-menu">
                        <a className="navbar-link" onClick={() => handleClickScroll('experience')}>
                            Experience
                        </a>
                        <a className="navbar-link" onClick={() => handleClickScroll('projects')}>
                            Projects
                        </a>
                        <a className="navbar-link" onClick={() => handleClickScroll('contact')}>
                            Contact
                        </a>
                    </ul>
                )}
            </div>
        </div>
     );
}
 
export default Navbar;
