import React from 'react';

import Flat from './flat';

const FlatList = ({ flats, selectedFlat, selectFlatFn }) => {
  return flats.map((flat, i) => {
    if (flat === selectedFlat) {
      // Bad solution
      return <Flat key={flat.name} info={flat} selectFlatFn={selectFlatFn} index={i} selected />;
    }
    return <Flat key={flat.name} info={flat} selectFlatFn={selectFlatFn} index={i} />;
  });
};

export default FlatList;
