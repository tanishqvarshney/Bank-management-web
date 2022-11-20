import React, { Component } from "react";
import { Grid ,Image} from 'semantic-ui-react'
import bank from './images/bank1.JPG'
class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ""
    };
  }

  render() {
    return (
      <div>
    <div style={{backgroundColor:'#d1885e'}}>|
      <Grid >
      <Grid.Row >
        <Grid.Column width={8}>
        <p style={{padding:'100px',paddingLeft:'350px'}}> 
         <h3 style={{paddingLeft:'26px'}}>Welcome to </h3>
         <h1 style={{fontFamily:'cursive',lineHeight:'0.0011'}}>Indian Bank</h1>
        </p> 
        </Grid.Column>
        <Grid.Column width={8}>
        <Image size='large' rounded src={bank} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </div>

    <div >
    
 
    </div>
   

    </div>

    )
  }
  

 
}

export default About;