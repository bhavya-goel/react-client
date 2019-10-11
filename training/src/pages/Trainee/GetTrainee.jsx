import React from 'react'
import { query } from './data/query'
import { Query } from 'react-apollo'
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
                query={ query.traineeList }
            >
                {({ loading, error, data, fetchMore }) => {
                    if (loading) return <p> Loading </p>
                    if (error) return <p> Error Loading{console.log(error.message)} </p>
                    const { getTrainee: { data: { records } } } = data
                    return <List list={records} loadMore={async ()=> {
                            skip = skip+limit
                            const result = await fetchMore({
                                variables: {
                                    skip,
                                    limit
                                },
                                updateQuery: () => {}
                            })
                            if(result) {
                                return result.data.getTrainee.data.records
                            }
                         }} />
                }}
            </Query>
        </>
    ) 
}
export default GetTrainee