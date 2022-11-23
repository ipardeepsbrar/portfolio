import React from "react";

import classes from "./Aboutme.module.css";
import bg from "../images/bg.jpg";
import Footer from "./Footer";

const Aboutme = (props) => {
  return (
    <>
      <section id="aboutme" className={classes.computers}>
        <h3>How I got into Computers ?</h3>
        <p>
          Until grade 10th, I was just a normal kid who was not good at
          studied but liked playing video games. Didn't know much about
          computers. In grade 11th, I took a subject called Informatic
          Practices which was basically Java GUI programming. All of a sudden I
          was passionate about a subject and started getting high scores in this
          subject and started competing with toppers in the class. It was the
          only subject I didn't have to try hard to sit down and study and I
          would still manage to get very high scores in my exams. After high
          school, I came to Canada. Wasted about three years making a lot of
          mistakes and exploring Canada. I was naive and didn't know what to do
          further in life. But I had to do something so I thought why not
          leverage what I am already good at. So, I started learning web development by
          myself from online courses, youtube videos and all other resources
          which were available online. And that is how my journey began with
          computers !!!
        </p>
      </section>
      <section className={classes.myLikes}>
        <h3>Things I Like</h3>
        <p>
            I like to play football (soccer). I even broke my ACL while playing football when I was in high school. I really wanted to pursue it professionally but it just didn't work out for me. I also like hiking, trekking, going to new places, ancient monumental buildings. Learning about how a business works, how economies work also interests me. I always find myself learning things which will eventually help me open my own business.
        </p>
      </section>
      <Footer/>
      <div className="bgimage">
        <img src={bg} alt="background" />
      </div>
    </>
  );
};

export default Aboutme;
