import { connect } from 'react-redux'
import Article from '../components/Article'

const mapStateToProps = (state) => {
  return state.about;
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const About = connect(
  mapStateToProps,
  mapDispatchToProps
)(Article)

export default About
