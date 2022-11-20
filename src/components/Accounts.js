import React from 'react';
import {Button,Segment, Table,Form,Container} from "semantic-ui-react";
import axios from 'axios'
//import Transfer from './Transfer';
//import { Link } from 'react-router-dom';
//import ReactDOM from 'react-dom';

class Accounts extends React.Component {
  constructor(props){
     super(props);
  this.state={
    users:[],
    user:"",
    flag:false,
    transferTo:"",
    balance:null,
  };

  }
  componentDidMount() {
    this.getUsers();
}

async getUsers() {
    const url = '/user/get/all';
    await axios.get(url)
    .then(
        response => {
            this.setState({users: response.data});
        }
    )
    .catch(
        error => {
            console.log(error) 
        }
    )
}
  transferMoney(user) {
   this.setState({
           user:user,
           flag:true
   })
}

handleTransferto=(event, { name, value})=>{
     this.setState({transferTo:value})  
  
}
handleBalance=(event)=>{
     this.setState({balance:event.target.value})
    //  console.log(event.target.value)
}
handleClick=()=>{
    // console.log(this.state.transferTo)
    // console.log(this.state.balance)
     axios.get('/update/'+this.state.user.id+'/'+this.state.balance+'/'+this.state.transferTo)
    .then(
        response => {
           this.setState({flag:false,user:""})
           this.getUsers()
        }
    )
    .catch(
        error => {
            console.log(error) 
        }
    )
    alert('Transaction successfull')
}
  render() {
    const users=this.state.users
    const user=this.state.user
    const option=users.map( u => 
        ({id:u.id, text:u.name,value:u.name })
        )
    if(this.state.flag){
     return(
        <Segment >
        <Table size='small' >
            <Table.Header >
                <Table.Row>
                    <Table.HeaderCell>id</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Balance</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
  
            <Table.Body>
                        <Table.Row >
                            <Table.Cell>{user.id} </Table.Cell>
                            <Table.Cell> {user.name}</Table.Cell>
                            <Table.Cell>{user.email}</Table.Cell>
                            <Table.Cell>{user.balance}</Table.Cell>
                        </Table.Row>
            </Table.Body>
        </Table>
             <Form>
                 <Form.Select fluid label='Transfer To' options={option}  placeholder='name' value={this.state.transferTo} onChange={(e, { name, value})=>this.handleTransferto(e, { name, value})}  />
                 <Form.Group widths='equal'>
                     <Form.Input fluid label='Amount' placeholder='value' onChange={this.handleBalance} />
                 </Form.Group> 
                 <Form.Button  onClick={this.handleClick} >Transfer</Form.Button>
             </Form>
    </Segment>
     )    
    }
  
    return(
    <div>
        <Container as='h1' textAlign='center'>All Accounts</Container>
       <Segment inverted>
      <Table size='small' >
          <Table.Header >
              <Table.Row>
                  <Table.HeaderCell>id</Table.HeaderCell>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Balance</Table.HeaderCell>
                  <Table.HeaderCell>Operation</Table.HeaderCell>
              </Table.Row>
          </Table.Header>

          <Table.Body>
          {users.map((user,index) => 
                      <Table.Row >
                          <Table.Cell>{user.id} </Table.Cell>
                          <Table.Cell> {user.name}</Table.Cell>
                          <Table.Cell>{user.email}</Table.Cell>
                          <Table.Cell>{user.balance}</Table.Cell>
                          <Table.Cell><Button type='submit' onClick={() => {this.transferMoney(user)}}>
                                        Transaction</Button></Table.Cell>
                      </Table.Row>
          )}
      
          </Table.Body>
      </Table>
  </Segment> 
    </div>
      
    )
   }
}

export default Accounts;