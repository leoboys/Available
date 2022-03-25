import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import {  Link } from "react-router-dom";
import Logo from '../Home/Logo.svg';
import "./Header.css";

const Header = () => {
    return (
        <div >
               <AppBar sx={{position:"fixed" , height:"50px"}}>

<Toolbar sx={{bgcolor:"goldenrod" , alignContent:"center" , justifyContent:"space-around" }} >

    <Typography sx={{display:"flex" , flexGrow:1 , width:"10px"}} >
    <img src={Logo} className="logo" alt="logo" />
    </Typography>

   <nav>
    <Link className='home-css' to="/" > Home </Link>
    <Link className='about-css'  to="about" > About-Us </Link>
    <Link className='service-css'  to="services" > Services </Link>
    <Link className='contact-css'  to="contact" > Contact </Link>
   </nav>

</Toolbar>

</AppBar>

        </div>
    );
};

export default Header;