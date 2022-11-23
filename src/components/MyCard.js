import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

import classes from "./MyCard.module.css";

const MyCard = (props) => {
  const {img, title, description, liveLink, gitHubLink} = props.item;
  return (
    <div className={classes.myCard}>
      <Card>
        <CardMedia component="img" image={img} className={classes.images} alt=""/>
        <CardHeader
          sx={{
            color: "rgb(80,144,149)",
            padding: "12px 10px 10px 10px",
            borderTop: "0.6px solid rgb(102,102,102)",
          }}
          title={title}
        ></CardHeader>
        <CardContent sx={{ padding: "10px", paddingBottom:'0px', marginBottom:'32px' }}>
          <Typography
            sx={{ height: "2px", padding: "0px", paddingBottom: "0px" }}
            variant="body2"
            color="text.secondary"
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ padding: "24px 10px 12px 10px" }}>
          <a href={liveLink} target='blank' rel='noreferrer'>
            <IconButton>
              <LaunchIcon />
            </IconButton>
          </a>
          <a href={gitHubLink} target='blank' rel='noreferrer'> 
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </a>
        </CardActions>
      </Card>
    </div>
  );
};

export default MyCard;
