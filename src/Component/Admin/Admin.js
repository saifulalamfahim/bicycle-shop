
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import EditProduct from "../EditProduct/EditProduct";
import ManageProduct from "../ManageProduct/ManageProduct";
import './Admin.css';

function Admin() {
    return (
      <Router>
        <div className="active">
          <ul className="navbar1">
            <li className="navbar2">
              <Link className='navbar3 ' to="/">Add Product</Link>
            </li>
            <li  className="navbar2">
              <Link className='navbar3' to="/ManageProduct">Manage Product</Link>
            </li>
            <li className="navbar2">
              <Link className='navbar3' to="/EditProduct">Edit Product</Link>
            </li>
          </ul>
  
          <hr />
          
  
          <Switch>
            <Route exact path="/">
              <AddProduct />
            </Route>
            <Route path="/ManageProduct">
              <ManageProduct />
            </Route>
            <Route path="/EditProduct">
              <EditProduct/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  

export default Admin;