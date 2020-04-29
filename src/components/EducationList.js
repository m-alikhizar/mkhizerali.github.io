import React from 'react'
import Paper from 'material-ui/Paper'
import SubHeader from './SubHeader'
import Heading from './Heading'
import Meta from './Meta'
import Text from './Text'

import ProjectList from './ProjectList'


const AchievementsList = (props) => {

  return (
    <div>
      <Heading text={props.title} />
      {
        props.items && props.items.map((item, index) => {
          return (
            <Paper key={index} zDepth={0}>
              <SubHeader style={{marginBottom: '0px'}}>{item.institution}&nbsp;&nbsp;·&nbsp;&nbsp;<Meta style={{display: 'inline'}}>{item.location}</Meta></SubHeader>
              <Text>{item.degree}&nbsp;&nbsp;·&nbsp;&nbsp;<Meta style={{display: 'inline'}}>{item.epoch}</Meta></Text>

              <div style={{marginTop: '16px'}}>
                { item.projects &&
                  <ProjectList {...item.projects} />
                }
              </div>

            </Paper>
          )
        })
      }

    </div>
  )
}

export default AchievementsList
