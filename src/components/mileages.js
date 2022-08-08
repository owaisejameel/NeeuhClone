import React, { Component } from 'react'
import {
  Grid,
  TextareaAutosize,
  Typography,
  TextField,Button
} from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import moment from 'moment'
import DatePicker from 'react-date-picker'
import DirectionsCarOutlinedIcon from '@material-ui/icons/DirectionsCarOutlined';
import {Dialog, DialogTitle, DialogContent, DialogActions} from "@material-ui/core"
import {Link} from "react-router-dom"

const myStyle = () => ({
  topDiv: {
    paddingTop: '30px',
    borderBottom: '1px solid black',
  },
  formTextField: {
    width: '80%',
    background: '#EBEBEB',
  },
  input: {
    textAlign: 'right',
    paddingRight: '20px',
    fontSize: '18px',
  },
  greyBox:{
    width:'250px',
    height:'100px !important',
    padding: '5px'
  },
  btn:{
    textTransform: 'none',
    background:"#5597F4",
    borderRadius: "30px",
    width:'130px',
    '& p':{
      fontWeight:'bold',
      color: "#ffffff",
      fontSize:"18px"
    },
    '&:hover':{
      backgroundColor:'#5597F4'
    }
  },
  // btnText:{
  //   fontWeight: "bold",
  //   fontSize:'18px',
  //   color: "white"
  // }
  rightDiv:{
    background:'khaki',
    borderLeft: '1px solid black',
    height:"94vh"
    
  },
  btnArrow:{
    color:'#5597F4',
    fontWeight:'bold'
  },
  silverText:{
    fontSize:'25px',
    color:'#B4B5B5',
     fontWeight:'bold'
  },
  carIcon:{
    margin:'0px 20px',
    fontSize : '45px'
  },
  circle:{
    width : '80px',
    height: '80px',
    borderRadius: '50%',
    border : '1px solid black',
    textAlign: "center",
    paddingTop : '25px'
  },
  formDate:{
    '& div':{
      padding:'4px',
    }
  }
})

class Mileages extends Component {

  constructor(){
    super();
    this.state={
        // months : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        months : moment.monthsShort(),
        show : true,
        isEdit : false,
        formText : "",
        formDate : new Date(),
        selectedWeek : {
          sunday : moment().day(42),
          saturday: moment().day(48),
          currentCount : 42
        },
        addCarModal : false,
        openModal : false,
        day : moment(),
        time: moment().format('MMMM YYYY, h:mm:s a')
    }
  }

  updateWeek = (num) =>{
    const pre = num + 6;
    this.setState({
      selectedWeek :{
      sunday: moment().day(num),
      saturday: moment().day(pre),
      currentCount: num
      }
    })
   }


   handleCarModal = () =>{
    this.setState({addCarModal : !this.state.addCarModal})
  }


