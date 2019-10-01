import React from 'react'
import { Math } from '../../components'
import Typography from '@material-ui/core/Typography'
class ChildrenDemo extends React.Component{
    templateOne = (calculate) => {
        const { first, operator, second, result } = calculate
        return (
            <Typography variant='subtitle2'>
                <div>
                    { first+' '+operator+' '+second+' '+'='+' '+result }
                </div>
            </Typography>
        )
    }
    templateTWO = (calculate) => {
        let { first, operator, second, result } = calculate

        //change operator name according to its sign
        switch(operator) {
            case '+':
                operator = 'Sum'
                break
            case '-':
                operator = 'Difference'
                break
            case '*':
                operator = 'product'
                break
            case '/':
                operator = 'division'
        }
        return (
            <Typography variant='subtitle2'>
                <div>
                    { operator+' of '+first+' and '+second+' is '+result }
                </div>
            </Typography>
        )
    }

    render() {
        return(
            <>
                <Math
                    first={1}
                    second={0}
                    operator={'+'}
                >
                {(calculate) => this.templateOne(calculate)}
                </Math>
                <Math
                    first={1}
                    second={0}
                    operator={'+'}
                >
                {(calculate) => this.templateTWO(calculate)}
                </Math>
                <Math
                    first={5}
                    second={3}
                    operator={'-'}
                >
                {(calculate) => this.templateOne(calculate)}
                </Math>
                <Math
                    first={1}
                    second={9}
                    operator={'*'}
                >
                {(calculate) => this.templateOne(calculate)}
                </Math>
                <Math
                    first={1}
                    second={0}
                    operator={'/'}
                >
                {(calculate) => this.templateOne(calculate)}
                </Math>
            </>
        )
    }
}

export default ChildrenDemo