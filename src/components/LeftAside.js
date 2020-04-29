import React from 'react';
import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';

const style = {
  flex: '0 1 auto',
  paddingTop: '32px',
  width: '270',
  borderRight: '1px solid #f3f3f3'
}

const LeftAside = () => {
  return (
    <Paper style={style} zDepth={0}>
      <List>
        <ListItem primaryText="Berlin, Germany" leftIcon={<ContentInbox />} />
        <ListItem primaryText="Experience" leftIcon={<ActionGrade />} />
        <ListItem primaryText="Projects" leftIcon={<ContentSend />} />
        <ListItem primaryText="Skills" leftIcon={<ContentDrafts />} />
        <ListItem primaryText="Achievements" leftIcon={<ContentInbox />} />
        <ListItem primaryText="Education" leftIcon={<ContentInbox />} />
      </List>
    </Paper>
  )
}

export default LeftAside
