import React from 'react';

class ModalContract extends React.Component {
  render() {
    return (
      <div id="contact-modal" class="modal">
        <div class="modal-content">
          <div class="card horizontal">
            <div class="card-image">
              <img src="img/people.jpg" />
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <span class="card-title">Ekkawit Lertkrai (JayJeff)</span>
                <hr />
                <div class="chip">
                  <img src="img/fb.png" alt="" /> <a href="#">@ekkawit.l</a>
                </div>
                <div class="chip">
                  <img src="img/ig.png" alt="" /> <a href="#">@jayjeffy</a>
                </div>
                <div class="chip">
                  <img src="img/twitter.png" alt="" /> <a href="#">@jjayeff</a>
                </div>
                <div class="chip">
                  <img src="img/in.jpg" alt="" />{' '}
                  <a href="#">ekkawit-lertkrai</a>
                </div>
                <div class="chip">
                  <img src="img/line.png" alt="" /> <a href="#">jjayeff</a>
                </div>
                <div class="chip">
                  <img src="img/phone.jpg" alt="" />{' '}
                  <a href="#">+66 899849157</a>
                </div>
                <div class="chip">
                  <img src="img/mail.png" alt="" />
                  <a href="#">ekkawit.lertkrai@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <a class="modal-action modal-close waves-effect waves-green btn-flat">
            Ok
          </a>
        </div>
      </div>
    );
  }
}

export default ModalContract;
