import React from 'react';
import PropTypes from 'prop-types';

const DashboardPage = ({ enrollments }) => (
  <div>
    <h3>Enrollments</h3>
    <ul>
      {enrollments &&
        enrollments.map((enrollment, i) => (
          <li key={i}>
            <span>{enrollment.courseRun.title}</span>
          </li>
      ))}
    </ul>
  </div>
);

DashboardPage.defaultProps = {
  enrollments: [],
};

DashboardPage.propTypes = {
  enrollments: PropTypes.arrayOf(PropTypes.object),
};

export default DashboardPage;
