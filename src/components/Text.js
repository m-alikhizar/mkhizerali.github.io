import React from 'react';

const style = {
  margin: '0',
  padding: '0',
  color: 'rgb(49, 49, 49)',
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: '300'
}

const Text = (props) => {
  return (
    <p style={{...style, ...props.style}}>{props.children}</p>
  )
}

export default Text
