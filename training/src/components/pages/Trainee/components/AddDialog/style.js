import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginBottom: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '90%',
    },
    passwordField: {
        marginBottom: theme.spacing(1),
        width: 'inherit'
    },
    div: {
        width: '90%',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
        display: 'flex',
        flexDirection: 'row',
    }
}))

export default useStyles