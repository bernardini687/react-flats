import React from 'react';

import Flat from './flat';

const FlatList = ({ flats, selectedFlat, selectFlatFn }) => {
  return flats.map((flat) => {
    if (flat === selectedFlat) {
      return <Flat key={flat.name} info={flat} selectFlatFn={selectFlatFn} selected />;
    }
    return <Flat key={flat.name} info={flat} selectFlatFn={selectFlatFn} />;
  });
};

export default FlatList;
