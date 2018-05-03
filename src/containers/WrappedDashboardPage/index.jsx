import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';

import DashboardPage from '../../components/DashboardPage';

const createClient = apiUri => new ApolloClient({
  uri: apiUri,
});

const WrappedDashboardPage = ({ apiUri, username }) => (
  <ApolloProvider client={createClient(apiUri)}>
    <Query
      query={gql`
        {
          enrollments(username: "${username}") {
            username
            mode
            created
            courseRun {
              id
              title
              start
              end
            }
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        return (
          <div>
            <p>Logged in as {username}</p>
            <DashboardPage enrollments={data.enrollments} />
          </div>
        );
      }}
    </Query>
  </ApolloProvider>
);

WrappedDashboardPage.propTypes = {
  apiUri: PropTypes.string,
  username: PropTypes.string.isRequired,
};

WrappedDashboardPage.defaultProps = {
  apiUri: null,
};

export default WrappedDashboardPage;
