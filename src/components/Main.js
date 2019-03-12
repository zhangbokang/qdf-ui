require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import UserAdd from '../components/pages/UserAdd';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <UserAdd/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
