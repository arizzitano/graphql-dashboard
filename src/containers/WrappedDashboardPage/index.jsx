import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import DashboardPage from '../../components/DashboardPage';

const WrappedDashboardPage = () => (
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

      return <DashboardPage />;
    }}
  </Query>
);

export default WrappedDashboardPage;