  render() {
    const { classes } = this.props
    console.log("date is",typeof(this.state.formDate))
    return (
      <>
      <Grid container>
        {this.state.addCarModal && 
        <Dialog open={this.state.addCarModal} fullWidth onClose={() => this.handleCarModal()} >
          <DialogTitle>Add Car</DialogTitle>
          <DialogContent>
            <TextField
            autoFocus
            value={this.state.newCarName}
            onChange={(e)=>this.setState({newCarName : e.target.value})}
            fullWidth
            margin='dense'
            label="Car Name" />
          </DialogContent>
          <DialogActions>
          <Button color='primary'>cancel</Button>
          <Button color='primary'>Add Car</Button>
          </DialogActions>
        </Dialog>
        }
        {
          this.state.openModal &&
          <Dialog open={this.state.openModal}>
            <DialogTitle>Edit Miles</DialogTitle>
          </Dialog>
        }
        <Grid container alignItems='flex-start'>
          <Grid item container xs={9}>
          <Grid
            item
            container
            justifyContent="space-around"
            className={classes.topDiv}
          >
            <Grid item container xs={4} style={{ gap: '10px' }}>
              <Grid container>
                <Grid item container alignItems="center" xs={3}>
                  <Typography>Date</Typography>
                </Grid>
                <Grid item container alignItems="center" xs={9}>
                  {' '}
                  <DatePicker
                  format="dd-MM-y"
                  value={this.state.formDate}
                  onKeyDown={(e) =>{
                    e.preventDefault();
                  }}
                  calendarIcon={null} 
                  clearIcon={null}
                  className={classes.formDate}/>
                
                  {/* <TextField
                    id="date"
                    // label="Birthday"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  /> */}
                </Grid>
              </Grid>
              <Grid container>
                <Grid item container xs={3} alignItems="center">
                  <Typography>Vehicle</Typography>
                </Grid>
                <Grid item container xs={9} alignItems="center">
                  abcd
                </Grid>
              </Grid>
              <Grid container>
                <Grid item container xs={3} alignItems="center">
                  Miles
                </Grid>
                <Grid item container xs={9} alignItems="center">
                  <TextField
                    // autoFocus
                    placeholder="0"
                    className={classes.formTextField}
                    InputProps={{ disableUnderline: true,
                    endAdornment:(
                      <Typography>Miles</Typography>
                    )}}
                    inputProps={{ className: classes.input }}
                  />
                </Grid>
              </Grid>
              
            </Grid>

            <Grid container item xs={4}>
              <Grid item container direction="column" alignItems="center">
                <Typography>Business Purpose</Typography>
                <TextareaAutosize className={classes.greyBox} value={this.state.formText} placeholder="enter text"
                onChange={(e)=> e.target.value.length <=250 && this.setState({formText:e.target.value})}/>
              </Grid>
            </Grid>

            <Grid container style={{margin:20}} justifyContent="center">
                <Button variant='outlined' className={classes.btn}><Typography variant='body2'className={classes.btnText}>SAVE</Typography></Button>
              </Grid>

              
              </Grid>

              <Grid container justifyContent='center' style={{marginTop:20}}>
                <Grid item container justifyContent='space-around' xs={10} style={{background:'transparent'}}>
                  { this.state.show? this.state.months.map( (ele) => {
                return <Grid item><Typography style={{fontSize:'20px',color:'#5696F4', fontWeight:'bold'}}>{ele}</Typography></Grid>
                  }) : null
                  }

                </Grid>
                <Grid item container justifyContent='center' style={{marginTop:20}}><Typography variant="body1" style={{fontWeight:'bold'}}>WEEK RANGE</Typography></Grid>
                
                
                <Grid item container justifyContent='center' alignItems='center' style={{marginTop:20}}>
                  <Button onClick={()=>this.updateWeek(this.state.selectedWeek.currentCount-7)} className={classes.btnArrow}>{'<'}</Button>
                  <Typography className={classes.silverText} style={{textTransform :'uppercase'}}>{`${this.state.selectedWeek.sunday.format('MMM D ddd')} - ${this.state.selectedWeek.saturday.format('MMM DD ddd')}`}</Typography>
                  <Button onClick={()=>this.updateWeek(this.state.selectedWeek.currentCount+7)}className={classes.btnArrow}>{'>'}</Button>

                </Grid>


                <Grid item container xs={10} style={{background:'yellow', marginTop:'20px'}}>
                  <Grid container justifyContent='center' alignItems='center'>
                    <Button onClick={()=>this.setState({isEdit: true})}>{this.state.isEdit ? "Update": "Edit"}</Button>
                    <DirectionsCarOutlinedIcon className={classes.carIcon} />
                    {this.state.isEdit ? (<TextField focused={true} />) : (<Typography className={classes.silverText} >car name</Typography>) }
                  </Grid>
                  <Grid container justifyContent='space-between'>
                    <Grid item xs={4} md={1} container direction='column' alignItems="center" style={{gap: '10px'}}>
                      <Grid item><Typography>sunday</Typography></Grid>
                      <Grid item><Typography>19/06</Typography></Grid>
                      <Grid item className={classes.circle}>40</Grid>
                    </Grid>

                    <Grid item xs={4} md={1} container direction='column' alignItems="center" style={{gap: '10px'}}>
                      <Grid item><Typography>sunday</Typography></Grid>
                      <Grid item><Typography>19/06</Typography></Grid>
                      <Grid item className={classes.circle}>40</Grid>
                    </Grid>

                    <Grid item xs={4} md={1} container direction='column' alignItems="center" style={{gap: '10px'}}>
                      <Grid item><Typography>sunday</Typography></Grid>
                      <Grid item><Typography>19/06</Typography></Grid>
                      <Grid item className={classes.circle}>40</Grid>
                    </Grid>

                    <Grid item xs={4} md={1} container direction='column' alignItems="center" style={{gap: '10px'}}>
                      <Grid item><Typography>sunday</Typography></Grid>
                      <Grid item><Typography>19/06</Typography></Grid>
                      <Grid item className={classes.circle}>40</Grid>
                    </Grid>

                    <Grid item xs={4} md={1} container direction='column' alignItems="center" style={{gap: '10px'}}>
                      <Grid item><Typography>sunday</Typography></Grid>
                      <Grid item><Typography>19/06</Typography></Grid>
                      <Grid item className={classes.circle}>40</Grid>
                    </Grid>

                    <Grid item xs={4} md={1} container direction='column' alignItems="center" style={{gap: '10px'}}>
                      <Grid item><Typography>sunday</Typography></Grid>
                      <Grid item><Typography>19/06</Typography></Grid>
                      <Grid item className={classes.circle}>40</Grid>
                    </Grid>

                    <Grid item xs={4} md={1} container direction='column' alignItems="center" style={{gap: '10px'}}>
                      <Grid item><Typography>sunday</Typography></Grid>
                      <Grid item><Typography>19/06</Typography></Grid>
                      <Grid item className={classes.circle}>40</Grid>
                    </Grid>
                    
                  </Grid>
                </Grid>

                <Grid item container xs={10} justifyContent="center">
                  <Button variant='outlined' onClick={()=>this.handleCarModal()}> + ADD CAR</Button>
                </Grid>
                    <Typography>{`${this.state.day} and ${this.state.time}`}</Typography>

              </Grid>
          </Grid>
          <Grid item container xs={3}  alignItems="flex-start" className={classes.rightDiv}>
            <Link to="/transactions">
            <Button onClick={()=>this.setState({show : !this.state.show})}>show</Button>
            </Link>
          </Grid>
        </Grid>
        </Grid>
      </>
    )
  }
}

export default withStyles(myStyle)(Mileages)
