import React from 'react'
import Heading from './Heading'
import Wormhole from './Wormhole'

const SkillList = (props) => {
  return (
    <div>
      <Heading text={props.title} />
      <Wormhole primary={true} items={props.items}/>
    </div>
  )
}

export default SkillList
