import React from 'react'
import Paper from 'material-ui/Paper'
import HeaderLink from './HeaderLink'
import Heading from './Heading'
import ExtendedLink from './ExtendedLink'
import Meta from './Meta'
import Text from './Text'
import Separator from './Separator'

const ProjectList = (props) => {
  return (
    <div>
      {props.title && <Heading text={props.title} />}

      {props.items && props.items.map((item, index) => {
        return (
          <Paper key={index} zDepth={0} style={{margin: '0 0 18px 0'}}>
            <HeaderLink title={item.title} />
            <Meta style={{display: 'inline'}}>
              &nbsp;&nbsp;·&nbsp;&nbsp;<span>{item.designation}</span>
              <div style={{marginTop: '8px'}}>{item.technologies.join(', ')}</div>
            </Meta>
            <Text style={{marginTop: '12px'}}>{item.note}</Text>
            {index+1 !== props.items.length && <Separator />}
            {item.links && item.links.map(link => <ExtendedLink {...link}/>)}
          </Paper>
        )
      })}
    </div>
  )
}

export default ProjectList
