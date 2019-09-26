import { createMuiTheme } from '@material-ui/core/styles';
import { grey, green } from '@material-ui/core/colors';
export default createMuiTheme({
    palette: {
        primary: grey,
        secondary: green
    },
    typography: {
        fontFamily: [
            'Comic Sans MS',
            'cursive',
           'sans-serif'
        ].join(','),
        htmlFontSize: 10
    }
})