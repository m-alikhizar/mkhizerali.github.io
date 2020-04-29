import React from 'react'
import { List, ListItem } from 'material-ui/List'
import SubHeader from './SubHeader'
import Meta from './Meta'

const Activities = (props) => {
  return (
    <div>
      {props.activities.map((activity, index) => { return (
        <div key={index}>
          <SubHeader style={{marginBottom: '0', marginTop: '6px', fontWeight: 500}}>
            {activity.title}
            &nbsp;&nbsp;·&nbsp;&nbsp;<Meta style={{display: 'inline'}} epoch={activity.epoch}/>
          </SubHeader>

          {activity.work &&
            <List>
              {
                activity.work.map((i, idx) => {
                  return ( <ListItem key={idx} leftIcon={<span style={{color: 'rgb(99, 99, 99)', margin: 0, fontSize: '18px', lineHeight: '24px'}}><b>·</b></span>} style={{padding: '3px 12px', fontSize: '14px', fontWeight: '300', color: 'rgb(49, 49, 49)'}} disabled={true}>{i}</ListItem> )
                })
              }
            </List>
          }
        </div>
      )})}
    </div>
  )
}

export default Activities
