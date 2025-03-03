const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://github.com/Whatislovetrade',
  title: 'VI.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Влад',
  role: 'Фронтенд разработчик',
  description:
    'Мой стек: HTML, CSS, SCSS, JavaScript, React, Redux, Redux Toolkit, Tailwind CSS.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'vladmaslow1@mail.com',
}

const experience = [
  {
    company: 'Apple',
    date: '2018 - 2020',
    position: 'Фронтенд разработчик',
    stack: ['SASS', 'TypeScript', 'React'],
    make: 'Разработал crm для компании'
  },
  {
    company: 'Apple',
    date: '2018 - 2020',
    position: 'Фронтенд разработчик',
    stack: ['SASS', 'TypeScript', 'React'],
    make: 'Разработал crm для компании'
  },
  {
    company: 'Apple',
    date: '2018 - 2020',
    position: 'Фронтенд разработчик',
    stack: ['SASS', 'TypeScript', 'React'],
    make: 'Разработал crm для компании'
  }
]

export { header, about, projects, skills, contact, experience }
