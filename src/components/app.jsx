import React from 'react';
import GoogleMapReact from 'google-map-react';

import flats from '../../data/flats';
import FlatList from './flat_list';
// import SimpleMap from './simple_map';

const App = () => {
  return (
    <div>
      <div className="flat-list">
        <FlatList flats={flats} />
      </div>
      <div className="map-container">
        <GoogleMapReact defaultCenter={{ lat: 48.864716, lng: 2.349014 }} defaultZoom={12} />
      </div>
    </div>
  );
};

export default App;
