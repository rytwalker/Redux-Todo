import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Portal.css';

const portalRoot = document.getElementById('portal');

class Portal extends Component {
  constructor() {
    super();
    this.element = document.createElement('div');
    this.element.classList = 'Portal';
  }

  componentDidMount() {
    portalRoot.appendChild(this.element);
  }

  componentWillUnmount() {
    portalRoot.appendChild(this.element);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.element);
  }
}

export default Portal;
