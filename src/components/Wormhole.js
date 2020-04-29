import React from 'react';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';

const Wormhole = (props) => {

  const color = props.primary ? '#e0e0e0': 'rgba(0, 0, 0, 0)';

  const chipContainer = {
    display: 'flex',
    flexFlow: 'row wrap',
    overflowX: 'auto',
    padding: '6px 0'
  }

  const chipStyle = {
    border: `1px solid ${color}`,
    margin: '6px',
  }

  return (
    <Paper style={chipContainer} zDepth={0}>
      {props.items.map((item, index) => {
        return (
          <Chip
            key={index}
            style={chipStyle}>{item}
          </Chip>
        )
      })}
    </Paper>
  )
}

export default Wormhole
