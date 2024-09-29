import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
// import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Portofolio Web",
    company: "Self Porto",
    description: `creating a personal web portfolio using React for its dynamic and component-based structure, paired with Tailwind CSS to enhance the design aesthetics, making the portfolio visually appealing and modern. This project serves both as a learning experience and a way to showcase my skills in web development, while ensuring a clean, responsive.`,
    technologies: ["React","Node","Tailwind"],
  },
  {
    year: "2023",
    role: "Analyzing Data by Comparing Model",
    company: "Data Analyze",
    description: `Perform a analyzing data, with 1 data source, with then comparing each model to calculate the accuracy obtained.`,
    technologies: ["Ipynb","Jupyter NoteBook","Machine Learning","Kaggle"],
  },
  {
    year: "2022 - 2023",
    role: "Write File, Searching and Sorting",
    company: "Assignment Project",
    description: `Developed hotel around the world study case project using C programming languange to perform sort,searching and write file, continued with flowchart progress.`,
    technologies: ["C","Draw.io","Excel CSV File"],
  },
  {
    year: "2022 - 2023",
    role: "Database Design",
    company: "Pharmacy Study Case",
    description: `Developed and normalized the core functional data of the pharmacy to ensure data integrity and eliminate redundancy. This process guarantees that each table is functionally independent while still maintaining the ability to access and relate to other tables seamlessly, without encountering any data anomalies and follow up with ERD.`,
    technologies: ["Excel","Visual Paradigm"],
  },
  {
    year: "2022",
    role: "Website Design",
    company: "Watch Company and E-Commerce Market Website",
    description: `Contributed to the development of web applications using Figma, HTML, CSS, and JS.`,
    technologies: ["Figma","HTML","CSS","JavaScript"]
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Web Design",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Data Analytics",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  phoneNo: "+6287853330699",
  email: "adior.gandawidjaja@gmail.com",
};
