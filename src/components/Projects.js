import React from "react";
import MyCard from "./MyCard";
import classes from "./Projects.module.css";
import pic1 from "../images/project1.png";
import pic2 from '../images/gCart.png';
import pic3 from '../images/project3.png';

const list = [
  {
    img: pic1,
    title: "Food Order App",
    description:
      "It is an online food ordering app made with react. I did the logic part while learning react.",
    liveLink: "#",
    gitHubLink: "https://github.com/ipardeepsbrar/foodOrderApp.git",
  },
  {
    img:pic2,
    title:'Grocery Cart',
    description:'It is a web based grocery cart or a ToDo list with some cool features as editing an item.',
    liveLink:'#',
    gitHubLink:'https://github.com/ipardeepsbrar/grocery-cart.git'
  },
  {
    img: pic3,
    title:'Figma Design Project',
    description:'It is a project I did while doing Meta Frontend Developer Course. In this project I designed a wireframe and made a prototype of that.',
    liveLink:'#',
    gitHubLink:'https://github.com/ipardeepsbrar/figmaProject.git'
  },
  {
    img:'',
    title:'new',
    description:'description goes here',
    liveLink:'',
    gitHubLink:''
  }
];

const Projects = (props) => {
  return (
    <section id="projects" className={classes.projects}>
      <div className={classes.title}>
        <h3>Projects</h3>
      </div>
      <div className={classes.projectsContainer}>
        {list.map((item) => (
          <MyCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
