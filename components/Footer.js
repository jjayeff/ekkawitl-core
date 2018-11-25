import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer grey darken-4 ">
        <div className="container center">
          <h4 className="white-text">
            Get a website that looks amazing and actually works.
          </h4>
          <br />
          <br />
          <div className="row">
            <a href="#" className="col m2 s4 white-text text-lighten-4">
              HOME
            </a>
            <a href="#" className="col m2 s4 white-text text-lighten-4">
              PORTFOLIO
            </a>
            <a
              href="about.html"
              className="col m2 s4 white-text text-lighten-4"
            >
              ABOUT
            </a>
            <a href="#" className="col m2 s4 white-text text-lighten-4">
              BLOG
            </a>
            <a
              href="resume.html"
              className="col m2 s4 white-text text-lighten-4"
            >
              RESUME
            </a>
            <a
              href="#contact-modal"
              className="col m2 s4 white-text text-lighten-4 modal-trigger"
            >
              CONTACT
            </a>
          </div>
        </div>
        <div className="footer-copyright grey darken-4">
          <div className="container center">
            <p className="grey-text">
              © 2018 Ekkawit Lertkrai. All rights reserved. Web design &
              Developer
            </p>
            <div className="row">
              <a
                href="#"
                className="col s1 offset-s4 white-text text-lighten-4"
              >
                <i className="fab fa-facebook" />
              </a>
              <a href="#" className="col s1 white-text text-lighten-4">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className="col s1 white-text text-lighten-4">
                <i className="fab fa-instagram" />
              </a>
              <a href="#" className="col s1 white-text text-lighten-4">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
