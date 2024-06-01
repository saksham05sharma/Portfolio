import React from 'react';
import './ExperienceCard.css';
const ExperienceCard = ({org, title, date, description}) => {
    return ( 
        <div className="experience-container">
            <div className="experience-content">
                <div className="experience-org">
                    <h1 className="org-name">{org}</h1>
                    <h3 className="experience-date">{date}</h3>
                </div>
                <div className='experience-timeline'>
                    <p className="timeline-dot">
                        <div className='timeline-circle'></div>
                    </p>
                    <div className='timeline-line'></div>
                </div>
                <div className='experience-details'>
                    <h1 className='experience-title'>{title}</h1>
                    <p className='experience-description'>
                        {description}
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default ExperienceCard;