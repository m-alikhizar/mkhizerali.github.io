import React from 'react';

const Heading = (props) => {
  const style = {
    fontSize: '18px',
    margin: '16px 0px',
    color: '#333'
  };

  return (
    <div style={style}>
      {props.text}
    </div>
  )
}

export default Heading
