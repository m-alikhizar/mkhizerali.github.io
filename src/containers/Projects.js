import { connect } from 'react-redux'
import ProjectList from '../components/ProjectList'

const mapStateToProps = (state) => {
  return state.projects;
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const Projects = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList)

export default Projects
