import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'

import './App.css';
import PostViewer from './PostViewer';
import AddPost from './AddPost';
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  clientState: { defaults: {}, resolvers: {} }
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id='main'>
          <h1>Eli Reading List</h1>
          <PostViewer />
          <AddPost />
        </div>
      </ApolloProvider>
    );
  }
}


export default App;
