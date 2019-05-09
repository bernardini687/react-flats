import React from 'react';

import Flat from './flat';

const FlatList = ({ flats }) => {
  return (
    <div>
      {flats.map(flat => <Flat id={flat.id} />)}
    </div>
  );
};

export default FlatList;
