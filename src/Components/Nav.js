import React from 'react';
import myLogo from './myLogo.png';

const Nav = () => {
  const handleHover = (event) => {
    event.target.style.color = 'lightblue';
  };

  const handleLeave = (event) => {
    event.target.style.color = 'white';
  };

  return (
    <div>
      <nav style={navStyle.nav}>
        <div className='nav' style={navStyle.dnav}>
          <img src={myLogo} alt="Logo" style={navStyle.logo} />
          <ul style={navStyle.ul}>
            <li style={navStyle.li} onMouseEnter={handleHover} onMouseLeave={handleLeave}><a style={navStyle.a} href="/">Home</a></li>
            <li style={navStyle.li} onMouseEnter={handleHover} onMouseLeave={handleLeave}><a style={navStyle.a} href="/about">About Us</a></li>
            <li style={navStyle.li} onMouseEnter={handleHover} onMouseLeave={handleLeave}><a style={navStyle.a} href="/services">User</a></li>
            <li style={navStyle.li} onMouseEnter={handleHover} onMouseLeave={handleLeave}><a style={navStyle.a} href="/contact">Law</a></li>
            <li style={navStyle.li} onMouseEnter={handleHover} onMouseLeave={handleLeave}><a style={navStyle.a} href="/contact">Forum</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

const navStyle = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#050B98',
    padding: '1%',
    marginBottom: '0.2%',
    fontFamily: 'Abril Fatface, cursive',
  },
  dnav: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '15%',
    height: '15%',
    marginRight: 'auto',
  },
  ul: {
    listStyleType: 'none',
    display: 'flex',
    gap: '2%',
    fontFamily: 'Acme, sans-serif',
  },
  li: {
    fontSize: '1vw',
    display: 'inline',
    alignItems: 'center',
    fontFamily: 'Actor, sans-serif',
    marginBottom: '5%',
    marginRight: '5%',
    color: 'white',
  },
  a: {
    display: 'block',
    color: 'white',
    textDecoration: 'none',
    padding: '1.4% 1.6%',
  },
};
