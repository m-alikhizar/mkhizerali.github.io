import React from 'react'
import Subheader from 'material-ui/Subheader'

const style = {
  padding: 0,
  lineHeight: '24px',
  margin: '12px 0'
}

const SubHeader = (props) => {
  return (
    <Subheader style={{...style, ...props.style}}>{props.children}</Subheader>
  )
}

export default SubHeader
