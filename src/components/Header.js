import React, { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import classes from './Header.module.css';
import {Link} from 'react-router-dom';



const Header = (props) => {

  const [toggleMobileMenuIcon, setToggleMobileMenuIcon] = useState(false);
  const [targetElement, setTargetElement] = useState('');

  const toggleHandler = () => {
    setToggleMobileMenuIcon(!toggleMobileMenuIcon);
  }

  const navHandler = (e, anchor) => {
    setTargetElement(anchor)
    setToggleMobileMenuIcon(false);
    
  }
  
  useEffect(()=>{
    if(targetElement){
      const element = document.getElementById(targetElement).offsetTop - document.getElementById('header').getBoundingClientRect().height;
      window.scrollTo({
        top: element,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [ targetElement]);

  return (
    <header id='header' className={classes.header}>
      <div className={classes.innerHeader}>
        <h3 className={classes.title}>My Portfolio</h3>
      <div>
        {toggleMobileMenuIcon ? <CloseIcon sx={{ fontSize: 28, color: 'rgb(255, 255, 255)' }} onClick={toggleHandler} className={classes.icon}/> : <MenuIcon sx={{ fontSize: 28, color: 'rgb(255, 255, 255)' }} onClick={toggleHandler} className={classes.icon}/> }
      </div>
      </div>
      <div className={toggleMobileMenuIcon ? `${classes.menuContainer} ${classes.showMenuContainer}` : `${classes.menuContainer}`}>
        <ul className={classes.list}>
          <li><Link onClick={(e)=>navHandler(e, 'home')} to="/index.html">Home</Link></li>
          <li><Link onClick={(e)=>navHandler(e, 'projects')} to="/index.html">Projects</Link></li>
          <li><Link onClick={(e)=>navHandler(e, 'contactme')} to="/index.html">Contact me</Link></li>
          <li><Link onClick={(e)=>navHandler(e, 'aboutme')} to="/aboutme.html">About me</Link></li>
        </ul>
      </div>
    </header>
  )
};

export default Header;