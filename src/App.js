import React from 'react';
import About from './components/About';
import Nav from './components/Nav'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Accounts from './components/Accounts';
import CreateUser from './components/CreateUser'
import 'semantic-ui-css/semantic.min.css'
import Transfer from './components/Transfer';
class App extends React.Component {
  render() {
  return ( 
    <Router>
      <div className="App">
      <Nav />
       <Switch>
        <Route path="/accounts" component={Accounts} />
        <Route path="/" exact component={About} />
        <Route path="/transfer" component={Transfer} />
        <Route path="/create/user" component={CreateUser} />
        
      </Switch> 
      </div>

    </Router>

  )

}
}
export default App;