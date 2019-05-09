import React from 'react';

import Flat from './flat';

const FlatList = ({ flats }) => {
  return flats.map((flat, i) => <Flat key={i + 1} info={flat} />);
};

export default FlatList;
