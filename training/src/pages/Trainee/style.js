import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(5)
    },
    main: {
        display: 'flex',
        flexDirection: 'row',
        margin: theme.spacing(2)
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        padding: theme.spacing(1)
    },
    card: {
        flexGrow: '1'
    },
    button: {
        margin: 'auto'
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
  }))