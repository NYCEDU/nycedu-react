import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {
  lightGreen500, lightGreen100,
  blueA200
} from 'material-ui/styles/colors';

const theme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: lightGreen500,
    primary2Color: lightGreen100,
    accent1Color: blueA200,
    pickerHeaderColor: lightGreen500
  },
  appBar: {
    height: 50,
  },
});

export default theme;