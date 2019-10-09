import React from 'react'
import { query } from './data/query'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
function UserMe() {
    return (
        <>
            <h1>
                Trainee Profile
            </h1>
            <Query
                query={
                    gql `${query.me}`  
                }
            >
                {({ loading, error, data }) => {
                    if (loading) return <p> Loading </p>
                    if (error) return <p> {error.message} </p>
                    return <p>{data.me.data.name}</p>
                }}
            </Query>
        </>
    ) 
}
export default UserMe