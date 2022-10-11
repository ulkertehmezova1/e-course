import React from 'react'
import { useState } from 'react'
import './style.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



const Navbar = () => {
    const [show, setShow]=useState(true);
  return (
    <>
    <nav class="navbar  navbar-expand-lg">
   <button class="navbar-toggler"
   onClick={()=>setShow(!show)}
    type="button" data-toggle="collapse" 
    data-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
        {show? <MenuIcon />:<CloseIcon />}
    </button>
    
    <a class="navbar-brand" href="#">
    <img src={require('../../assets/Layer 2 (1).svg').default} alt='mySvgImage' />
    </a>

    <button className='btn btn-signup '>JOIN US</button>
 
  
    <div class={show? "collapse navbar-collapse": "collapse navbar-collapse active"} id="navbarSupportedContent">
      <ul class="navbar-nav mr-lg-auto ms-5 mb-2 mb-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Support</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0 ml-lg-5 ms-lg-5">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      </form>
    </div>
  </nav>
</>
  )
}

export default Navbar