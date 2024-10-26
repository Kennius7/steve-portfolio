import features01 from "../assets/img/skills1.png";
import features02 from "../assets/img/skills2.png";
import features03 from "../assets/img/skills3.png";
import features04 from "../assets/img/skills4.png";
import features05 from "../assets/img/skills5.png";
import features06 from "../assets/img/skills6.png";
import features07 from "../assets/img/skills7.png";
import features08 from "../assets/img/skills8.png";
import features09 from "../assets/img/skills9.png";
import features10 from "../assets/img/skills10.png";


import projImg1 from "../assets/projectImages/vampfi.webp";
import projImg2 from "../assets/projectImages/FriendnPal-Screenshot.webp";
import projImg3 from "../assets/projectImages/Matic Drive-Screenshot.webp";
import projImg4 from "../assets/projectImages/Arcromride-Screenshot.webp";
import projImg5 from "../assets/projectImages/Shosan CBT-Screenshot.webp";
import projImg6 from "../assets/projectImages/Judyhub-Screenshot.webp";
import projImg7 from "../assets/projectImages/4.jpg";
import projImg8 from "../assets/projectImages/4.jpg";
import projImg9 from "../assets/projectImages/4.jpg";

import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";




export const skillSetSlide = [
    {
      id: 0,
      name: "Communication Skills",
      title: "Driving and motivating others through effective communication",
      img: features10,
    },
    {
      id: 1,
      name: "Client Management",
      title: "Successful business development through good customer relationship",
      img: features01,
    },
    {
      id: 2,
      name: "Territory Management",
      title: "Manage your territory to increase sales",
      img: features02,
    },
    {
      id: 3,
      name: "Negotiation",
      title: "Closing deals with clients",
      img: features03,
    },
    {
      id: 4,
      name: "Sales Planning",
      title: "Handling financial planning and budgeting",
      img: features04,
    },
    {
      id: 5,
      name: "Coaching",
      title: "Being an effective and successful leader",
      img: features05,
    },
    {
      id: 6,
      name: "Power Point",
      title: "Presentation content creation",
      img: features06,
    },
    {
      id: 7,
      name: "Excel",
      title: "Spreadsheet creation and management",
      img: features07,
    },
    {
      id: 8,
      name: "Data Analysis",
      title: "Processing and analyzing of data",
      img: features08,
    },
    {
      id: 9,
      name: "Forward Thinking",
      title: "Creating and implementing new ideas",
      img: features09,
    }
  ];

export const softwareProjects = [
    {
      title: "Vamp Facility Intelligence Website",
      description: "Front End Development and Design",
      imgUrl: projImg1,
      buttonTitle: "Vampfi Link",
      url: "https://vampfi.com/",
    },
    {
      title: "FriendnPal Website",
      description: "Front End Development and Design",
      imgUrl: projImg2,
      buttonTitle: "FriendnPal Link",
      url: "https://friendnpal.com",
    },
    {
      title: "Matic Drive Website",
      description: "Front End Development and Design",
      imgUrl: projImg3,
      buttonTitle: "Matic Drive Link",
      url: "https://maticdrive.com",
    },
    {
        title: "Arcromride App",
        description: "Mobile App Development",
        imgUrl: projImg4,
        buttonTitle: "Arcromride Link",
        url: "https://www.arcromride.com/",
    },
    {   title: "Computer based test",
        description: "Front End Development and Design",
        imgUrl: projImg5,
        buttonTitle: "Computer Test Link",
        url: "https://shosan-computer-based-test.netlify.app/",
    },
    {   title: "Judyhub Website",
        description: "Front End Development and Design",
        imgUrl: projImg6,
        buttonTitle: "Judyhub Link",
        url: "https://judyhub.netlify.app/",
    },
  ];

export const contentProjects = [
    {
      title: "Business Startup",
      description: "Content creation and Digital Marketing",
      imgUrl: projImg7,
      buttonTitle: "Instagram link1"
    },
    {
      title: "Business Startup",
      description: "Content creation and Digital Marketing",
      imgUrl: projImg8,
      buttonTitle: "Instagram link2"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg9,
      buttonTitle: "Instagram link3"
    },
  ];

export const projectSplideOptions = {
    // width: "90%",
    perPage: 3,
    perMove: 1,
    type: 'loop',
    speed: 1000,
    keyboard: 'global',
    autoplay: true,
    autoplaySpeed: 3000,
    rewind: true,
    rewindSpeed: 2000,
    isNavigation: false,
    arrows: true,
    focus: 0,
    start: 0,
    interval: 4000,
    easing: "linear",
    gap: '0.5rem',
    pagination: false,
    extensions: { AutoScroll },
    autoScroll: {
        speed: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
    },
    padding: '1rem',
    mediaQuery: "min",
    breakpoints: {
      1100: { perPage: 3},
      580: { perPage: 2},
      100: { perPage: 1}
    },
  };

export const skillSplideOptions = {
    // width: "90%",
    perPage: 4,
    perMove: 1,
    type: 'loop',
    speed: 1000,
    keyboard: 'global',
    autoplay: true,
    autoplaySpeed: 3000,
    rewind: true,
    rewindSpeed: 2000,
    isNavigation: false,
    arrows: true,
    focus: 0,
    start: 0,
    interval: 4000,
    easing: "linear",
    gap: '0.5rem',
    pagination: false,
    extensions: { AutoScroll },
    autoScroll: {
        speed: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
    },
    padding: '1rem',
    mediaQuery: "min",
    breakpoints: {
      1000: { perPage: 4},
      580: { perPage: 3},
      300: { perPage: 2},
      100: { perPage: 1},
    },
  };


