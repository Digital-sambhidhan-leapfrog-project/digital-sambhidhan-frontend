import React from 'react'
import Btn from './Btn';
import Logo from '../logo512.png';
const Nav = () => {
  return (
    <div>
    <nav style={navStyle.nav}>
    <div className='nav' style={navStyle.dnav}>
    <ul style={navStyle.ul}>
        <li style = {navStyle.li}><a style = {navStyle.a} href="/">Home</a></li>
        <li style = {navStyle.li}><a style = {navStyle.a} href="/about">AboutUs</a></li>
        <li style = {navStyle.li}><a style = {navStyle.a} href="/services">User</a></li>
        <li style = {navStyle.li}><a style = {navStyle.a} href="/contact">Law</a></li>
        <li style = {navStyle.li}><a style = {navStyle.a} href="/contact">Forum</a></li>
        <Btn btnText="Login"/>
        <Btn btnText="signup"/>
      </ul>  
    </div>  
    </nav>
    <div className='Logo'>
      {/* <img src={Logo} alt="Logo"/> */}
    </div>
    </div>
  )
}

export default Nav;

const navStyle = {
  nav: {
    width: 'auto',
    height: 'auto',
    padding: '10px 0px',
    backgroundColor: '#F5A01C',
    display: 'flex',
    // clipPath: 'polygon(0 0, 80% 0%, 100% 41%, 0% 100%)',
  },
  dnav: {
    width: '60%',
    display: 'flex',
    margin: 'auto',
    marginRight: '0px',
    padding: '0px 10px'
    // border: '1px solid black',

  },
  ul:{
    listStyleType: 'none',
    margin: 'auto',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  li:{
    fontSize: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100px',
    ':hover':{
      color: 'black',
    },
  },
  a:{
    display: 'block',
    color: 'white',
    textAlign: 'center',
    padding: '14px 16px',
    textDecoration: 'none',
  },
}
