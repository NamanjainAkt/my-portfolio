import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  Nextedge_Labs,
  colorwhistle,
  bosp,
  Audance,
  DocSched,
  Gemini,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mern Stack",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "NextEdge Labs",
    icon: Nextedge_Labs,
    iconBg: "#383E56",
    date: "March 2024 - April 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Web Developer",
    company_name: "colorwhistle",
    icon: colorwhistle,
    iconBg: "#383E56",
    date: "Aug 2024 - Oct 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "the bureau of small projects",
    icon: bosp,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "looking you work so passionately makes me too glad.",
    name: "Sara Lee",
    designation: "Aspiring Developer",
    company: "OpenSource Community",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Highly recommend! Great experience from start to finish.",
    name: "Chris Brown",
    designation: "tech-geek",
    company: "OpenSource Community",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Smooth, efficient, and well-designed. This is exactly what I needed!",
    name: "Lisa Wang",
    designation: "Contributor",
    company: "OpenSource Community",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [

  {
  "name": "DreaMatrix",
  "description": "DreaMatrix is an AI-powered image generation web app built using the MERN stack. It allows users to generate stunning images using AI prompts with real-time preview and download options.",
  "tags": [
    {
      "name": "react",
      "color": "blue-text-gradient"
    },
    {
      "name": "mongodb",
      "color": "green-text-gradient"
    },
    {
      "name": "openai-api",
      "color": "pink-text-gradient"
    }
  ],
  "image": DreaMatrix,
  "source_code_link": "https://github.com/"
}
,
  {
  "name": "Baatcheet",
  "description": "Baatcheet is a real-time chat application developed with the MERN stack and Socket.IO. It features live messaging, typing indicators, and online user tracking with a sleek interface.",
  "tags": [
    {
      "name": "react",
      "color": "blue-text-gradient"
    },
    {
      "name": "socket.io",
      "color": "purple-text-gradient"
    },
    {
      "name": "nodejs",
      "color": "orange-text-gradient"
    }
  ],
  "image": Baatcheet,
  "source_code_link": "https://github.com/"
}

  ,
  {
    name: "Audance",
    description:
      "Audance is a personalized web music player that lets you enjoy my favorite songs anytime.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Audance,
    source_code_link: "https://github.com/",
  },
  {
    name: "Online Doctor Appointment App",
    description:
      "An online doctor appointment app for easy booking, consultations, and healthcare access anytime.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: DocSched,
    source_code_link: "https://github.com/",
  },
  {
  "name": "Nestler",
  "description": "Nestler is an Airbnb clone built using the MERN stack. It allows users to explore, book, and manage vacation rentals with an intuitive UI and secure authentication system.",
  "tags": [
    {
      "name": "react",
      "color": "blue-text-gradient"
    },
    {
      "name": "mongodb",
      "color": "green-text-gradient"
    },
    {
      "name": "express",
      "color": "yellow-text-gradient"
    }
  ],
  "image": Nestler,
  "source_code_link": "https://github.com/"
},
  

  {
    name: "Ai ChatBot",
    description:
      "A Gemini clone is an AI-powered chatbot or assistant designed to provide intelligent conversations, answer queries, and assist with tasks, mimicking Google's Gemini AI capabilities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Gemini,
    source_code_link: "https://github.com/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
