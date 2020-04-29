import React from 'react'
import Heading from './Heading'
import Text from './Text'

const Article = (props) => {
  return (
    <div>
      <Heading text={props.title} />
      <Text style={{marginBottom: '18px'}}>{props.text}</Text>
    </div>
  )
}

export default Article
