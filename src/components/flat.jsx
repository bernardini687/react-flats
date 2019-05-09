/* eslint prefer-template: off */

import React from 'react';

const Flat = ({ info }) => {
  const divStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${info.imageUrl})`
  };

  return (
    <div className="card" style={divStyle}>
      <div className="card-category">
        {info.price + ' ' + info.currency}
      </div>
      <div className="card-description">
        <h2>{info.name}</h2>
      </div>
    </div>
  );
};

export default Flat;

/*
style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
url('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg';);"
*/
