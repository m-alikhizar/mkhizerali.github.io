import { connect } from 'react-redux'
import ExperienceList from '../components/ExperienceList'

const mapStateToProps = (state) => {
  return state.experience;
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const Experience = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExperienceList)

export default Experience
