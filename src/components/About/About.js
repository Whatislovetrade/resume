import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';

import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description = {}, resume, social = {} } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Привет, я <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role}.</h2>}

      {description.descr && <p className='about__desc'>{description.descr}</p>}
      {description.stack && <p className='about__desc'>{description.stack}</p>}

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target='_blank' rel='noopener noreferrer'>
            <span className='btn btn--outline'>Резюме</span>
          </a>
        )}

        {social.github && (
          <a
            href={social.github}
            title='GitHub'
            className='link link--icon'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHubIcon />
          </a>
        )}

        {social.instagram && (
          <a
            href={social.instagram}
            title='GitHub'
            className='link link--icon'
            target='_blank'
            rel='noopener noreferrer'
          >
            <InstagramIcon />
          </a>
        )}

        {social.linkedin && (
          <a
            href={social.linkedin}
            title='LinkedIn'
            className='link link--icon'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedInIcon />
          </a>
        )}

        {social.telegram && (
          <a
            href={social.telegram}
            title='Telegram'
            className='link link--icon'
            target='_blank'
            rel='noopener noreferrer'
          >
            <TelegramIcon />
          </a>
        )}
      </div>
    </div>
  )
}

export default About
