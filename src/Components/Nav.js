import React from 'react';
import myLogo from './myLogo.png';

const Nav = () => {
  const handleHover = (event) => {
    event.target.style.color = '#4248bd';
  };

  const handleLeave = (event) => {
    event.target.style.color = '#0D0F37';
  };

  return (
    <div>
      <nav style={navStyle.nav}>
        <div className='nav' style={navStyle.dnav}>
          {/* <img src={myLogo} alt="Logo" style={navStyle.logo} /> */}
          <ul style={navStyle.ul}>
            <li style={navStyle.li}><a style={navStyle.a} onMouseEnter={handleHover} onMouseLeave={handleLeave} href="/">Home</a></li>
            <li style={navStyle.li}><a style={navStyle.a} onMouseEnter={handleHover} onMouseLeave={handleLeave} href="/about">About Us</a></li>
            {/* <li style={navStyle.li} onMouseEnter={handleHover} onMouseLeave={handleLeave}><a style={navStyle.a} href="/services">User</a></li> */}
            {/* <li style={navStyle.li} onMouseEnter={handleHover} onMouseLeave={handleLeave}><a style={navStyle.a} href="/contact">Law</a></li> */}
            {/* <li style={navStyle.li} onMouseEnter={handleHover} onMouseLeave={handleLeave}><a style={navStyle.a} href="/contact">Forum</a></li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

// const navStyle = {
//   nav: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#050B98',
//     padding: '1%',
//     marginBottom: '0.2%',
//     fontFamily: 'Abril Fatface, cursive',
//   },
//   dnav: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   logo: {
//     width: '15%',
//     height: '15%',
//     marginRight: 'auto',
//   },
//   ul: {
//     listStyleType: 'none',
//     display: 'flex',
//     gap: '2%',
//     fontFamily: 'Acme, sans-serif',
//   },
//   li: {
//     fontSize: '1vw',
//     display: 'inline',
//     alignItems: 'center',
//     fontFamily: 'Actor, sans-serif',
//     marginBottom: '5%',
//     marginRight: '5%',
//     color: 'white',
//   },
//   a: {
//     display: 'block',
//     color: 'white',
//     textDecoration: 'none',
//     padding: '1.4% 1.6%',
//   },
// };

const navStyle = {
  nav:{
    borderBottom: '1px solid #a9a9a9',
  },
  dnav: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: '75px',
    height: '50px',
  },
  ul : {
    listStyleType : 'none',
    display: 'flex'
  },
  li : {
    padding: '0 0.6rem',
    ':hover':{
      color: 'black', 
     },
    
  },
  a: {
    textDecoration: 'none',
    color: '#0D0F37',
  },
}