
import React, { Component } from 'react'
import { Grid, TextField, Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import moment from 'moment'

const myStyle = ()=>({
    
})


class Mileage extends Component {
  constructor(){
    super();
    this.state={
      names : 'owais',
      age : 20,
      text : "",
      // date : new Date(),
     
    }
  }

  render() {
    const startofMonth = moment().startOf('month')
    const date = new Date(startofMonth)
    console.log("moment only",date)
    console.log("date is ",new Date())
    // let data = { this.state.names, this.state.age }
    console.log(this.state.names,this.state.age);
    const {age,names} = this.state
    let data = {names,age}
    // console.log("data is",data);
    
    return (
     <>
     <Grid container alignItems='center' style={{margin:'0 5px'}}>
     <Grid item style={{ flexGrow:'1', flexShrink: '0',
    background:"green"}}>HII</Grid>
     <Grid item style={{flexGrow: '1', background:'yellow'}} >Heloo</Grid>
     <Grid item style={{background:'blue', flexBasis:'200px', flexShrink:'0'}} >Hello 3rd</Grid>
     </Grid>
     <Grid container >
       <Typography variant='h3'>hello moment date</Typography>
       <Typography variant='h6'>moment().format('MMMM Do YYYY, h:mm:ss a') {this.state.date}</Typography>
     </Grid>


     <Grid container>
       <TextField variant='outlined' onChange={ (e) => {
         let item = e.target.value
         this.setState({text : item}, ()=>console.log(e.target.value ))
       }}></TextField>
       <Typography>{this.state.text}</Typography>
       <Grid container>
         <Button onClick={()=>{
             let upperCase = this.state.text.toUpperCase()
             this.setState({
               text : upperCase
             })
         }}>upper case</Button>
         <Button
         onClick={()=>{
           let capital = this.state.text;
          //  capital = capital.split(" ")
           capital = capital.charAt(0).toUpperCase() + capital.substring(1)
           this.setState({text : capital})

         }}>capital first word</Button>

       </Grid>
     </Grid>
     </>
    )
  }
}



export default withStyles(myStyle)(Mileage)