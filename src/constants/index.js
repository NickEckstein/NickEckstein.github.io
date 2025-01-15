import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    photoshop,
    html,
    css,
    reactjs,
    illustrator,
    python,
    nodejs,
    pytorch,
    git,
    color,
    tshirtdotco,
    carapi,
    llm,
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
      title: "Python Developer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "Graphic Designer",
      icon: backend,
    },
    {
      title: "Husband",
      icon: creator,
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
      name: "Photoshop",
      icon: photoshop,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Illustrator",
      icon: illustrator,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "PyTorch",
      icon: pytorch,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Python Developer",
      company_name: "Personal",
      icon: color,
      iconBg: "#383E56",
      date: "September 2020 - Present",
      points: [
        "Developing and learning with different python applications and exercises.",
        "Learning how to use python libraries like PyTorch and Jupyter Notebook.",
        "Implementing Machine Learning into some of my projects.",
        "Participating in LeetCode Assignments to better my Python knowledge.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Personal",
      icon: color,
      iconBg: "#E6DEDD",
      date: "September 2018 - Present",
      points: [
        "Developing and maintaining web applications and previous websites.",
        "Collaborating with a team over the course of a few months at a time to work towards a final goal.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Learning how to implement new libraries in JavaScript.",
      ],
    },
    {
      title: "Graphic Designer",
      company_name: "Personal",
      icon: color,
      iconBg: "#383E56",
      date: "August 2021 - Present Day",
      points: [
        "Developing the skills necessary to think and create like an industry professional designer.",
        "Learning various industry standard technologies to progress.",
        "Making crucial design choices on behalf of clients.",
        "Designing and delivering physical products to paying clients.",
      ],
    },
    {
      title: "Husband",
      company_name: "Personal",
      icon: color,
      iconBg: "#E6DEDD",
      date: "April 2024 - Present",
      points: [
        "Spending time with my beautiful girlfriend as often as I can.",
        "Working with friends and family to get my girlfriend nice gifts.",
        "Taking my girlfriend out to fancy restaurants.",
        "Participating in fun activities with my girlfriends.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Working with Nick has been an absolute pleasure, he always made sure to have products delivered before the deadline.",
      name: "Bob Eckstein",
      designation: "My Uncle",
      company: "",
      image: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    {
      testimonial:
        "Nick is a hard working and honest man, he is always there when you need him.",
      name: "Susan Eckstein",
      designation: "My Mother",
      company: "",
      image: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    {
      testimonial:
        "Nick always asked questions about his work, he never wanted to leave a stone unturned.",
      name: "Joseph Eckstein",
      designation: "My Father",
      company: "",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  ];
  
  const projects = [
    {
      name: "TShirtDotCo",
      description:
        "This is the Front-End Web Application for my Senior Project Company 'TShirtDotCo'.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: tshirtdotco,
      source_code_link: "https://github.com/NickEckstein/SeniorProject",
    },
    {
      name: "Used Car Sales Database",
      description:
        "A Java Application that Stores a Car API and allows you to 'Buy and Sell' Cars put up for Sale by Other Users.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "EvenMoreJava",
          color: "pink-text-gradient",
        },
      ],
      image: carapi,
      source_code_link: "https://github.com/NickEckstein/CSC325CarProject",
    },
    {
      name: "Shakespearean LLM",
      description:
        "A Python Application that uses PyTorch to Machine Learn from Shakespearean English Texts",
      tags: [
        {
          name: "JupyterNotebook",
          color: "blue-text-gradient",
        },
        {
          name: "PyTorch",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: llm,
      source_code_link: "https://github.com/NickEckstein/LargeLanguageModel",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };