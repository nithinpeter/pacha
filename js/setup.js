import React, { Component } from 'react';
import { App } from './app';
import { Provider } from 'react-redux';
import { store } from './redux/store'

function setup() {
  class Root extends Component {

    render() {
      return (<Provider store={store}>
        <App />
      </Provider>);
    }
  }

  return Root;
}

export { setup };
