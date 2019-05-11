import React from 'react';

import flats from '../../data/flats';
import FlatList from './flat_list';
import SimpleMap from './simple_map';

const App = () => {
  return (
    <div>
      <div className="flat-list">
        <FlatList flats={flats} />
      </div>
      <div className="map-container">
        <SimpleMap flats={flats}/>
      </div>
    </div>
  );
};

export default App;
