import React from 'react'
import Paper from 'material-ui/Paper'
import Separator from './Separator'
import About from '../containers/About'
import Experience from '../containers/Experience'
import Projects from '../containers/Projects'
import Skills from '../containers/Skills'
import Achievements from '../containers/Achievements'
import Education from '../containers/Education'

const Center = (props) => {
  return (
    <Paper style={{flex: '0 1 auto', zIndex: '2', margin: '430px auto 32px auto', maxWidth: '680px', padding: '32px 20px', border: '1px solid #e0e0e0'}} zDepth={0}>
      <About />
      <Separator />
      <Skills />
      <Separator />
      <Experience />
      <Separator />
      <Projects />
      <Separator />
      <Achievements />
      <Separator />
      <Education />
    </Paper>
  )
}

export default Center
