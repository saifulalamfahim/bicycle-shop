import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from './Component/Admin/Admin';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import CardDetail from './Component/CardDetail/CardDetail';
import Orders from './Component/Orders/Orders';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>

      <div className="App" >
        
        <div >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <h1 className="header">Bicycle Shop</h1>
    <a className="name" href="#"> <b className="mr-3 p-5">Choose your Bicycle</b></a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          
          <Link style={{ textDecoration: 'none' }} to="/"><li className="nav-item active mr-3 p-1">
                          <p className="nav-link text-dark">Home </p>
                      </li></Link>
        
        
          <Link style={{ textDecoration: 'none' }} to="/Orders"> <li className="nav-item active mr-3 p-1">
                          <p className="nav-link text-dark">Orders </p>
                      </li></Link>
        
        
          <Link style={{ textDecoration: 'none' }} to="/Admin"><li className="nav-item active mr-3 p-1">
                          <p className="nav-link text-dark">Admin </p>
                      </li></Link>
        
      
          <Link style={{ textDecoration: 'none' }} to="/Login"> <li className="nav-item active mr-3 p-1">
                          <p className="nav-link text-dark">Login </p>
                      </li></Link>
          <Link style={{ textDecoration: 'none' }} to="/Login"> <li className="nav-item active mr-3 p-1">
                          <p className="nav-link text-dark">{loggedInUser.name} </p>
                      </li></Link>
        
      </ul>
      </div>
      </div>
      </nav>
        </div>

        <hr />
        

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute exact path="/Orders">
            <Orders/>
          </PrivateRoute>
          <PrivateRoute path="/Admin">
            <Admin />
          </PrivateRoute>
          <Route path="/Login">
            <Login/>
          </Route>
          <PrivateRoute path="/curds/:_id">
              <CardDetail></CardDetail>
          </PrivateRoute>
        </Switch>
      </div>
     

    </Router>
    </UserContext.Provider>
  );
}

export default App;
