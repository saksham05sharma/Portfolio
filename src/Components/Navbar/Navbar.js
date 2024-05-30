import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TbWorldCode } from 'react-icons/tb';
import './Navbar.css'; // Import the CSS file

function Navbar() {
    const [colorTheme, setColorTheme] = useState('light');
    const [showMenu, setShowMenu] = useState(false);

    const scrollToComponent = (componentId) => {
        const component = document.getElementById(componentId);
        if (component) {
            component.scrollIntoView({
                behavior: 'smooth',
                duration: 2000,
                block: 'start',
                inline: 'nearest',
            });
        }
    };

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
            <TbWorldCode
                alt="logo"
                className={`navbar-logo ${colorTheme === 'dark' ? 'navbar-logo-dark' : ''}`}
            />
            {!showMenu && (
                <ul className="hidden tm:block sm:block md:flex font-[400] text-black dark:text-white dark:font-[300] text-custom-20 gap-[5rem] md:gap-[3rem] lg:gap-4rem">
                    <a className="navbar-link" onClick={() => scrollToComponent('experience')}>
                        Experience
                    </a>
                    <a className="navbar-link" onClick={() => scrollToComponent('projects')}>
                        Projects
                    </a>
                    <a className="navbar-link" onClick={() => scrollToComponent('contact')}>
                        Contact
                    </a>
                </ul>
            )}
            <div className="flex">
                <div className="tm:hidden sm:hidden absolute top-[2rem] right-[3.5rem]">
                    {/* <GiHamburgerMenu
                        className="h-6 w-6 cursor-pointer"
                        onClick={() => setShowMenu(!showMenu)}
                    /> */}
                </div>
                {showMenu && (
                    <ul className="flex flex-col font-[400] text-black dark:font-[300] text-custom-20 gap-[2rem] md:gap-[3rem] lg:gap-2rem absolute top-[4.5rem] right-[3.5rem] z-10 bg-[#fdd6cf] p-4 shadow-md rounded">
                        <a className="navbar-link" onClick={() => scrollToComponent('experience')}>
                            Experience
                        </a>
                        <a className="navbar-link" onClick={() => scrollToComponent('projects')}>
                            Projects
                        </a>
                        <a className="navbar-link" onClick={() => scrollToComponent('contact')}>
                            Contact
                        </a>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Navbar;
