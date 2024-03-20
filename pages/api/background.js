const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Madan Mohan Malviya University Of Technology",
        degree: "Bachelor of Technology in Computer Science and Engineering",
        detail: "8.29 CGPA in Computer Science and Engineering.",
        year: "2019-2023",
      },
      {
        id: 1,
        title: "Sainik School Ghorakhal",
        degree: "Intermediate Certificate (12th)",
        detail: "92.6% in Intermediate.",
        year: "2017-2019",
      },
      {
        id: 2,
        title: "Sainik School Ghorakhal",
        degree: "High school diploma (10th)",
        detail: "9.8 CGPA in High School.",
        year: "2015-2017",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "Invesco",
        role: "Engineer",
        url: "https://www.invesco.com/",
        desc: "Leveraged R and R Shiny for interactive dashboards, boosting data visualization. Enhanced user experience with optimized components.",
        year: "07/2023 - Present",
        location: "Hyderabad, India",
      },
      {
        id: 2,
        title: "Coding Ninjas",
        role: "Problem Setter (Internship)",
        url: "https://www.codingninjas.com/",
        desc: "Authored diverse Data Structures and Algorithms problems with beginner-friendly editorials. Conducted rigorous testing on the Code Studio platform problems.",
        year: "05/2022 - 09/2023",
        location: "Remote",
      },
      {
        id: 3,
        title: "Valorant Consulting",
        role: "Software Development (Internship)",
        url: "no website",
        desc: "Automated daily Excel data entries for manufacturing with a React app, boosting client efficiency.",
        year: "03/2022 - 06/2022",
        location: "Remote",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
