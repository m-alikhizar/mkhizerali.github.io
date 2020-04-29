import React from 'react'

const style = {
  color: '#02a8f3',
  textDecoration: 'none'
}

const Link = (props) => {
  return (
    <a style={style} href={props.href} target={props.target}>{props.title}</a>
  )
}

export default Link
