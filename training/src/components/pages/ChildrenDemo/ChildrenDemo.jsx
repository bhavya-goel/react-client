import React from 'react'
import { Math } from '../../Math'
class ChildrenDemo extends React.Component{
    templateOne = (calculate) => {
        const { first, operator, second, result } = calculate
        return (
            <div>
                { first+' '+operator+' '+second+' '+'='+' '+result }
            </div>
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
            <div>
                { operator+' of '+first+' and '+second+' is '+result }
            </div>
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
            </>
        )
    }
}

export default ChildrenDemo