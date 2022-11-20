import axios from 'axios';
import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'
//import ReactDOM from 'react-dom';

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
     this.state={
      name:"",
      email:"",
      balance:""
    }
}
handleSubmit=(event)=>{
  
 
}
  handleClick=()=>{
    const user= {
      name:this.state.name,
      email:this.state.email,
      balance:this.state.balance
    }
 //   axios.post('http://localhost:8080/user/add',{user})
    axios('/user/add',{
   method: 'POST',
   data : user,
   headers: {
    'Content-Type': 'application/json'
  }
})
    .then(
        response => {
          console.log(response.data);
        }
    )
    .catch(
        error => {
            console.log(error) 
        }
    )
    alert('User created successful')
    this.setState({
      name:"",
      email:"",
      balance:""
    })
   
  }
  handleName=(event)=>{
      this.setState({name: event.target.value})  
  }

  handleEmail=(event)=>{
    this.setState({email: event.target.value})  
  } 
  
  handleBalance=(event)=>{
  this.setState({balance: event.target.value})  
  }
  render() {
      return(
      <div>
 <Segment raised>
<Segment inverted>
    <Form inverted>
      <Form.Group widths='equal'>
        <Form.Input fluid label='Name'placeholder='name' type='text' value={this.state.name}  onChange={this.handleName}  />
      </Form.Group>
       <Form.Group widths='equal'>
        <Form.Input fluid label='Email' placeholder='email' value={this.state.email} onChange={this.handleEmail} />
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Input fluid label='Balance' placeholder='balance' value={this.state.balance} onChange={this.handleBalance}/>
      </Form.Group>
      <Button onClick={this.handleClick} type='Sumbit'>Submit</Button>
    </Form>
    </Segment>
   </Segment>
     
      </div>
      )
   }

 
}

export default CreateUser;