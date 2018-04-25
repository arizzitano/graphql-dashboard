import React from 'react';
import PropTypes from 'prop-types';

const DashboardPage = ({ enrollments }) => (
  <div>
    <ul>
      {enrollments.map(enrollment => (
        <li>
          <span>{enrollment.title}</span>
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
