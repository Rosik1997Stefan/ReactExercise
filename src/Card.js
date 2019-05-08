import React from 'react';

const Card = (props) => {
  return (
    <div className={`Card background-${props.color}`}>
    	<h1>{props.title}</h1>
    	{props.children}
    </div>
  )
}

export default Card;