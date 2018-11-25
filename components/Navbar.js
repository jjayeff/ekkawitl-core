import React from 'react';
import Link from 'next/link';
import { Navbar, NavItem } from 'react-materialize';
import logo_main from '../img/logo5.png';
import eng from '../img/english.png';
import thai from '../img/thailand.jpg';

var logo = <img src={logo_main} className="brand-logo logo-img" />;

class Index extends React.Component {
  render() {
    return (
      <div className="nav-wrapper container">
        <Navbar brand={logo} right className="transparent">
          <NavItem onClick={() => console.log('test click')}>
            <Link prefetch href="/">
              HOME
            </Link>
          </NavItem>
          <NavItem onClick={() => console.log('test click')}>PORTFOLIO</NavItem>
          <NavItem onClick={() => console.log('test click')}>
            <Link prefetch href="/about">
              ABOUT
            </Link>
          </NavItem>
          <NavItem onClick={() => console.log('test click')}>RESUME</NavItem>
          <NavItem onClick={() => console.log('test click')}>CONTACT</NavItem>
          <NavItem onClick={() => console.log('test click')}>
            <a className="flag-language" href="#">
              <img src={eng} className="circle" height="25px" width="25px" />
            </a>
          </NavItem>
          <NavItem onClick={() => console.log('test click')}>
            <a className="flag-language" href="#">
              <img src={thai} className="circle " height="25px" width="25px" />
            </a>
          </NavItem>
        </Navbar>
      </div>
    );
  }
}

export default Index;
