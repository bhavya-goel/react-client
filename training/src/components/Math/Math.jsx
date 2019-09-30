import React from 'react'

function Math(props) {
    const { first, second, operator, children } = props
    const allowedOperators = ['+', '-', '*', '/']
    let result = null
    let calculate = null

    //check if operator entered is valid
    if (allowedOperators.includes(operator)) {
        result = eval(first+operator+second)
    }
    else {
        result = 'invalid operator'
    }

    // object to be rendered by children
    calculate = {
        first,
        second,
        operator,
        result
    }
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