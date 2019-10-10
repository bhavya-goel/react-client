import React from 'react'
import { query } from './data/query'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { List } from './components/List'
function GetTrainee() {
    return (
        <>
            <h1>
                Trainee List
            </h1>
            <Query
                query={
                    gql `${query.traineeList}`  
                }
            >
                {({ loading, error, data }) => {
                    if (loading) return <p> Loading </p>
                    if (error) return <p> {console.log(error.message)} </p>
                    const data1 = data.getTrainee.data.records
                    console.log(data.getTrainee.data.count)
                    return <List list={data1} />
                }}
            </Query>
        </>
    ) 
}
export default GetTrainee