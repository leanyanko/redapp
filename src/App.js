import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';


import {connect} from 'react-redux';


import {
  activateGeod,
  closeGeod
} from './redux';


//app
export class App extends Component {
  render() {
    return (
      <div>

          <h1>{this.props.geod.title || 'Hello, world'}</h1>


      </div>
    );
  }
}

//AppContainer
const mapStateToProps = {
    geod: state.geod
};

const mapDispatchToProps = {
  activateGeod,
  closeGeod
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


export default AppContainer;
