import { createMuiTheme, makeStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors';

export const innerTheme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[500],
    },
  },
})

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: '1',
    marginBottom: theme.spacing(2),
  },
  title: {
    flexGrow: '1'
  }
}))