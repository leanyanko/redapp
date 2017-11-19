import React, {
  Component,
} from 'react';

import { connect } from 'react-redux';

import {
  activateGeod,
  closeGeod,
  aGeoTest,
  closeTest
} from './redux';


// App.js
export class App extends Component {

  render() {
    return (
      <div>
        <div>
          <h1>{this.props.geod.title || 'Hello World!'}</h1>

          {this.props.geod.title ?
            <button onClick={this.props.closeGeod}>
              Exit Geod
            </button> :
            <button onClick={() => this.props.activateGeod({ title: 'I am a geo dude!' })}>
              Click Me!
            </button>
          }
        </div>

        <div>
          <h1>{this.props.geotest.title || 'test' }</h1>

          {this.props.geotest.title ? <button onClick={this.props.closeTest}>
            Exit Geod 
          </button> : 
          <button onClick={() => this.props.aGeoTest({ title : 'TEST' })}>
            Click Me
          </button>}
        </div>

      </div>
    );
  }

}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({
  geod: state.geod,
  geotest: state.geotest
});

const mapDispatchToProps = {
  activateGeod,
  closeGeod,
  aGeoTest,
  closeTest
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
