import data from '../../Data/ExperienceData/experienceData'
import ExperienceCard from '../ExperienceCard/ExperienceCard'
import './Experiences.css'
import '../../App.css'
import '../../index.css'
const Experiences = () => {
    return ( 
        <div id="experience" className="experience-container">
            <div>
                <h1 className="experience-title">
                    Experience
                </h1>
            </div>
            {
                data.map((experience)=>{
                    return (
                        <ExperienceCard 
                        key = {experience.id}
                        {...experience}
                        />
                    )
                })
            }
        </div>
     );
}
 
export default Experiences;