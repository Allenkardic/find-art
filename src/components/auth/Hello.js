import React, { Component } from 'react';

class Hello extends Component {
  constructor() {
    super();
    this.state = { name: '' };
  }

  componentDidMount() {
    this.setState({ name: 'akwe' });
    console.log('we', this.state);
  }

  onclick = () => {
    this.setState({ name: 'yak' });
    console.log('here', this.state);
  };

  render() {
    return (
      <div>
        <h1>hello</h1>
        <button onClick={this.onclick}>click</button>
      </div>
    );
  }
}
export default Hello;
