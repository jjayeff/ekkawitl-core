import React from 'react';
import { About, Home } from './Router';
import logo_main from '../img/logo5.png';
import logo_side from '../img/logo6.png';
import eng from '../img/english.png';
import thai from '../img/thailand.jpg';

if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
  require('materialize-css');
}

class Index extends React.Component {
  componentDidMount() {
    $('.button-collapse').sideNav();
    $('.modal').modal();
  }
  render() {
    console.log(this.props.page);
    return (
      <nav className="transparent">
        <div className="container">
          <div className="nav-wrapper">
            {/* <!-- Header --> */}
            <img src={logo_main} className="brand-logo logo-img" />
            <a href="#" data-activates="side-nav" className="button-collapse">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a
                  className={this.props.page == 'index' ? 'active-link' : ''}
                  onClick={Home}
                >
                  HOME
                </a>
              </li>
              <li>
                <a>PORTFOLIO</a>
              </li>
              <li>
                <a
                  className={this.props.page == 'about' ? 'active-link' : ''}
                  onClick={About}
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a>RESUME</a>
              </li>
              <li>
                <a href="#contact-modal" className="modal-trigger">
                  CONTACT
                </a>
              </li>
              <li>
                <a className="flag-language" href="#">
                  <img
                    src={eng}
                    className="circle"
                    height="25px"
                    width="25px"
                  />
                </a>
              </li>
              <li>
                <a className="flag-language" href="#">
                  <img
                    src={thai}
                    className="circle "
                    height="25px"
                    width="25px"
                  />
                </a>
              </li>
            </ul>
            {/* <!-- Side nav --> */}
            <ul id="side-nav" className="side-nav">
              <h4 className="center">
                <img src={logo_side} className="logo-img" />
              </h4>
              <li>
                <div className="divider" />
              </li>
              <li>
                <a>
                  <i className="material-icons grey-text text-darken-4">home</i>
                  HOME
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-cog grey-text text-darken-4" /> PORTFOLIO
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-users grey-text text-darken-4" /> ABOUT
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-users grey-text text-darken-4" /> RESUME
                </a>
              </li>
              <li>
                <div className="divider" />
              </li>
              <li>
                <a href="#contact-modal" className="btn green modal-trigger">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Index;
