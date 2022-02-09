import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { Table } from 'antd';
import FormBuilder from 'antd-form-builder';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      types: {},
    };
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <Hello name={this.state.name} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
