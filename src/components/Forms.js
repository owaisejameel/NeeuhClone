import { Checkbox, Grid, Typography, withStyles } from '@material-ui/core'
import React, { Component } from 'react'


const myStyle = () => ({
    formHeadings:{
        margin:"40px",
        fontSize : "1.5625rem",
        fontWeight : 700,
      
    },
    box:{
        height : "76vh",
        borderRight:"1px solid black",
        overflowY: "auto",
    },
    boxItems:{
        borderBottom:'1px solid black',
        padding : '5px',
      
    },
    checkboxRoot:{
        // "& .MuiSvgIcon-root": {
        //     fontSize:'28px',
        // },
        '&.Mui-checked': {
            color: "yellow",
          },
        // "&$checked": {
        //     color: "#5696F4",
        //     background: "none"
        //   },
        "&:hover":{
            background:'green'
        }
    }
 
})

 class Forms extends Component {
    constructor(props){
        super(props)
        this.state= {
            data:[
                "a","b","c","a","b","c",
            ],
            formCheck: false,
        }
    }
    
    
  render() {
      const {classes} = this.props
      console.warn("checkbox status",this.state.formCheck)
    return (
     
          <Grid container>
              <Grid item xs={6}>
                <Grid container justifyContent='center' style={{borderBottom:'1px solid black'}}
>
                    <Typography className={classes.formHeadings}>Documents</Typography>
                   </Grid>
                   <Grid container className={classes.box} alignContent='flex-start'>
                   {this.state.data.map( (fruit) => (
                   <Grid container alignItems='center' className={classes.boxItems}>
                       <Grid item xs container alignItems='center'>
                           <Checkbox></Checkbox>
                           <Typography>{fruit}</Typography>
                           </Grid>
                           <Grid item xs={2}>
                               27/10/2022
                               </Grid> 
                   </Grid>
                   ))}
                   </Grid>


                   
              </Grid>

              <Grid item xs={6}>
                  <Grid item container direction='column'>
                <Grid container justifyContent='center' style={{borderBottom:'1px solid black'}}> 
                <Typography className={classes.formHeadings}>Neeuh Financial Statements</Typography>
                </Grid>
                
                <Grid item container className={classes.box} alignContent='flex-start'>
                {this.state.data.map( (fruit) => (
                   <Grid container alignItems='center' className={classes.boxItems}>
                       <Grid item xs container alignItems='center'>
                           <Checkbox 
                            // className={classes.checkboxRoot}
                            // color='primary'
                            // size='small'
                          classes={{
                              root: classes.checkboxRoot,
                          }}
                           onChange={(e)=>this.setState({formCheck:e.target.checked})}
                           />
                           <Typography>{fruit}</Typography>
                           </Grid>
                           <Grid item xs={2}>
                               27/10/2022
                            </Grid> 
                   </Grid>
                   ))}
                   </Grid>
                   <Grid item container justifyContent='flex-end' style={{padding : '10px 0'}}>
                       <Grid item xs={4} container justifyContent='space-evenly'>
                          <Grid item>a</Grid>
                          <Grid item>a</Grid>
                          <Grid item>a</Grid>
                          <Grid item>a</Grid>
                       </Grid>
                   </Grid>
              </Grid>
              </Grid>
          </Grid>
     
    )
  }
}


export default withStyles(myStyle)(Forms)