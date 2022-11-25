import pic from "../images/temp.png";
import '../index.css';

import classes from "./IntroSection.module.css";

const IntroSection = (props) => {

  return (
      <section id="home" className={classes.intro}>
        <div className={classes.profile}>
          <img src={pic} alt="my profile"/>
        </div>
        <div className={classes.introText}>
          <p>
            Hi, I am
            <br />
            <span>&nbsp;&nbsp;&nbsp;Pardeep</span>.
            <br />
            A 23 years old <br />
            &nbsp;software developer.
          </p>
        </div>
      </section>
  );
};

export default IntroSection;
