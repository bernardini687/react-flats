import React, { Component } from 'react';

import FlatList from './flat_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: []
    };
  }

  render() {
    return (
      <FlatList />
    );
  }
}

export default App;
