import { connect } from 'react-redux'
import AchievementsList from '../components/AchievementsList'

const mapStateToProps = (state) => {
  return state.achievements;
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const Achievements = connect(
  mapStateToProps,
  mapDispatchToProps
)(AchievementsList)

export default Achievements
