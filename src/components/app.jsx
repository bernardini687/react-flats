import React from 'react';
import GoogleMapReact from 'google-map-react';

import data from '../../data/flats';
import FlatList from './flat_list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: data[4],
      flats: data
    };
  }

  center() {
    const { selectedFlat } = this.state;
    return { lat: selectedFlat.lat, lng: selectedFlat.lng };
  }

  render() {
    const { selectedFlat, flats } = this.state;
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={flats} />
        </div>
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12} />
        </div>
      </div>
    );
  }
}

export default App;
