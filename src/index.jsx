import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import WrappedDashboardPage from './containers/WrappedDashboardPage';
import './App.scss';

const client = new ApolloClient({
  uri: 'https://apollo.sandbox.edx.org/graphql',
  fetchOptions: {
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
  },
});

const App = () => (
  <ApolloProvider client={client}>
    <WrappedDashboardPage />
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
