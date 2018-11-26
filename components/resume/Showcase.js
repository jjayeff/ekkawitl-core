import React from 'react';
import logo from '../../img/logo7.png';

class Showcase extends React.Component {
  render() {
    return (
      <div class="showcase container">
        <div class="row">
          <div class="col s12 m10 offset-m1 center">
            <img src={logo} height="200px" />
            <h4>Take Your Dream Vacation</h4>
            <p class="light grey-text text-lighten-3 hide-on-small-only">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              non illo earum cumque id est!
            </p>
            <a
              href=""
              class="btn-large waves-effect waves-light  white black-text"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Showcase;
