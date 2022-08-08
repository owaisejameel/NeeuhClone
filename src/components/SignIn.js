import React, { Component } from "react";
import {
  Grid,
  Button,
  Checkbox,
  TextField,
  Typography,
  Divider,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

import { withStyles } from "@material-ui/styles";

const myStyle = () => ({
  blueLine: {
    width: "30px",
  },
  blueLineFont: {
    height: "2px",
  },
});

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      signIn: true,
    };
  }

  componentWillUnmount() {
    console.log("SignIn unmount");
  }
  componentDidMount() {
    console.log("SignIn componentDidMount");
    // console.log(this.props);
  }
  handleSignIn = () => {
    console.log("clicked");
    // fetch("https://swapi.dev/api/people/1").then((resp) => {
    //   resp.json().then((res) => {
    //     console.log("result is", res);
    //   }).;
    // });
    fetch("https://swapi.dev/api/people/1")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("result", res);
        console.log(res.name);
        if (res.name === "Luke Skywalker") {
          this.props.history.push("/dashboard");
        }
      });

    // fetch("https://swapi.dev/api/people/1")
    //   .then((res) => res.json())
    //   .then((res) => console.log("result", res));
  };
  render() {
    const { classes } = this.props;
    return (
      <>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{
            height: "100vh",
          }}
        >
          <Grid
            item
            xs={4}
            container
            direction="column"
            style={{
              //   border: "2px solid black",
              gap: "10px",
              padding: "2rem",
              borderRadius: "12px",
              boxShadow: "0 0 35px 5px rgba(251,227,245,1)",
            }}
          >
            <Grid item container justifyContent="center">
              <Typography>{this.state.signIn ? "SignUp" : "signIn"}</Typography>
              <Grid container justifyContent="center">
                <Divider className={classes.blueLine} />
              </Grid>
            </Grid>

            <Grid item container justifyContent="center">
              <Typography>Welcome to Neeuh!</Typography>
            </Grid>
            <Grid item container justifyContent="center">
              <TextField
                fullWidth
                variant="outlined"
                label="Username"
                placeholder="username"
              />
            </Grid>
            <Grid item container justifyContent="center">
              <TextField
                placeholder="password"
                fullWidth
                variant="outlined"
                label="Password"
              />
            </Grid>
            <Grid item container justifyContent="center">
              <TextField
                placeholder="selectfile"
                fullWidth
                type="file"
                label="Password"
              />
            </Grid>
            <Grid item container>
              <Grid item xs={4} container alignItems="center">
                <Checkbox />
                <Typography>Remember me</Typography>
              </Grid>
              <Grid item xs={8} container alignItems="center">
                <Typography>forgot Username/Password</Typography>
              </Grid>
            </Grid>
            <Grid item container justifyContent="center">
              <NavLink to="/dashboard">
                <Button onClick={() => this.handleSignIn()}>SignIN</Button>
              </NavLink>
            </Grid>
            {this.state.signIn ? (
              <Grid item container justifyContent="center" alignItems="center">
                <Typography style={{ fontSize: "20px", color: "blue" }}>
                  Already have an Account?
                </Typography>
                <Typography
                  onClick={() => this.setState({ signIn: false })}
                  style={{ fontSize: "20px", color: "blue" }}
                >
                  SignIn
                </Typography>
              </Grid>
            ) : (
              <Grid item container justifyContent="center" alignItems="center">
                <Typography style={{ fontSize: "20px" }}>
                  Don't have an Account?{" "}
                  <Typography
                    onClick={() => this.setState({ signIn: true })}
                    style={{
                      fontSize: "20px",
                      color: "blue",
                      display: "inline-block",
                      cursor: "pointer"
                    }}
                  >
                    SignUp
                  </Typography>
                </Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(myStyle)(SignIn);
