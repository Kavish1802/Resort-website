import {
  carrent,
  jobit,
} from "../assets";
import River1 from "../assets/River1.jpg";
import River2 from "../assets/River2.jpg";
import River3 from "../assets/River3.jpg";
import trust from "../assets/tech/trust.png";
import camp  from "../assets/tech/camp.png";
import resort from "../assets/tech/resort.png";
import safety from "../assets/tech/safety.png";
import verified from "../assets/tech/verified.png";
import riverside from "../assets/tech/ganga-river.png";
import campfiremusic from "../assets/campfriemusic.png";
import archery from "../assets/archery.png";
import food from "../assets/food.png";
import trekking from "../assets/trekking.png";
import Icon from "../assets/company/Icon.png";
import cabbana from "../assets/cabbana.png";
import stingray from "../assets/stingraystacks.png";
import Insta from '../assets/instagram.png'
console.log(campfiremusic);

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Amenities",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id:"Instagram"
  }
];
const services = [
  {
    title: "Trekking",
    image: trekking,
  },
  {
    title: "Archery",
    image: archery,
  },
  {
    title: "Food",
    image: food,
  },
  {
    title: "Campfire & Music",
    image: campfiremusic,
  },
  {
    title: "River Side",
    image: River1,
  },
  {
    title: "Bathing",
    image: River2,
  },
  {
    title: "Wildlife",
    image: River3,
  },
];

const technologies = [
  {
    name: "html",
    icon: trust,
    desc:"Trust"
  },
  {
    name: "CSS 3",
    icon: camp,
    desc:"Camping"
  },
  {
    name: "JavaScript",
    icon: resort,
    desc:"Resort"
  },
  {
    name: "TypeScript",
    icon: safety,
    desc:"Safety"
  },
  {
    name: "React JS",
    icon: verified,
    desc:"Verified"
  },
  {
    name: "Redux Toolkit",
    icon: riverside,
    desc:"Riverside"
  },
];

const StayTypes = [
  {
    title: "Cabbana Cottages",
    iconBg: "#383E56",
    image:cabbana,
    date: "March 2020 - April 2021",
    points: [
      "1-2 lines decription here"
    ],
  },
  {
    title: "Glamping Nests",
    image:stingray,
    iconBg:  "#383E56",
    points: [
     "1-2 lines decription here"
    ],
  },
   // used in carousel in amenities
];

const testimonials = [
  {
    testimonial:
      "The glamping Groove on the banks of the Choral River near Indore, MP, is a delightful experience. The natural beauty, luxurious accommodation, and friendly staff made my stay perfect. Highly recommended!.",
    name: "Priya Sharma",
    designation: "Indore , ",
    company: "Madhya Pradesh",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "The glamping resort near Indore exceeded my expectations. The beautiful surroundings, well-designed tents, and welcoming staff provided a peaceful and revitalizing experience. Highly recommended!",
    name: "Kavish Gupta",
    designation: "Indore ,",
    company: "Madhya Pradesh",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
    "We had a fantastic time at the glamping resort near Indore. The serene location, top-notch accommodation, and hospitable staff made it an ideal retreat for the whole family. Highly recommended!",
    name: "Rajesh Patel",
    designation: "Bhopal , ",
    company: " Madhya Pradesh",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    image: jobit,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, StayTypes, testimonials, projects };
