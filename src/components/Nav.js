import React from 'react';
import { Link } from 'react-router-dom';
import lo from './images/lo.JPG'
//import ReactDOM from 'react-dom';
class Nav extends React.Component {
  render() {
    return ( 
      <div >
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="https://www.google.com"><img src={lo} className='img-thumbnail' width="40" height="40" alt="" />Neemotha Bank </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link ml-2">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/accounts" className="nav-link ml-2">Accounts</Link>
              </li>
              <li className="nav-item">
                <Link to="/create/user" className="nav-link ml-2">Create User</Link>
              </li>
              <li className="nav-item">
                <Link to="/transfer" className="nav-link ml-2">Transaction history</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
);
   
}
}

export default Nav;