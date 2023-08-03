import { BiDownload } from "react-icons/bi"; 
import { AiOutlineClose } from "react-icons/ai"; 
import { GiHamburgerMenu } from "react-icons/gi"; 
import React,{useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../assets/img/logo/logo2.png';
import Navbar from './Navbar';
import { CSSTransition } from 'react-transition-group';
import './DropdownMenu.css'


const Header = () => {
    const [icon, setIcon] =useState(true)
    const navigator = useNavigate();

    const toggleMenu = () => {
        setIcon(prevIcon => !prevIcon);
    };
    useEffect(() => {
      console.log('Navbar is rendered');
    }, [icon]);
    return (
        <header className="header">
            <div className="container">
                <h1><Link to="/"><img src={logo} alt="logo"  className="logo" /></Link></h1>
                <Navbar />
                <div className="mobileBar">
                  {icon ? ( <GiHamburgerMenu className="hamburgerIcon" onClick={toggleMenu} /> ) : (<AiOutlineClose className="closeIcon" onClick={toggleMenu} /> )}
          
                  <CSSTransition
                  in={!icon}
                  timeout={300}
                  classNames="menu"
                  unmountOnExit
                  ><Navbar /></CSSTransition>
                </div>
                <button className="btn" onClick={() => navigator('/uploadpage')}><BiDownload /></button>
            </div>
        </header>
    );
};

export default Header;