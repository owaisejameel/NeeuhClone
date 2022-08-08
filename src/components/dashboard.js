//@ts-nocheck
import { Route, Routes } from "react-router-dom";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import { Grid, Typography, Popover } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";


const myStyle = () => ({
  root: {
    height: "100%",
    width: "100%",
  },
  verticalNav: {
    position: "sticky",
    height: "100vh",
    backgroundColor: "#15066A",
  },
  horizontalNav: {
    position: "sticky",
    backgroundImage: "linear-gradient(to right, #15066A , #5696F4)",
    // backgroundColor:'red',
    height: "70px",
    color: "white",
  },
  dComponents: {
    // backgroundColor:'yellow',
  },
  link: {
    textDecoration: "none",
    color: "yellow",
    padding: "1rem",
  },
  activeNavLink: {
    textDecoration: "none",
    backgroundColor: "yellow",
    color: "black",
    padding: "1rem",
  },
  adminBox: {
    border: "1px solid black",
    marginRight: "45px",
    height: "40px",
    width: "40px",
    borderRadius: "50px",
    background: "#fff",
    cursor: "pointer",
  },
  icons: {
    fontSize: "35px",
  },
  iconContainer: {
    position: "relative",
  },
  iconLeaf: {
    position: "absolute",
    top: "-2px",
    right: "-6px",
    height: "20px",
    width: "20px",
    background: "black",
    borderRadius: "10px 0px",
    textAlign: "center",
  },
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  componentDidMount() {
    console.log("Dashboard componentDidMount");
    console.log("window Location", window.location);
    console.log("window History", window.history);
  }
  componentWillUnmount() {
    console.log("Newdashboards unmount");
  }

  navlinkStyle = ({ isActive }) => {
    if (isActive) {
      return {
        textDecoration: "none",
        backgroundColor: "yellow",
        color: "black",
        padding: "1rem",
      };
    } else {
      return {
        textDecoration: "none",
        color: "yellow",
        padding: "1rem",
      };
    }
  };
  render() {
    const navLinks = [
      {
        title: "Dashboard",
        path: "",
      },
      {
        title: "Transactions",
        path: "transactions",
      },
      {
        title: "Reports",
        path: "reports",
      },
      {
        title: "Mileage",
        path: "mileage",
      },
      {
        title: "Forms",
        path: "forms",
      },
      {
        title: "W1",
        path: "mileages",
      },
      {
        title: "Formik",
        path: "formik",
      },
    ];
    const { classes } = this.props;
    return (
      <Grid container alignItems="flex-start" className={classes.root}>
        <Grid item container xs={2} className={classes.verticalNav}>
          <Grid container>
            <Grid
              container
              direction="column"
              style={{ marginTop: "100px", gap: "15px" }}
            >
              {navLinks.map((link) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? classes.activeNavLink : classes.link
                  }
                  to={link.path}
                >
                  <Grid item container>
                    <Typography className={classes.wText}>
                      {link.title}
                    </Typography>
                  </Grid>
                </NavLink>
              ))}
              
            </Grid>
          </Grid>
        </Grid>

        <Grid item container xs={10}>
          <Grid
            item
            container
            justifyContent="flex-end"
            alignItems="center"
            className={classes.horizontalNav}
          >
            <Grid
              item
              container
              xs={2}
              style={{ gap: "40px", position: "relative" }}
              justifyContent="flex-end"
              alignItems="center"
            >
              <Grid item className={classes.iconContainer}>
                <MailOutlineIcon className={classes.icons} />
                <Grid item className={classes.iconLeaf}>
                  1
                </Grid>
              </Grid>
              <Grid item className={classes.iconContainer}>
                <NotificationsNoneIcon className={classes.icons} />
                <Grid item className={classes.iconLeaf}>
                  1
                </Grid>
              </Grid>
              <Grid
                item
                className={classes.adminBox}
                onClick={() => this.setState({ isOpen: true })}
              ></Grid>
              <Popover
                anchorReference="anchorPosition"
                anchorPosition={{ top: 100, left: 2300 }}
                open={this.state.isOpen}
                onClose={() => {
                  this.setState({ isOpen: false });
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <Grid container style={{ width: "200px", height: "300px" }}>
                  <NavLink to="/">
                    <Grid item>
                      <Typography>signOut</Typography>
                    </Grid>
                  </NavLink>
                  <NavLink to="transactions">
                    <Grid item>
                      <Typography>transactions</Typography>
                    </Grid>
                  </NavLink>
                </Grid>
              </Popover>
            </Grid>
          </Grid>
          <Grid item container className={classes.dComponents}>
            <Outlet />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(myStyle)(Dashboard);
