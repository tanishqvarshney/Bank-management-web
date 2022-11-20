import React from 'react';
import { Table } from 'semantic-ui-react'
import axios from 'axios'

class Transfer extends React.Component{
  constructor(props){
     super(props)
  this.state={
       transaction:[]
  }
  }

  componentDidMount() {
    this.getTransaction();
}

async getTransaction() {
    const url = '/transaction/get/all';
    await axios.get(url)
    .then(
        response => {
            this.setState({transaction: response.data});
            console.log(response.data);
        }
    )
    .catch(
        error => {
            console.log(error) 
        }
    )
}

  render(){
      return(
        <div>
         <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='4'>Transaction history</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>S.No.</Table.HeaderCell>
        <Table.HeaderCell>Sender</Table.HeaderCell>
        <Table.HeaderCell>Receiver</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
     {  this.state.transaction.map(t =>
      <Table.Row>
        <Table.Cell > {t.id}</Table.Cell>
        <Table.Cell>{t.sender}</Table.Cell>
        <Table.Cell >   {t.receiver} </Table.Cell>
        <Table.Cell>{t.amount}</Table.Cell>
     </Table.Row>
     )}
    </Table.Body>
  </Table>
        </div>
      )
  }
}
export default Transfer 