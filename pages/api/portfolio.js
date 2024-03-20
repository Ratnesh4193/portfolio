const portfolio = [
  {
    id: 0,
    projectName: "DevCart",
    url: "https://github.com/Ratnesh4193/devcart",
    image: "projects/devcart.png",
    projectDetail:
      "DevCart is a full-stack e-commerce website built using React, NodeJS, ExpressJS, MongoDB, and Redux. It features user authentication, product search, admin page, and cart management. CI/CD pipeline implemented for seamless deployment. Dockerized and orchestrated Kubernetes for improved performance and scalability.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "NodeJS",
      },
      {
        tech: "ExpressJS",
      },
      {
        tech: "MongoDB",
      },
      {
        tech: "Redux",
      },
      {
        tech: "Docker",
      },
      {
        tech: "Kubernetes",
      },
    ],
  },
  {
    id: 1,
    projectName: "Ping Chat",
    url: "https://github.com/Ratnesh4193/ping-chat",
    image: "projects/pingchat.png",
    projectDetail:
      "Ping Chat is a real-time chat application built using PUSHER, React, NodeJS, ExpressJS, MongoDB, CSS, JS, and HTML. It ensures advanced data security and user authorization using JWT for session management, Google OAuth for login, and Crypto encryption.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "NodeJS",
      },
      {
        tech: "ExpressJS",
      },
      {
        tech: "MongoDB",
      },
      {
        tech: "PUSHER",
      },
      {
        tech: "CSS",
      },
      {
        tech: "JavaScript",
      },
      {
        tech: "HTML",
      },
    ],
  },
  {
    id: 2,
    projectName: "Insta Clone",
    url: "https://github.com/Ratnesh4193/InstaClone",
    image: "projects/instaclone.png",
    projectDetail:
      "Insta is a comprehensive Social Media platform developed using React, NodeJS, ExpressJS, MongoDB, and JS. It features multimedia posts, likes, comments, friend-based chat, user profiles, and personalized feeds for seamless online interaction.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "NodeJS",
      },
      {
        tech: "ExpressJS",
      },
      {
        tech: "MongoDB",
      },
      {
        tech: "JavaScript",
      },
    ],
  },
  {
    id: 3,
    projectName: "CF_Helper",
    url: "https://github.com/Ratnesh4193/CF_Helper",
    image: "projects/cfhelper.png",
    projectDetail:
      "CF_Helper is a project aimed at assisting users with Codeforces contests. It provides functionalities such as problem searching, contest analysis, and user statistics.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "NodeJS",
      },
      {
        tech: "ExpressJS",
      },
      {
        tech: "MongoDB",
      },
      {
        tech: "Codeforces API",
      },
    ],
  },
  {
    id: 4,
    projectName: "picPulse",
    url: "https://github.com/Ratnesh4193/picPulse",
    image: "projects/picpulse.png",
    projectDetail:
      "picPulse is a project focused on generating image-based pulse animations. It uses image processing techniques to create mesmerizing visual effects based on the input images.",
    technologiesUsed: [
      {
        tech: "Python",
      },
      {
        tech: "OpenCV",
      },
      {
        tech: "NumPy",
      },
      {
        tech: "Matplotlib",
      },
    ],
  },
  {
    id: 5,
    projectName: "PledgeUp",
    url: "https://github.com/Ratnesh4193/PledgeUp",
    image: "projects/pledgeup.png",
    projectDetail:
      "PledgeUp is a web application designed to facilitate and manage pledges for various causes or events. It allows users to create, view, and manage pledges, promoting community engagement and social awareness.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "NodeJS",
      },
      {
        tech: "ExpressJS",
      },
      {
        tech: "MongoDB",
      },
      {
        tech: "Ant Design",
      },
    ],
  },
  {
    id: 6,
    projectName: "BlogPost",
    url: "https://github.com/Ratnesh4193/BlogPost",
    image: "projects/blogpost.png",
    projectDetail:
      "BlogPost is a blogging platform where users can create, publish, and manage their blog posts. It provides features such as rich text editing, post categorization, and user authentication.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "NodeJS",
      },
      {
        tech: "ExpressJS",
      },
      {
        tech: "MongoDB",
      },
      {
        tech: "Draft.js",
      },
    ],
  },
  {
    id: 7,
    projectName: "ToDoList",
    url: "https://github.com/Ratnesh4193/ToDoList",
    image: "projects/todolist.png",
    projectDetail:
      "ToDoList is a simple yet effective task management application. Users can create, update, and delete tasks, ensuring efficient organization and productivity.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "NodeJS",
      },
      {
        tech: "ExpressJS",
      },
      {
        tech: "MongoDB",
      },
      {
        tech: "Bootstrap",
      },
    ],
  },
  {
    id: 8,
    projectName: "virtual-assistant",
    url: "https://github.com/Ratnesh4193/virtual-assistant",
    image: "projects/virtualassistant.png",
    projectDetail:
      "Virtual Assistant is a project focused on developing a conversational AI assistant. ",
    technologiesUsed: [
      {
        tech: "Python",
      },
      {
        tech: "Natural Language Processing (NLP)",
      },
      {
        tech: "Speech Recognition",
      },
      {
        tech: "DialogFlow",
      },
    ],
  },
];
export default function handler(req, res) {
  res.status(200).json(portfolio);
}
