import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Augusto Sardá', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, I am',
  name: 'Augusto.',
  subtitle: "I'm a Master's Degree student in Engineering.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1QBoFVnjRwUiOONsR3wdaWvJnyyj-wnHL/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'machineSideController.png',
    title: "Master's thesis",
    info: "My Master's work focuses on developing control strategies for micro wind generators.",
    info2: 'The objective is to develop control strategies that allow the system to operate the closest possible to its maximum efficiency point.',
    info3: 'For this purpose, a 400 W micro wind generator was acquired. Instead of installing it in the open air, a testing facility is proposed, where the generator is coupled to a DC motor, which replicates the wind turbine behavior.',
    info4: "The starting point for control strategies comes from studying maximum power point tracking techniques and adapting them for the actual system. The testing facility will allow to test and evaluate the different strategies that have been developed. Unfortunately, its construction is delayed because of the COVID-19 pandemic, and the work-flow has been reoriented to computer simulations.",
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sardaugusto@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
