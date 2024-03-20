const expertise = [
  {
    id: 0,
    title: "Full Stack Development",
    desc: "Skilled full-stack developer experienced in building robust web applications using React, Node.js, Express.js, and MongoDB. Proficient in developing and maintaining scalable and efficient web solutions. Strong understanding of server-side rendering, RESTful APIs, and database management.",
  },
  {
    id: 1,
    title: "Problem Solving",
    desc: "Experienced problem solver with proficiency in algorithms and data structures. Authored diverse Data Structures and Algorithms problems and conducted rigorous testing. Ranked highly in coding competitions such as ICPC, Google Hash Code, and Google Code Jam.",
  },
  {
    id: 2,
    title: "Technical Skills",
    desc: "Proficient in programming languages including C++, C, JavaScript, and R. Experienced in web technologies such as React, Express.js, and Node.js. Familiar with database management systems like MongoDB and SQL. Knowledgeable in DevOps tools including Docker, Kubernetes, and CI/CD pipelines.",
  },
  {
    id: 3,
    title: "Version Control and Collaboration",
    desc: "Skilled in version control and collaboration using Git and GitHub. Proficient in utilizing GitHub for version control, issue tracking, and collaboration. Experienced in contributing to open-source projects and collaborating with developers.",
  },
  {
    id: 4,
    title: "Leadership and Collaboration",
    desc: "Demonstrated leadership and collaboration skills through participation and achievements in coding competitions. Effective communicator and team player with strong problem-solving abilities. Proactive and adaptable with a passion for continuous learning and improvement.",
  },
  {
    id: 5,
    title: "DevOps Expertise",
    desc: "Basic knowledge of CI/CD: Seamless integration from code to deployment. Dockerized: Streamlined testing and deployment with Docker. Kubernetes Awesomeness: 40% resource boost for better performance. Security: OWASP and Trivy scan for solid security. Scale: With DockerHub and Kubernetes, DevCart is set to scale, accommodating 2X more users for peak performance.",
  },
];

export default function handler(req, res) {
  res.status(200).json(expertise);
}
