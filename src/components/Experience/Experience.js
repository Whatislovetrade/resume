import ExperienceContainer from '../ExperienceContainer/ExperienceContainer'
import uniqid from 'uniqid'
import { experience } from '../../portfolio'
import './Experience.css'

const Experience = () => {
    console.log(experience.date);
    return (
        <section className='section expereinces' id='expereinces'>
            <h2 className='section__title'>Опыт работы 1 год</h2>
                <div className="expereinces__grid">
                    {experience.map((experience) => (<ExperienceContainer key={uniqid()} experience={experience} />
                    ))}
                   
                </div>
        </section>
    )
}

export default Experience