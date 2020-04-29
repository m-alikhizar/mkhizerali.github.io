// reducer is a pure function which maps the cahnge in state and returns a new state.
// it receives state and action as an argument
import ActionTypes from '../constants/ActionTypes'

const skill = (state = '', action) => {
  switch(action.type) {

    case ActionTypes.ADD_SKILL:
      return action.text

    default:
      return state
  }
}

const skills = (state={ title: 'Skills', items: [] }, action) => {
  switch(action.type) {

    case ActionTypes.ADD_SKILL:
      const items = state.items;
      return {
        title: state.title, items: [ ...items, skill(undefined, action) ]
      }

    default:
      return state
  }
}

export default skills
