import React from 'react'
import Paper from 'material-ui/Paper'
import Activities from './Activities'
import HeaderLink from './HeaderLink'
import Heading from './Heading'
import ExtendedLink from './ExtendedLink'
import Meta from './Meta'
import Text from './Text'
import Separator from './Separator'

const ExperienceList = (props) => {
  return (
    <div>
      <Heading text={props.title} />

      {props.items && props.items.map(item => {
        return (
          <Paper key={item.id} zDepth={0} style={{margin: '0 0 18px 0'}}>
            <HeaderLink {...item.primark} />
            <Meta {...{...item.meta, active: item.active}} />
            <Text style={{marginTop: '12px'}}>{item.note}</Text>
            
            {item.activities && <Separator/>}
            {item.activities && <Activities activities={item.activities}/>}
            <Separator />
            {item.links && item.links.map((link, index) => <ExtendedLink key={index} {...link}/>)}
          </Paper>
        )
      })}
    </div>
  )
}

export default ExperienceList
