import React, { Component } from 'react';
import Head from 'next/head';
import '../css/main.css';
import icon from '../img/logo7.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Showcase from '../components/index/Showcase';
import Slider from '../components/about/Slider';

export default class Layout extends Component {
  renderComponent() {
    console.log(this.props.page);
    if (this.props.page == 'index') return <Showcase />;
    else if (this.props.page == 'about') return <Slider />;
    else return <Showcase />;
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
        </Head>
        <header className="main-header">
          <Navbar />
          {this.renderComponent()}
        </header>
        {this.props.children}
        <Footer />
        <script src="https://code.jquery.com/jquery-2.1.1.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js" />
        <script src="path/to/your/bundle.js" />
      </div>
    );
  }
}
