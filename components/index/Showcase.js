import React from 'react';
import logo from '../../img/logo7.png';

class Showcase extends React.Component {
  render() {
    return (
      <div className="showcase container">
        <div className="row">
          <div className="col s12 m10 offset-m1 center">
            <img src={logo} height="200px" />
            <h4>EKKAWIT LERTKRAI</h4>
            <p>
              ติดต่อสอบถามการจ้างงานได้ที่นี้ สามารถโหลด resume ได้ข้างล่างนี้
            </p>
            <br />
            <a
              href="#contact-modal"
              className="btn waves-effect waves-light  white black-text modal-trigger"
            >
              Contract
            </a>
            <a
              href="resume.html"
              className="btn waves-effect waves-light black white-text"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Showcase;
