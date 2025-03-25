const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://github.com/Whatislovetrade',
  title: 'VI.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Влад',
  role: 'Фронтенд разработчик',
  description: {
    stack: ['Мой стек: HTML, CSS, SCSS, JavaScript, React, Redux, Redux Toolkit, Tailwind CSS.'],
    descr: ['Привет! Я Влад — фронтенд-разработчик, разрабатываю удобные и быстрые интерфейсы, работаю с React, JavaScript, TypeScript, Tailwind CSS и Vite. Умею писать асинхронный код, взаимодействовать с бекендом и REST API. Опыт в оптимизации проектов, настройке сборки и рефакторинге кода. Люблю находить элегантные решения сложных задач и делать веб-приложения удобными для пользователей.']
  },
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D1%81%D0%BB%D0%B0%D0%B2-%D0%B8%D0%B2%D0%B0%D0%BD%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2-b7803526a/',
    github: 'https://github.com/Whatislovetrade',
    telegram: 'telegram.com',
    instagram: 'insta.com'
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
  'Redux toolkit',
  'Git',
  'CI/CD',
  'Tailwind CSS',
  'Docker',
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
