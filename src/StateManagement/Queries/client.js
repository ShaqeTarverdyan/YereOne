import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient ({
    link:new HttpLink({ url: 'https://www.yereone.com'}),
    cache: new InMemoryCache()
})


export default client;