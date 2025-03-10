import './Main.css'
import imgsrc from '../../assets/main_image.png'
// import resume from '../../assets/Resume_Saksham.pdf'
import leetcodeImg from '../../assets/images/leetcode.png'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import '../../App.css'
import '../../index.css'

import Typewriter from "../Typewriter/Typewriter";

const Main = () => {
    const driveLink = 'https://drive.google.com/file/d/13X0B_UWBeiV3s_5FLFvuVT3sFguJ_Pan/view'
    return ( 
        <div id="main" className="main-container">
            <div className="main-content">
                <div className="text-container">
                    <h1 className="greeting">Hi,</h1>
                    <blockquote className="intro-text">
                        I'm
                        <span className="highlighted-name">
                            <span className="inner-name">Saksham</span>
                        </span>
                    </blockquote>
                    <div className="typewriter-container">
                        <Typewriter />
                    </div>
                    <p className="description">
                        I am passionate about building websites and web applications. With a degree in Computer Science from IIIT Una, I have honed my technical skills through diverse projects, both individually and in teams.
                        <br /><br />
                        I have built end-to-end web applications using technologies such as JavaScript, ReactJS, Node.js, Express.js, Bootstrap, Tailwind CSS, Git, MongoDB, and MySQL.
                    </p>
                    <a href={driveLink} target='_blank' rel='noreferrer' className='resume-link'>
                        Resume
                    </a>
                </div>
                <div className="image-container">
                    <div className="box">
                        <div className="image-wrapper">
                            <img 
                            src={imgsrc}
                            alt='main'
                            className='main-image'
                            />
                        </div>
                    </div>
                </div>
                <div className='social-links-container'>
                    <div className='social-links'>
                        <a rel="noreferrer" href="https://www.linkedin.com/in/saksham05sharma" target="_blank">
                            <AiFillLinkedin size={40} className="cursor-pointer" />
                        </a>
                        <a rel="noreferrer" href="https://github.com/saksham05sharma" target="_blank">
                            <AiFillGithub size={40} className="cursor-pointer" />
                        </a>
                        <a rel='noreferrer' href='https://leetcode.com/u/Saksham05' target='_blank'>
                            <img src={leetcodeImg} className='leetcode-img w-39 h-8' alt='leetcode' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Main;