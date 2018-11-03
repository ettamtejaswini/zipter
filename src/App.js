import React, { Component } from 'react';
import Form from './form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Zipter - Shipping Made Easy</h1>
          <p>Book your International and Domestic shipments below</p>
        </div>
        <div className='form-details'>
          <div className='required req'>Required</div>
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
