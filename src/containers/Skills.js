import { connect } from 'react-redux'
import SkillList from '../components/SkillList'

const mapStateToProps = (state) => {
  return state.skills;
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const Skills = connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillList)

export default Skills
