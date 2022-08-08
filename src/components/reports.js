import {
  Button,
  Typography,
  Grid,
  Select,
  MenuItem,
  TextField,
  TableContainer,
  Divider,
  Box,Table, TableHead, TableBody, TableRow, TableCell
} from "@material-ui/core";

import { Scrollbars } from "react-custom-scrollbars";
import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { KeyboardArrowDown, NoEncryptionTwoTone } from "@material-ui/icons";
import DatePicker from "react-date-picker";
import moment from 'moment'

const myStyle = () => ({
  buttonText: {
    fontSize: "13px",
    color: "#fff",
    fontWeight: 700,
  },
  btn: {
    padding: "3px 50px",
    borderRadius: "14px",
    "&:hover": {
      background: "##5696F4",
    },
  },
  reportPeriodText: {
    fontSize: "20px",
    fontWeight: 600,
  },
  selectCustom: {
    height: "40px",
    width: "200px",
    borderRadius: "4px",
  },
  btnRunReport: {
    padding: "3px 10px",
    borderRadius: "14px",
    background: "#5696F4",
    "&:hover": {
      background: "#5696F4",
    },
  },
  reportDatePicker: {
    "& div": {
      borderColor: "grey",
      borderRadius: "5px",
      padding: "5px",
      background: "#f4efef",
    },
  },
  popoverPaper: {
    backgroundColor: "lightgreen",
    borderRadius: "16px",
    "& .MuiMenuItem-root": {
      backgroundColor: "red",
    },
    "& .MuiMenuItem-root.Mui-selected": {
      backgroundColor: "blue",
    },
  },
  reportTable:{
    "& .MuiTableHead-root":{
         
         background:"khaki"
    },
    "& .MuiTableCell-root":{
      borderRight : "1px solid #bababa",
         padding : "5px" 
    }
  }
  // outlined:{
  //   border : "5px solid red"
  // }
});

class Reports extends Component {
  componentDidMount() {
    console.log("Newdashboards componentDidMount");
  }
  componentWillUnmount() {
    console.log("Newdashboards unmount");
  }
  constructor() {
    super();
    this.state = {
      reportDate: new Date(),
      day : moment(),
      selectedButton: "financial",
      reportPeriod: "Year to Date",
      selectItems: [
        "Current Month",
        "Current Quarter",
        "Year to Date",
        "Previous Month",
        "Previous Quarter",
        "Previous Year",
        "Custom",
      ],
    };
  }

  getSelect = (classes) => {
    return (
      <Select
        value={this.state.reportPeriod}
        variant="outlined"
        IconComponent={KeyboardArrowDown}
        className={classes.selectCustom}
        MenuProps={{
          PopoverClasses: {
            paper: classes.popoverPaper,
          },
        }}
        onChange={(e) => {
          this.setState({
            reportPeriod: e.target.value,
          });
        }}

        // classes={{
        //   outlined : classes.outlined
        // }}
      >
        {this.state.selectItems.map((e) => (
          <MenuItem key={e} value={e}>
            {e}
          </MenuItem>
        ))}

        {/* <MenuItem>current Year</MenuItem> */}
      </Select>
    );
  };

