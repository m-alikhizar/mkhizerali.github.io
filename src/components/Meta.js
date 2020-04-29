import React from 'react';

const style = {
  padding: '0',
  fontSize: '12px',
  color: '#333',
  margin: '4px 0',
  display: 'block'
}

const Meta = (props) => {
  let part0 = [], part1 = [];

  props.startDate
    && part0.push(props.startDate)
  props.endDate
    && part0.push(props.endDate)
  props.active
    && part0.push('Present')

  props.location
    && part1.push(props.location)
  props.epoch
    && part1.push(props.epoch)

  let str = '';
  if(part0.length && part1.length)
    str = [part0.join('  -  '), part1.join('  ·  ')].join('  ·  ')
  else
    str = [part0.join('  -  '), part1.join('  ·  ')].join('')

  return (
    <span style={{...style, ...props.style}}>{str}
      {props.children && props.children}
    </span>
  )
}

export default Meta
