import React, { Component } from 'react'
import {
    Grid,
    TextareaAutosize,
    Typography,
    TextField,Button, makeStyles, rgbToHex
  } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const myStyle = ()=>({
    topDiv:{
        // border :'0.5px solid black',
        marginTop : '20px'
    },
    orangeLeaf:{
      width: '30px',
      height: '30px',
      background: 'orange',
      borderRadius : '50% 0px',
      margin:'0px 5px',
      color: "white"
    },
    btn:{
      fontSize :'24px',
      margin: '5px',
      textTransform :'none'
    },
    verticalLine:{
      width: '2px',
      height : '40px',
      background: 'grey'
    },
    circle:{
      margin: "auto",
      height : "120px",
      width : "120px",
      background :"linear-gradient(to right, #FF860D, #FFCC99)",
      borderRadius : "50%"
    },
    items:{
      background : "rgb(255,255,255)",
      height : "110px",
      width : "110px",
      borderRadius : "50%"
    }



    

})

 class Transactions extends Component {

  componentDidMount(){
  console.log("transaction componentDidMount ");
  }

  componentWillUnmount(){
    console.log("transaction component will unmout");
  }
  render() {
      const {classes} = this.props
return (
     <>
     <Grid container justifyContent='center'>
         <Grid item container xs={10} alignItems="center" className={classes.topDiv}>
          <Button className={classes.btn}><Grid item className={classes.orangeLeaf}>0</Grid>Income</Button>
             
         <Grid item className={classes.verticalLine}></Grid>
         </Grid>

         
         
         </Grid>


         <Grid item container className={classes.circle} justifyContent="center" alignItems="center">
           <Grid item container justifyContent="center" direction='column' alignItems="center"className={classes.items}>
             <Typography>date</Typography>
             <Typography>$1</Typography>
             <Typography>date</Typography>
           </Grid>
         </Grid>


         <Grid item container className={classes.circle} justifyContent="center" alignItems="center">
           <Grid item>
             123
           </Grid>

         </Grid>
         </>
    )
  }
}


export default withStyles(myStyle)(Transactions)