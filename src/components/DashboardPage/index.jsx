import React from 'react';
import PropTypes from 'prop-types';

const DashboardPage = ({ enrollments }) => (
  <div>
    <h3>Enrollments</h3>
    <ul>
      {enrollments &&
        enrollments.map(enrollment => (
          <li>
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
  enrollments: PropTypes.shape,
};

export default DashboardPage;
