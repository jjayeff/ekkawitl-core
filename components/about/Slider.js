import React from 'react';
import { Slider, Slide } from 'react-materialize';
import img1 from '../../img/code5.jpg';

class SliderComponent extends React.Component {
  render() {
    return (
      <Slider>
        <Slide src={img1} title="This is our big Tagline!">
          <h2>Take Your Dream Vacation</h2>
          <h5 class="light grey-text text-lighten-3 hide-on-small-only">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non
            illo earum cumque id est!
          </h5>
          <a
            href="#"
            class="btn-large waves-effect waves-light  white black-text"
          >
            Download Resume
          </a>
        </Slide>
        <Slide
          src="http://lorempixel.com/580/250/nature/2"
          title="Left aligned Caption"
          placement="left"
        >
          Here's our small slogan.
        </Slide>
        <Slide
          src="http://lorempixel.com/580/250/nature/3"
          title="Right aligned Caption"
          placement="right"
        >
          Here's our small slogan.
        </Slide>
      </Slider>
    );
  }
}

export default SliderComponent;
