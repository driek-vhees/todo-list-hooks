import React from 'react';
import PropTypes from 'prop-types';

const TodoDetails = ({ onClick, todo: { completed, title } }) => (
  <li onClick={onClick} onKeyDown={onClick} role="menuitem" className={completed ? 'complete' : 'incomplete'}>
    <input type="checkbox" value={1} readOnly checked={completed} />
    {title}
  </li>
);

TodoDetails.propTypes = {
  onClick: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoDetails;
