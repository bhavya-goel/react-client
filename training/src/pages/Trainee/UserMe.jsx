import React from 'react'
import { query } from './data/query'
import { Query } from 'react-apollo'
function UserMe() {
    return (
        <>
            <h1>
                Trainee Profile
            </h1>
            <Query
                query={query.me}
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