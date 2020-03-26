import React from 'react';
import logo from './airplane7.png';
import SearchContainer from './containers/SearchContainer.js'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to OneSky
            <SearchContainer />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
