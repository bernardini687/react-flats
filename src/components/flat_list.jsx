import React from 'react';

import Flat from './flat';

const FlatList = ({ flats, selectedFlat }) => {
  return flats.map((flat) => {
    if (flat === selectedFlat) {
      return <Flat key={flat.name} info={flat} selected />;
    }
    return <Flat key={flat.name} info={flat} />;
  });
};

export default FlatList;
