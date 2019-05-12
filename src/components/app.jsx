import React from 'react';
import GoogleMapReact from 'google-map-react';

import data from '../../data/flats';
import FlatList from './flat_list';
import Marker from './marker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: data[0],
      flats: data
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: data[index] });
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
          <FlatList selectFlatFn={this.selectFlat} flats={flats} selectedFlat={selectedFlat} />
        </div>
        <div className="map-container">
          <GoogleMapReact center={this.center()} defaultZoom={12}>
            <Marker center={this.center()} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
