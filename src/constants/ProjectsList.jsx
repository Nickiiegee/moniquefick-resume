import COUNTRIES from "../../src/assets/projects/countries.png";
import SHOPPING from "../../src/assets/projects/shopping.png";
import RESUME from "../../src/assets/projects/resume.png";
import RZEN from "../../src/assets/projects/rzen.png";
import SUPPLIES from "../../src/assets/projects/supply.png";
import EXPENSES from "../../src/assets/projects/expenses.png";

export const ProjectList = [
  {
    id: 1,
    name: "My Resume - 2026",
    description:
      "An updated resume built with HTML/CSS, React and Vite. This was a project I did to practice my skills in front-end development.",
    image: RESUME,
    github: "https://moniquefick.github.io/monique-fick-resume/",
    tech: ["React", "Vite", "TailwindCSS"],
  },
  {
    id: 2,
    name: "Resource Zen - 2024",
    description:
      "A resource management tool developed with my company, focusing on simplifying project and team coordination.",
    image: RZEN,
    demo: "https://www.resourcezen.co.za/",
    tech: ["React", "Material UI", "NextJS", "Python", "AWS"],
  },
  {
    id: 3,
    name: "Country App 2024",
    description:
      "A simple app that displays a list of countries which you can filter and keep state when you switch between screens. This was a project I did to familiarise myself with react-native.",
    image: COUNTRIES,
    github: "https://github.com/Nickiiegee/CountryApp",
    tech: ["React Native", "Tanstack", "Kotlin", "Swift"],
  },
  {
    id: 4,
    name: "Mock Daily Expenses - 2025",
    description: "A simple app that helps to keep track of daily expenses supporting actions like exporting to CSV and clearing the list.",
    image: EXPENSES,
    demo: "https://mock-daily-expense-tracker.vercel.app/",
    tech: ["React"],
  },
  {
    id: 5,
    name: "Mock Supply Dashboard - 2025",
    description:
      "A sample app created to experiment Tailwind CSS. This dashboard is dynamically built to allow the user to keep track of stock for many containers across multiple categories.",
    image: SUPPLIES,
    demo: "https://mock-supply-dashboard.vercel.app/",
    tech: ["React", "TailwindCSS", "NextJS", "Supabase"],
  },
  {
    id: 6,
    name: "Smart Shopping List - 2025",
    description:
      "This app was created to display simple, yet effective track record of shopping supplies, giving suggestions on recently bought items as well as displaying a list of items recently bought.",
    image: SHOPPING,
    demo: "https://smart-shopping-list-seven.vercel.app/",
    tech: ["React"],
  },
];
