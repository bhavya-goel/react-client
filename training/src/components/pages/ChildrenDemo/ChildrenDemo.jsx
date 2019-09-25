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

    render() {
        return(
            <Math
                first={1}
                second={0}
                operator={'+'}
            >
            {(calculate) => this.templateOne(calculate)}
            </Math>
        )
    }
}

export default ChildrenDemo