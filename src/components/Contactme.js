import { TextField, Button, IconButton } from "@mui/material";
import React from "react";
import classes from "./Contactme.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Contactme = (props) => {
  return (
    <section id="contactme" className={classes.contactme}>
      <div className={classes.social}>
        <h3>Social Media</h3>
        <div>
          <IconButton
            href="https://www.instagram.com/ipardeepsbrar/"
            target="_blank"
          >
            <InstagramIcon
              className={classes.icons}
              fontSize="large"
              color="secondary"
            />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/ipardeepsbrar/"
            target="_blank"
          >
            <LinkedInIcon
              className={classes.icons}
              fontSize="large"
              color="primary"
            />
          </IconButton>
          <IconButton href="https://twitter.com/ipardeepsbrar" target="_blank">
            <TwitterIcon
              className={classes.icons}
              fontSize="large"
              color="primary"
            />
          </IconButton>
          <IconButton href="https://github.com/ipardeepsbrar" target="_blank">
            <GitHubIcon
              className={classes.icons}
              fontSize="large"
              sx={{color:'black'}}
            />
          </IconButton>
          <IconButton
            href="https://www.youtube.com/@ipardeepsbrar"
            target="_blank"
          >
            <YouTubeIcon
              className={classes.icons}
              fontSize="large"
              sx={{color:'red'}}
            />
          </IconButton>
        </div>
      </div>
      <div className={classes.emailForm}>
        <h3>Send Message</h3>
        <form>
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            fullWidth
            required
            sx={{ margin: "2rem 0" }}
            className={classes.formElement}
          />
          <TextField
            id="outlined-basic"
            label="Enter your email"
            variant="outlined"
            fullWidth
            required
            sx={{ margin: "2rem 0" }}
            className={classes.formElement}
          />
          <TextField
            id="outlined-basic"
            label="Enter your message..."
            variant="outlined"
            fullWidth
            required
            sx={{ margin: "2rem 0" }}
            className={classes.formElement}
          />
          <Button
            variant="contained"
            sx={{ margin: "2rem 0" }}
            className={classes.formElement}
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contactme;
