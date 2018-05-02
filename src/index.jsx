import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import WrappedDashboardPage from './containers/WrappedDashboardPage';
import './App.scss';

const App = () => (
  <WrappedDashboardPage
    apiUri="http://localhost:3000/graphql"
    username="staff"
  />
);

ReactDOM.render(<App />, document.getElementById('root'));
