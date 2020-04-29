import { combineReducers } from 'redux'

import about from './about'
import experience from './experience'
import projects from './projects'
import skills from './skills'
import achievements from './achievements'
import education from './education'

const ReApp =
combineReducers({
  about,
  experience,
  projects,
  skills,
  achievements,
  education
})

export default ReApp
