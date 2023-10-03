import React, { useState } from 'react'
import './Header.css'
import logo from "../../../images/logo.png";
import search from "../../../images/search.png";
import signUplogo from "../../../images/signlogo.png";
import Cart from "../../../images/cart.png";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState("")
    const menuToggleHandler = ()=>{
        menuOpen ? setMenuOpen(false):setMenuOpen(true)
    }
  return (
    <div className='header'>
        <div className='menu-bar'>
            <div className='menu-icon' onClick={menuToggleHandler}
            style={menuOpen ? {display:'none'} : {display:"block"}}
            >
            <MenuIcon  fontSize='large'  />
            </div>
            <div className='close-icon' onClick={menuToggleHandler}
             style={menuOpen ? {display:'block'} : {display:"none"}}
             >
            <CloseIcon fontSize='large'  />
            </div>
        </div>
        <div className='uppernav' style={menuOpen ? {display:'block'} : {display:"none"}}>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className='logo'>
                <a href='/'>
                    <img src={logo} alt='Ecommerce logo' />
                </a>
            </div>
            <div className='nav-menu'>
                <a href='/'>Home</a>
                <a href='/products'>Products</a>
                <a href='/about'>About</a>
                <a href='/contact'>Contact</a>
            </div>

            <div className='loginNav'>
                 <a href='/search' title='Search'>
                    <img src={search} alt='Search logo' />
                </a>
                <a href='/cart' title='Cart'>
                    <img src={Cart} alt='Cart logo' />
                </a>
                <a href='/login' title='Login'>
                    <img src={signUplogo} alt='Profile logo' />
                </a>
            </div>
  
</nav>
  </div>
    </div>
  )
}


export default Header;