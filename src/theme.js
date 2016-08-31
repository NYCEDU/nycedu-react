import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {
  orange500, orange700,
  blueA200
} from 'material-ui/styles/colors';

const theme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: orange500,
    primary2Color: orange700,
    accent1Color: blueA200,
    pickerHeaderColor: orange500
  },
  appBar: {
    height: 50,
  },
});

export default theme;