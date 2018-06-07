import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SimpleTable from './Table';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SimpleTable />
      </div>
    );
  }
}

export default App;
