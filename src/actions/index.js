import ActionTypes from '../constants/ActionTypes'

// action is a pure function which returns a object. it must have a type.

export const addSkill = (text) => {
  return {
    type: ActionTypes.ADD_SKILL,
    text
  }
}
