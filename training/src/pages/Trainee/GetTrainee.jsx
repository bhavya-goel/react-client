import React from 'react'
import { query } from './data/query'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { List } from './components/List'
function GetTrainee() {
    let skip = 0
    let limit = 10
    return (
        <>
            <h1>
                Trainee List
            </h1>
            <Query
                variables={{
                    skip,
                    limit
                }}
                query={
                    gql `${query.traineeList}`  
                }
            >
                {({ loading, error, data, fetchMore }) => {
                    if (loading) return <p> Loading </p>
                    if (error) return <p> Error Loading{console.log(error.message)} </p>
                    const { getTrainee: { data: { records } } } = data
                    return <List list={records} loadMore={()=> {
                            skip = skip+limit
                            return fetchMore({
                                variables: {
                                    skip,
                                    limit
                                },
                                updateQuery: (previousResult, {fetchMoreResult}) => {
                                    const { getTrainee: { data: { records }}} = fetchMoreResult;
                                    return records;
                                }
                            })
                         }} />
                }}
            </Query>
        </>
    ) 
}
export default GetTrainee