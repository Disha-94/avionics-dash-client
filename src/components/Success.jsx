import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {
    minWidth: 400,
    margin: "20px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    textAlign: "center",
  },
  pos: {
    marginBottom: 12,
  },
  text: {
    width: 350,
    margin: "10px",
  },
  img: { width: "200px" },
  con: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Success = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.con}>
          <img src='/animat-checkmark.gif' alt="loading..." className={classes.img} />
        </div>
        <Typography
          className={classes.title}
          variant="h2"
          color="success"
          gutterBottom
        >
          <b> Course Purchase Complete </b>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Success;
