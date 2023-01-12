import React from "react";
import { MdLaunch } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import classes from "./MyCard.module.css";

const MyCard = (props) => {
  const {img, title, description, liveLink, gitHubLink} = props.item;
  return (
    <div className={classes.myCard}>

      <div className={classes.imageDiv}>
        <img src={img} alt="" className={classes.image} />
      </div>

      <div className={classes.aboutImage}>
       <div className={classes.title}>
        <h3>{title}</h3>
      </div>

      <div className={classes.description}>
          <p>{description}</p>
      </div>

      <div className={classes.linkIcons}>
        <a href={liveLink} target="_blank" rel="noreferrer"><MdLaunch/></a>
        <a href={gitHubLink} target="_blank" rel="noreferrer"><FaGithub/></a>
      </div> 
      </div>
      
    </div>
  );
};

export default MyCard;
