import React from 'react'
import Paper from 'material-ui/Paper'
import SubHeader from './SubHeader'
import Heading from './Heading'
import Meta from './Meta'
import Text from './Text'

const AchievementsList = (props) => {
  return (
    <div>
      <Heading text={props.title} />
      {
        props.items && props.items.map((item, index) => {
          return (
            <Paper key={index} zDepth={0}>
              <SubHeader style={{marginBottom: '0px'}}>{item.title}&nbsp;&nbsp;·&nbsp;&nbsp;<Meta style={{display: 'inline'}}>{item.location}</Meta></SubHeader>
              <Text>Represented: {item.represented}</Text>
              {item.awards && <Text>Awards: {item.awards}</Text>}
            </Paper>
          )
        })
      }
    </div>
  )
}

export default AchievementsList
