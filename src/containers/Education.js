import { connect } from 'react-redux'
import EducationList from '../components/EducationList'

const mapStateToProps = (state) => {
  return state.education;
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const Education = connect(
  mapStateToProps,
  mapDispatchToProps
)(EducationList)

export default Education
