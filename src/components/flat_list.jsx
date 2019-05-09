import React from 'react';

import Flat from './flat';

const FlatList = ({ flats }) => {
  return flats.map(flat => <Flat key={flat.name} info={flat} />);
};

export default FlatList;
