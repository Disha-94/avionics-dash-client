import React from "react";
import { addCourse, getUser } from "../data/api";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Details from "../components/Details";
import PaymentMode from "../components/PaymentMode";
import Success from "../components/Success";
import PayCard from "../components/PayCard";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    justifyContent: "center",
    height: "50vw",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepper: {
    iconColor: "#2E3B55",
  },
}));

function getSteps() {
  return ["Enter Details", "Payment Mode", "Payment", "Order Confirmed"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Details />;
    case 1:
      return <PaymentMode />;
    case 2:
      return <PayCard />;
    case 3:
      return <Success />;
    default:
      return "Unknown step";
  }
}

const Payment = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      addCourse(location.state.courseID, props.user.id, props.token).then(value => {
        if ((value+'').includes('2')) {
          getUser(props.user.email, props.token).then(usr => {
            if (usr.data) {
              props.handleUser(usr.data['role'], usr.data);
              navigate("/programs");
            }
          });
        }
      })
      //let temp = Object.keys(props.user).length > 0 ? props.user.course_ids : [];
      //temp.push(location.state.courseID);
      //props.setUser(prevState => ({ ...prevState, course_ids: temp}));
      //navigate('/programs');
    } else {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={8}>
        <Card variant="outlined" style={{ marginTop: "5%" }}>
          <CardContent>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <AppBar
                  position="static"
                  style={{ background: "#2E3B55", alignItems: "center" }}
                >
                  <Toolbar>
                    <img
                      src="/AD.png"
                      style={{ height: 50 }}
                      alt="logo"
                      className={classes.logo}
                    />
                  </Toolbar>
                </AppBar>
              </Grid>
              <Grid item xs={12}>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                  {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                      labelProps.optional = (
                        <Typography component={'span'} variant="caption"></Typography>
                      );
                    }
                    if (isStepSkipped(index)) {
                      stepProps.completed = false;
                    }
                    return (
                      <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.actions}>
                  <div>
                    <Typography
                      className={classes.instructions}
                      component={'span'}
                      style={{ height: "350px" }}
                    >
                      {getStepContent(activeStep)}
                      <br />
                    </Typography>
                    <div className={classes.actions}>
                      {activeStep === 0 ? (
                        <Button
                          className={classes.button}
                          component={Link} to="/programs"
                        >
                          Cancel
                        </Button>
                      ) : (
                        <Button
                          disabled={activeStep === steps.length - 1}
                          onClick={handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        style={{ background: "#2E3B55", color: "#ffffff" }}
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1
                          ? "Finish"
                          : "Next"}
                      </Button>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}


export default Payment;