import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';

import DashboardPage from '../../components/DashboardPage';

const createClient = apiUri => new ApolloClient({
  uri: apiUri,
});

const WrappedDashboardPage = ({ apiUri }) => (
  <ApolloProvider client={createClient(apiUri)}>
    <Query
      query={gql`
        {
          user(firstName: "Rafaela") {
            firstName
            lastName
            enrollments {
              mode
              courseRun {
                title
                fullDescription
                shortDescription
              }
            }
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        console.log(data);
        return <DashboardPage data={data.user} />;
      }}
    </Query>
  </ApolloProvider>
);

WrappedDashboardPage.propTypes = {
  apiUri: PropTypes.string,
};

WrappedDashboardPage.defaultProps = {
  apiUri: null,
};

export default WrappedDashboardPage;
