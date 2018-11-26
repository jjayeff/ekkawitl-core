import React from 'react';
import img1 from '../../img/people.jpg';
import fb from '../../img/fb.png';
import ig from '../../img/ig.png';
import twitter from '../../img/twitter.png';
import ln from '../../img/in.jpg';
import line from '../../img/line.png';
import phone from '../../img/phone.jpg';
import mail from '../../img/mail.png';

class ModalContract extends React.Component {
  render() {
    return (
      <div id="contact-modal" className="modal">
        <div className="modal-content">
          <div className="card horizontal">
            <div className="card-image">
              <img src={img1} />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <span className="card-title black-text">
                  Ekkawit Lertkrai (JayJeff)
                </span>
                <hr />
                <div className="chip">
                  <img src={fb} alt="" /> <a href="">@ekkawit.l</a>
                </div>
                <div className="chip">
                  <img src={ig} alt="" /> <a href="">@jayjeffy</a>
                </div>
                <div className="chip">
                  <img src={ln} alt="" /> <a href="">ekkawit-lertkrai</a>
                </div>
                <div className="chip">
                  <img src={line} alt="" /> <a href="">jjayeff</a>
                </div>
                <div className="chip">
                  <img src={mail} alt="" />
                  <a href="">ekkawit.lertkrai@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <a className="modal-action modal-close waves-effect waves-green btn-flat">
            Ok
          </a>
        </div>
      </div>
    );
  }
}

export default ModalContract;
