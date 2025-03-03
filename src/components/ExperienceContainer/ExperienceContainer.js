import uniqid from 'uniqid'

import './ExperienceContainer.css'


const ExperienceContainer = ({ experience }) => {
    return (
        <div className='experience'>
            <h3>{experience.company}</h3>

            <p className='experience__date'>{experience.date}</p>
            <p className='experience__position'>{ experience.position }</p>
            <p className='experience__description'>{ experience.make }</p>
            
            {experience.stack && (
            <ul className='experience__stack'>
                {experience.stack.map((item) => (
                <li key={uniqid()} className='experience__stack-item'>
                    {item}
                </li>
                ))}
            </ul>
            )}


      </div>
    )
}

export default ExperienceContainer