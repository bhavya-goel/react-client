import React from 'react'
import gql from 'graphql-tag'
import { queries } from './query'
import { Query } from 'react-apollo'
function ApolloTest() {
    
    return(
        <Query query={gql `${queries.login}`}>
            {({loading, error, data}) => {
            if (loading) return <p>'Loading...'</p>
            if (error) return <p>'Error! ${error.message}'</p>
            return (
                <div>
                    {console.log(data)}
                </div>
            )
        }}
        </Query>
    )
}
export {ApolloTest}