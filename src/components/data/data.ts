type Skill = {
  title: string,
  icon: string,
  style?: object
};

export const skills: Skill[] = [
  {
    title: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    title: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    title: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    title: "Flask",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },
  {
    title: "GCP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  {
    title: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
  },
  {
    title: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  // {
  //   title: "SQL",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  // },
  // {
  //   title: "MongoDB",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  // },
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    title: "Pandas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  {
    title: "FastAPI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
  },
  {
    title: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
  }
];

type Event = {
  title: string,
  company: String
  description: string,
  direction: string
  date: String
  style?: object
};

export const events: Event[] = [
  {
    title: "Co-founder / Backend Engineer",
    company: "TextMarley",
    description: "Founded own company with 2 teammates",
    direction: "right",
    date: "January 2025 - Present"
  },
  {
    title: "Senior Quantitative Developer",
    company: "BU Finance and Investment Club",
    description: "Founded own company with 2 teammates",
    direction: "left",
    date: "September 2023 - December 2024"
  },
  { 
    title: "Professional Ski Instructor",
    company: "Ullr Snow Sports",
    description: "Founded own company with 2 teammates",
    direction: "right",
    date: "December 2019 - March 2023"
  }
]
