import React from 'react';

import './Card.css'

function Card({ titulo, children, ...props }) {
  const { color } = props

  const style = {
    backgroundColor: color || '#F00',
    borderColor: color || '#F00'
  }

  return (
      <div className="Card" style={style}>
          <div className="Title">{titulo}</div>
          <div className="Content">{children}</div>
      </div>
  );
}

export default Card;