  getFinancialOrCapitalView = (classes) => {
    if (this.state.selectedButton == "capital") {
      return (
        <Grid
          container
          style={{ border: "1px solid black", margin: "5px 20px" }}
        >
          <Grid item xs={5}>
            <Typography variant="h6" align="center">
              Capital Statement
            </Typography>
            <TableContainer></TableContainer>
          </Grid>
          <Grid item xs={7}>
            <Grid container justifyContent="space-between">
              <Typography variant="h6">Total Income</Typography>
              <Typography variant="h6" style={{ paddingRight: "40px" }}>
                $0.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      );
    } else {
      return (
        <Grid
          container
          style={{ border: "1px solid black", margin: "5px 20px" }}
        >
          <Grid item xs={5} style={{ padding: "12px" }}>
            <Typography variant="h6" align="center">
              Neeuh Financial Statement
            </Typography>
            <Grid container style={{border : "2px solid grey", borderRadius : '8px'}}>
            <Scrollbars
                style={{ width: "100%", height: "70vh", margin: "10px 0" }}
              >
                <Grid container style={{padding : "2px 20px"}}>
                  <Grid item xs>
                    <Typography>Total Income</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>$0.00</Typography>
                  </Grid>
                </Grid>
                <Divider></Divider>

                <Grid container style={{padding : "2px 20px"}}>
                  <Grid item xs>
                    <Typography>Cost of Good Solds</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>$0.00</Typography>
                  </Grid>
                </Grid>
                <Divider></Divider>

                <Grid container style={{padding : "2px 20px"}}>
                  <Grid item xs>
                    <Typography style={{fontWeight: "bold"}}>Gross Profit</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>$0.00</Typography>
                  </Grid>
                </Grid>
                <Divider style={{marginBottom : "20px"}}></Divider>

                <Grid container style={{padding : "2px 20px"}}>
                <Typography style={{fontWeight: "bold"}}>Operating Expenses</Typography>
                </Grid>
                <Divider></Divider>

                
                
              </Scrollbars>
            </Grid>
          </Grid>
          <Grid item xs={7} style={{ padding: "12px 12px 10px"}}>
            <Grid container justifyContent="space-between">
              <Typography variant="h6">Total Income</Typography>
              <Typography variant="h6" style={{ paddingRight: "40px" }}>
                $0.00
              </Typography>
            </Grid>
            
            <Grid container style={{border : "2px solid grey", borderRadius : '8px'}}>
              
                {/* <Scrollbars style={{width: "100%", height: '70vh'}}> */}
                  <TableContainer
                  className={classes.reportTable}
                  style={{
                    height: "70vh",
                    borderRadius: '8px',
                    border: '1px solid #bababa',
                    // width: '100%',
                    
                  }}>
                    <Table>
                      <TableHead>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Category</TableCell>
                        <TableCell align="right">Amount</TableCell>
                      </TableHead>
                      <TableBody>
                        <TableCell align="right">17/07/22</TableCell>
                        <TableCell align="right">Advertising</TableCell>
                        <TableCell align="right">Contract Labor</TableCell>
                        <TableCell align="right">$77.77</TableCell>
                      </TableBody>

                    </Table>
                  </TableContainer>

                {/* </Scrollbars> */}
                    
              
              </Grid>
          </Grid>
        </Grid>
      );
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Grid container>
          <Grid container justifyContent="center" style={{ padding: "20px" }}>
            <Grid
              item
              xs={6}
              container
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid item>
                <Button
                  className={[classes.btn]}
                  style={{
                    background:
                      this.state.selectedButton == "financial"
                        ? "#FF9933"
                        : "#5696F4",
                  }}
                  onClick={() => {
                    this.setState({ selectedButton: "financial" }, () => {
                      console.log(this.state.selectedButton);
                    });
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    className={classes.buttonText}
                  >
                    Neeuh Financial Statement
                  </Typography>
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={[classes.btn]}
                  style={{
                    background:
                      this.state.selectedButton == "capital"
                        ? "#FF9933"
                        : "#5696F4",
                  }}
                  onClick={() => {
                    this.setState({ selectedButton: "capital" });
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    className={classes.buttonText}
                  >
                    Capital Statement
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid container justifyContent="center" alignItems="center">
            <Grid
              item
              xs={11}
              container
              justifyContent="center"
              alignItems="center"
              style={{ gap: "30px" }}
            >
              <Grid item>
                <Typography className={[classes.reportPeriodText]}>
                  Report Period
                </Typography>
              </Grid>
              <Grid item>{this.getSelect(classes)}</Grid>
              <Grid item>
                <DatePicker
                  disabled={this.state.reportPeriod != "Custom"}
                  format="MM/dd/y"
                  value={this.state.reportDate}
                  calendarIcon={null}
                  clearIcon={null}
                  className={classes.reportDatePicker}
                />
              </Grid>
              <Grid item>
                <Typography className={[classes.reportPeriodText]}>
                  to
                </Typography>
              </Grid>
              <Grid item>
                <DatePicker
                  format="MM/dd/y"
                  disabled={this.state.reportPeriod != "Custom"}
                  value={this.state.reportDate}
                  calendarIcon={null}
                  clearIcon={null}
                  className={classes.reportDatePicker}
                />
              </Grid>
              <Grid item>
                <Button className={classes.btnRunReport}>
                  <Typography className={classes.buttonText}>
                    Run Report
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
           
           {/* <Grid container>{this.state.reportDate}</Grid> */}
           {/* <Grid container>{this.state.day}</Grid> */}
          {this.getFinancialOrCapitalView(classes)}
        </Grid>
      </>
    );
  }
}

export default withStyles(myStyle)(Reports);
