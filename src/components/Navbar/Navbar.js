import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
        <div>
            <nav class="navbar navbar-expand-md bg-light navbar-dark text-primary">
  <a class="navbar-brand text-primary" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
  <i class="fas fa-bars text-dark"></i>

</button>
  
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav ml-5">
      <li class="nav-item ">
        <Link to="/" class="nav-link p-3 text-primary">Home</Link>
      </li>
      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle p-3 text-primary" id="navbardrop" data-toggle="dropdown">
        Categories
      </a>
      <div class="dropdown-menu">
        <Link className="dropdown-item" to="/category">Makeup</Link>
        <Link className="dropdown-item" to="/category">Dresses</Link>
        <Link className="dropdown-item" to="/category">Hijab</Link>
        
      </div>
    </li>

      <li class="nav-item">
      <Link to="/about" class="nav-link p-3 text-primary">About</Link>
      </li>   
      <li class="nav-item">
      <Link to="/contact-us" class="nav-link p-3 text-primary">Contact Us</Link>
      </li> 
      <li class="nav-item">
      <Link to="/sign-up" class="nav-link p-3 text-primary">Login</Link>
      </li>
         
    </ul>

  </div>  
  <form className="form-inline my-2 my-lg-0">
     <input className="form-control mr-2 searchbar" type="text" placeholder="Search" /> 
     <button className="btn btn-secondary  btn-sm searchbtn " type="submit">Search</button> </form>
</nav>

        </div>


    );
}

export default Navbar;



