import React from 'react'
import Link from './Link'

const HeaderLink = (props) => {
  return (
    <Link style={{fontSize: '18px'}} href={props.link} target={props.target} title={props.title}/>
  )
}

export default HeaderLink
