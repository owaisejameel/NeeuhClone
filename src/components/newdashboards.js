import { Button, Typography, Grid } from "@material-ui/core";

import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";


const myStyle = () => ({
  para: {
    border: "1px solid #d3dce6",
    borderRadius: "4px",
    borderLeft: "4px solid blue",
    padding: "20px",
    lineHeight: "30px",
    margin: "auto",
  },
  textAppend: {
    position: "relative",
    "&:before": {
      content: "'Note: '",
      color: "black",
      fontWeight: "bold",
    },
  },
  typoColor: {
    color: "red",
  },
});

class Newdashboards extends Component {
  componentDidMount() {
    console.log("Newdashboards componentDidMount");
  }
  componentWillUnmount() {
    console.log("Newdashboards unmount");
  }
  constructor() {
    super();
    this.state = {
      DATA: [
        {
          id: 6217,
          type: "tip",
          attributes: {
            date_of_tips: "2030-07-01",
            status: "Incomplete",
            name: "Tip 1",
            days_count: 23,
            read_tip:
              "Spend 5 minutes daily working on your business finances. Whether it’s adding transactions or reviewing key reports. You’ll feel empowered and in control of your financials.",
            game_level_id: 519,
            account_id: 100,
            notification: null,
          },
        },
        {
          id: 6218,
          type: "tip",
          attributes: {
            date_of_tips: "2030-07-01",
            status: "Incomplete",
            name: "Tip 1",
            days_count: 23,
            read_tip:
              "Spend 5 minutes daily working on your business finances. Whether it’s adding transactions or reviewing key reports. You’ll feel empowered and in control of your financials.",
            game_level_id: 519,
            account_id: 100,
            notification: null,
          },
        },
        {
          id: 6219,
          type: "tip",
          attributes: {
            date_of_tips: "2030-07-01",
            status: "Incomplete",
            name: "Tip 1",
            days_count: 23,
            read_tip:
              "Spend 5 minutes daily working on your business finances. Whether it’s adding transactions or reviewing key reports. You’ll feel empowered and in control of your financials.",
            game_level_id: 519,
            account_id: 100,
            notification: null,
          },
        },
      ],
    };
  }

  filtered = (id) => {
    console.log("click hua", id);

    let updatedArray = this.state.DATA.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          id: parseInt(Math.random() * 10),
          attributes: {
            ...item.attributes,
            status:
              item.attributes.status == "Incomplete"
                ? "complete"
                : "Incomplete",
          },
        };
      }

      return item;
    });
    console.log("updated", updatedArray);
    this.setState({ DATA: updatedArray });
  };

  delete = (id) => {
    let array = this.state.DATA.filter((e) => e.id != id);
    this.setState({
      DATA: array,
    });
  };

  // parabox = (classes) =>{

  //   return(
  //     <>
  //     <Typography className={classes.typoColor} variant="h1">hello</Typography>
  //     <Typography variant="h1">hello</Typography>
  //     </>
  //   )
  // }

  render() {
  
    const { classes } = this.props;
    return (
      <>
       {this.state.DATA.map((item) => {
          return (
            <div key={item.id}>
              <p
                style={{ cursor: "pointer", display: "inline" }}
                onClick={() => {
                  this.filtered(item.id);
                }}
              >
                {`${item.id} ${item.attributes.status} (${item.attributes.read_tip})`}</p>
              <Button onClick={() => this.delete(item.id)}>delete</Button>
            </div>
          );
        })}
        <Grid item xs={9} container className={classes.para}>
          <Typography className={classes.textAppend}>
            You might have played the game Treasure Hunt, where each clue
            includes the information about the next clue. That is how the linked
            list operates.
            
          </Typography>
          <Button>CLICK</Button>

        </Grid>

        {/* <Grid item xs={9} container className={classes.para}>{this.parabox(classes)}</Grid> */}
      </>
    );
  }
}

export default withStyles(myStyle)(Newdashboards);
