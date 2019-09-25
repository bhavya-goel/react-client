import React from 'react'

function Math(props) {
    const { first, second, operator, children } = props
    const allowedOperators = ['+', '-', '*', '/']
    let result = null
    let calculate = null
    if (allowedOperators.includes(operator)) {
        result = eval(first+operator+second)
    }
    else {
        result = 'invalid operator'
    }
    calculate = {
        first,
        second,
        operator,
        result
    }
    console.log(result)
    return(
        <div>
            {   result !== 'invalid operator' ?
                (!children ?
                first+' '+operator+' '+second+' '+'='+' '+result :
                children(calculate)) :
                result

            }
        </div>
    )

}

export default Math