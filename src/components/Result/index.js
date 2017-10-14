import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ title, info }) => (
  <div>
    <h3>{title}</h3>
    <div>{info}</div>
  </div>
);

Result.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string
};

export default Result;