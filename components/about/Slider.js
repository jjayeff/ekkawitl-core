import React from 'react';
import ModalContract from '../index/ModalContract';
import img1 from '../../img/code5.jpg';
import img2 from '../../img/code6.jpg';
import img3 from '../../img/code7.jpg';

if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
  require('materialize-css');
}

class SliderComponent extends React.Component {
  componentDidMount() {
    $('.slider').slider({
      indicators: true,
      height: 500,
      transition: 500,
      interval: 6000
    });
  }
  render() {
    return (
      <section className="slider">
        <ul className="slides">
          <li>
            <img src={img1} alt="" />
            <div className="caption center-align">
              <h2>Take Your Dream Vacation</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                non illo earum cumque id est!
              </h5>
              <a
                href=""
                className="btn-large waves-effect waves-light  white black-text"
              >
                Download Resume
              </a>
            </div>
          </li>
          <li>
            <img src={img2} alt="" />
            <div className="caption left-align">
              <h2>We Work With All Budgets</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                non illo earum cumque id est!
              </h5>
              <a
                href=""
                className="btn-large waves-effect waves-light  white black-text"
              >
                Download Resume
              </a>
            </div>
          </li>
          <li>
            <img src={img3} alt="" />
            <div className="caption right-align">
              <h2>Group & Individual Getaways</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                non illo earum cumque id est!
              </h5>
              <a
                href=""
                className="btn-large waves-effect waves-light  white black-text"
              >
                Download Resume
              </a>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

export default SliderComponent;
