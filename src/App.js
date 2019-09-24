import React, { Component } from 'react';
import { HeaderComponent as Header } from './components/Header';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Routes />
      </React.Fragment>
    );
  }
}

export default App;
