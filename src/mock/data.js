import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Portfolio - Front-End Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "Hi, I'm Numan from Pakistan. I am a Self Taught Web Front-end Developer.", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hey, my name is',
  name: 'Numan Javed',
  subtitle: "I'm a Front-End Developer",
  cta: 'Want to know more about me!',
};

// ABOUT DATA
export const aboutData = {
  img: 'portfolio.png',
  paragraphOne:
    'Self-taught Web Developer, looking forward to specializing in full-stack development. Seeking an opportunity to gain experience with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including HTML5, JavaScript (ES6), React JS, CSS, Sass. Strong presentation skills with the ability to learn at a fast pace. ',
  paragraphTwo:
    "I'm really into web development and I am self-taught. I would really like to get industry experience/exposure. I am a fast learner and eager to learn.",
  paragraphThree:
    'I can learn anything related to web development at a fast pace. I am currently looking for a junior web developer job.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project.PNG',
    title: 'Youtube Clone',
    info:
      'Youtube Clone made with youtube api. Also integrated with youtube player. Included with a search functionalty',
    info2: '',
    url: 'https://fervent-hawking-04bbf2.netlify.app/',
    repo: 'https://github.com/numanjvd82/yt-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project1.PNG',
    title: 'Github Profile Lookup',
    info:
      'One of my first project made with React Js. It is a Github Lookup app which pulls in profile and other details from the Github API',
    info2: '',
    url: 'https://githubfinderall.netlify.app/',
    repo: 'https://github.com/numanjvd82/Github-Profile-Lookup-React-Tut', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project2.PNG',
    title: 'Netflix Clone',
    info:
      'Netflix Front Page mimicking the original design. This one was most challenging project for me.',
    info2: '',
    url: 'https://netflix-clone-react-152aa.web.app/',
    repo: 'https://github.com/numanjvd82/netflix-clone-react', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project3.PNG',
    title: 'Task Planner',
    info:
      'My Own Task Planner app made with React, React Context API and completely responseive to all devices.',
    info2: '',
    url: 'https://todo-listv2.netlify.app/',
    repo: 'https://github.com/numanjvd82/todo-list-v2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project4.PNG',
    title: 'Online Code Editor, HTML | CSS | JavaScript',
    info: 'A complete online code editor with collapsable tabs.',
    info2: '',
    url: 'https://online-code-editor-react.netlify.app/',
    repo: 'https://github.com/numanjvd82/online-code-editor-react', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project5.PNG',
    title: 'React E-Commerce Cart',
    info: 'An E-commerce cart made with React,CSS,Sass with Redux for state management.',
    info2: '',
    url: 'https://e-commerce-reactcart.netlify.app/',
    repo: 'https://github.com/numanjvd82/e-commerce-react', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Wanna work with me ! Hit me up on LinkedIn',
  btn: 'Contact Me',
  email: 'numanjaved2001@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/numanjvd82/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/numanjvd82',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
