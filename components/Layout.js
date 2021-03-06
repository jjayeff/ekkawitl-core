import React, { Component } from 'react';
import Head from 'next/head';
import '../css/main.css';
import ModalContract from './index/ModalContract';
import Navbar from './Navbar';
import Footer from './Footer';
import Showcase from './index/Showcase';
import ShowcaseResume from './resume/Showcase';
import Slider from './about/Slider';
import icon from '../img/logo7.png';

if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
  require('materialize-css');
}

export default class Layout extends Component {
  componentDidMount() {
    $('.modal').modal();
  }

  renderComponent() {
    if (this.props.page == 'index') return <Showcase />;
    else if (this.props.page == 'about') return <Slider />;
    else return <ShowcaseResume />;
  }
  render() {
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
          <link rel="icon" type="image/png" href={icon} />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css"
            rel="stylesheet"
          />
          <script src="https://code.jquery.com/jquery-2.1.1.min.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js" />
          <script src="path/to/your/bundle.js" />
        </Head>
        <header
          className={
            this.props.page == 'index'
              ? 'main-header'
              : this.props.page == 'resume'
              ? 'resume-header'
              : ''
          }
        >
          <Navbar page={this.props.page} />
          {this.renderComponent()}
        </header>
        {this.props.children}
        <Footer />
        {/* All Modal */}
        <ModalContract />
      </div>
    );
  }
}
