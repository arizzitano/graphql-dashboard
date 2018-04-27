import React from 'react';
import PropTypes from 'prop-types';

const DashboardPage = ({ data }) => (
  <div>
    <ul>
      {data.enrollments &&
        data.enrollments.map(enrollment => (
          <li>
            <span>{enrollment.courseRun.title}</span>
          </li>
      ))}
    </ul>
  </div>
);


DashboardPage.defaultProps = {
  data: {},
};

DashboardPage.propTypes = {
  data: PropTypes.shape,
};

export default DashboardPage;
