/* eslint prefer-template: off */
/* eslint jsx-a11y/click-events-have-key-events: off */
/* eslint jsx-a11y/no-static-element-interactions: off */

import React from 'react';

class Flat extends React.Component {
  handleClick = (event) => {
    console.log(event.target);
  };

  render() {
    const { info, selected } = this.props;
    const divStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${info.imageUrl})`
    };

    return (
      <div onClick={this.handleClick} className={selected ? 'active card' : 'card'} style={divStyle}>
        <div className="card-category">
          {info.price + ' ' + info.currency}
        </div>
        <div className="card-description">
          <h2>{info.name}</h2>
        </div>
      </div>
    );
  }
}

export default Flat;
