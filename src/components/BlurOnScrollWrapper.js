import { React, Component } from 'react'
import ReactDOM from 'react-dom'

class BlurOnScrollWrapper extends Component {

  constructor(props) {
    super(props)

    this.props = props;
  }

  componentDidMount() {
    document.addEventListener('scroll', this.onScroll.bind(this))
      // ReactDOM.findDOMNode(this.refs.wrapper).addEventListener('scroll', this.onScroll.bind(this));
  }


  // componentWillUnmount() {
  //   // document.removeEventListener('scroll', this.onScroll.bind(this))
  //     // ReactDOM.findDOMNode(this.refs.table).removeEventListener('scroll', this.onScroll.bind(this));
  // }

  onScroll(e) {}

  render() {
    console.log(this.props)
    return this.props.children
  }
}

export default BlurOnScrollWrapper
