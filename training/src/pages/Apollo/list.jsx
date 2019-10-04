import React from 'react'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import { ApolloTest } from './Apollo'

const client = new ApolloClient({
    uri: 'http://localhost:4000/'
})

function List() {
    return(
        <ApolloProvider client={client}>
            <ApolloTest client={client} />
        </ApolloProvider>
    )
}
export default List