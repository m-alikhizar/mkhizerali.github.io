import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { fade } from 'material-ui/utils/colorManipulator'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { cyan500, cyan700, pinkA200, grey100, grey300, grey400, grey500, white, darkBlack, fullBlack, }
  from 'material-ui/styles/colors'


const theme = getMuiTheme({
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },

  appBar: {
    height: 40,
    // padding:
    // fontWeight,
    textColor: cyan500
  },

  chip: {
    backgroundColor: white,
    shadow: 'none'
  },

})

injectTapEventPlugin();

const ThemeWrap = (props) => {
  return (
    <MuiThemeProvider muiTheme={theme}>
      {props.children}
    </MuiThemeProvider>
  )
}

export default ThemeWrap
